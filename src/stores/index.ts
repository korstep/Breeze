import { defineStore } from 'pinia'
import type { IStoreState } from '@/interfaces/state'
import getCurrentPosition from '@/helpers/geolocation'
import { weatherApiUrl } from '@/constants/api'
import { devices, getDeviceByWidth } from '@/constants/devices'
import orientation from '@/constants/orientation'
import { defineStore } from 'pinia'
import getCurrentPosition from '@/helpers/geolocation'
import { weatherApiUrl } from '@/constants/api'
import { unitsDefaults } from '@/constants/settings'
import type { IWeatherStoreState } from '@/stores/weather/weatherStoreInterface'
import dayjs from 'dayjs'
import ky from 'ky'

const useStore = defineStore('store', {
  state: () =>
    <IStoreState>{
      deviceType: '',
      windowWidth: 0,
      windowHeight: 0,
      orientation: '',
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
    addListeners() {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },
    onResize(): void {
      const { innerWidth, innerHeight } = window
      this.windowWidth = innerWidth
      this.windowHeight = innerHeight
      this.setDeviceType(innerWidth)
      this.setOrientation(innerWidth, innerHeight)
    },
    setDeviceType(windowWidth: number): void {
      this.deviceType = getDeviceByWidth(windowWidth)
    },
    setOrientation(width: number, height: number): void {
      this.orientation = width < height ? orientation.VERTICAL : orientation.HORIZONTAL
    },
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
    isMobile(): boolean {
      return this.deviceType === devices.MOBILE
    },
    isTablet(): boolean {
      return this.deviceType === devices.TABLET
    },
    isDesktop(): boolean {
      return this.deviceType === devices.DESKTOP
    }
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
