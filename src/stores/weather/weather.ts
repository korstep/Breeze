import { defineStore } from 'pinia'
import getCurrentPosition from '@/helpers/geolocation'
import { weatherApiUrl } from '@/constants/api'
import { unitsDefaults } from '@/constants/settings'
import type { IWeatherStoreState } from '@/stores/weather/weatherStoreInterface'
import dayjs from 'dayjs'
import ky from 'ky'

const useWeatherStore = defineStore('weather', {
  state: () =>
    <IWeatherStoreState>{
      position: {},
      weatherData: {},
      isEnabledNotifications: false,
      isTwelveHoursTimeFormat: false,
      isEnabledWeatherByLocation: true,
      temperatureUnit: unitsDefaults.temperature,
      windSpeedUnit: unitsDefaults.windSpeed,
      pressureUnit: unitsDefaults.pressure,
      precipitationUnit: unitsDefaults.precipitation,
      distanceUnit: unitsDefaults.distance
    },
  actions: {
    setStateValueByKey(key: keyof IWeatherStoreState, value: IWeatherStoreState[keyof IWeatherStoreState]): void {
      this[key] = value
    },
    async setGeolocation(): Promise<void> {
      const { latitude, longitude } = (await getCurrentPosition()).coords
      this.position.latitude = latitude
      this.position.longitude = longitude
    },
    async setWeatherData(): Promise<void> {
      try {
        this.weatherData = await ky
          .get(`${weatherApiUrl}`, {
            searchParams: {
              key: import.meta.env.VITE_WEATHER_API_KEY,
              q: `${this.position.latitude},${this.position.longitude}`,
              days: 4
            }
          })
          .json()
      } catch (error) {
        console.error(error)
      }
    }
  },
  getters: {
    getCurrentWeather: (state): any => {
      const currentHourWeather =
        state.weatherData.forecast.forecastday[0].hour.find((item) => dayjs(item.time).hour() === dayjs().hour()) ??
        state.weatherData.forecast.forecastday[0].hour[0]

      return {
        feelsLike:
          currentHourWeather[`feelslike_${state.temperatureUnit.key}` as keyof typeof currentHourWeather] +
          state.temperatureUnit.short,
        windSpeed:
          currentHourWeather[`wind_${state.windSpeedUnit.key}` as keyof typeof currentHourWeather] +
          state.windSpeedUnit.short,
        chanceOfRain: currentHourWeather.chance_of_rain,
        uv: currentHourWeather.uv
      }
    },
    getNextDaysForecast: (state): any => {
      const nextDaysForecast = state.weatherData.forecast.forecastday

      return nextDaysForecast.map((item) => {
        return {
          day: item.date,
          weatherType: item.day.condition.text,
          iconUrl: item.day.condition.icon,
          maxTemp: item.day[`maxtemp_${state.temperatureUnit.key}` as keyof typeof item.day] + state.temperatureUnit.short,
          minTemp: item.day[`mintemp_${state.temperatureUnit.key}` as keyof typeof item.day] + state.temperatureUnit.short
        }
      })
    }
  }
})

export default useWeatherStore
