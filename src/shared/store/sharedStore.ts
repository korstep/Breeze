import { defineStore } from 'pinia'
import { unitsDefaults } from '@/modules/Settings'
import type {
  IAirConditions,
  ICurrentWeather,
  INextDayForecast,
  IStoreState,
  ITodayForecast
} from '@/shared/store/interfaces/storeInterfaces'
import ky from 'ky'
import { devices, getDeviceByWidth } from '@/shared/constants/devices'
import getCurrentPosition from '@/shared/helpers/geolocation'
import orientation from '@/shared/constants/orientation'
import type { Hour } from '@/shared/store/interfaces/weatherData'
import { weatherApiUrl } from '@/shared/constants/api'
import dayjs from 'dayjs'
import { generateUniqueKey } from '@/shared/helpers/uniqueKey'

const useSharedStore = defineStore('sharedStore', {
  state: (): IStoreState => {
    return {
      deviceType: '',
      windowWidth: 0,
      windowHeight: 0,
      orientation: '',
      position: {
        latitude: 0,
        longitude: 0
      },
      errorMessages: [],
      weatherData: {},
      isEnabledNotifications: false,
      isTwelveHoursTimeFormat: false,
      isEnabledWeatherByLocation: true,
      temperatureUnit: unitsDefaults.temperature,
      windSpeedUnit: unitsDefaults.windSpeed,
      pressureUnit: unitsDefaults.pressure,
      precipitationUnit: unitsDefaults.precipitation,
      distanceUnit: unitsDefaults.distance,
      currentHour: dayjs().hour()
    }
  },
  actions: {
    addListeners() {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },
    setIntervalToUpdateCurrentHour() {
      this.currentHour = dayjs().hour()

      const currentTime = dayjs()

      const nextHour = currentTime.add(1, 'h').startOf('h')

      const difference = nextHour.diff(currentTime, 'h')

      setTimeout(() => {
        this.setIntervalToUpdateCurrentHour()
      }, difference)
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
    setStateValueByKey(key: keyof IStoreState, value: IStoreState[keyof IStoreState]): void {
      this[key] = value
    },
    async setGeolocationByIp() {
      try {
        const data: any = await ky
          .get('https://ipinfo.io', {
            searchParams: {
              token: import.meta.env.VITE_IPINFO_API_KEY
            }
          })
          .json()
        const [latitude, longitude] = data.loc.split(',')
        this.position.latitude = parseFloat(latitude)
        this.position.longitude = parseFloat(longitude)
      } catch (apiError) {
        this.errorMessages.push({
          key: generateUniqueKey(),
          message: 'You need to allow access to your location for the app to work and API request failed'
        })
      }
    },
    async setGeolocation() {
      try {
        const position = await getCurrentPosition()
        const { latitude, longitude } = position.coords
        this.position.latitude = latitude
        this.position.longitude = longitude
      } catch (error: any) {
        if (error.code === error.PERMISSION_DENIED) {
          await this.setGeolocationByIp()
        } else {
          this.errorMessages.push({
            key: generateUniqueKey(),
            message: 'An error occurred while receiving geolocation'
          })
        }
      }
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
        this.errorMessages.push({
          key: generateUniqueKey(),
          message: 'API request failed'
        })
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
    },
    getCurrentWeather(state): ICurrentWeather | Object {
      if (!this.isWeatherDataValid) return {}
      const currentHourWeather =
        state.weatherData.forecast.forecastday[0].hour.find((item) => dayjs(item.time).hour() === this.currentHour) ??
        state.weatherData.forecast.forecastday[0].hour[0]

      return {
        location: state.weatherData.location.name,
        iconUrl: currentHourWeather.condition.icon,
        chanceOfRain: currentHourWeather.chance_of_rain + '%',
        temperature:
          currentHourWeather[`temp_${state.temperatureUnit.key}` as keyof typeof currentHourWeather] +
          state.temperatureUnit.short
      }
    },
    getAirConditions(state): IAirConditions | Object {
      if (!this.isWeatherDataValid) return {}
      const currentDayForecast = state.weatherData.forecast.forecastday[0].hour[state.currentHour]

      return {
        uvIndex: currentDayForecast.uv,
        windSpeed: currentDayForecast[`wind_${state.windSpeedUnit.key}`] + state.windSpeedUnit.short,
        humidity: currentDayForecast.humidity + '%',
        visibility: currentDayForecast[`vis_${state.distanceUnit.key}`] + state.distanceUnit.short,
        feelsLike: currentDayForecast[`feelslike_${state.temperatureUnit.key}`] + state.temperatureUnit.short,
        chanceOfRain: currentDayForecast?.chance_of_rain + '%',
        pressure: currentDayForecast[`pressure_${state.pressureUnit.key}`] + state.pressureUnit.short,
        sunset: state.weatherData.forecast?.forecastday[0]?.astro?.sunset
      }
    },
    getNextDaysForecast(state): INextDayForecast[] | Object {
      if (!this.isWeatherDataValid) return {}
      const nextDaysForecast = state.weatherData.forecast.forecastday

      return nextDaysForecast.map((item) => {
        return {
          day: dayjs(item.date).format('dddd'),
          weatherType: item.day.condition.text,
          iconUrl: item.day.condition.icon,
          maxTemp: item.day[`maxtemp_${state.temperatureUnit.key}` as keyof typeof item.day] + state.temperatureUnit.short,
          minTemp: item.day[`mintemp_${state.temperatureUnit.key}` as keyof typeof item.day] + state.temperatureUnit.short
        }
      })
    },
    getTodayForecast(state): ITodayForecast[] | Object {
      if (!this.isWeatherDataValid) return {}
      const filterByInterval = (hours: Hour[], startHour: number, interval: number): Hour[] => {
        return hours.slice(startHour + 1).filter((item: any) => dayjs(item.time).hour() % interval === 0)
      }

      const ensureMinimumItems = (filteredHours: Hour[], itemsCount: number, interval: number): Hour[] => {
        if (filteredHours.length >= itemsCount) {
          return filteredHours.slice(0, itemsCount)
        }

        const nextDaysHours = this.weatherData.forecast.forecastday[1].hour
        const nextDayFilteredHours = filterByInterval(nextDaysHours, 0, interval)

        const combinedHours = [...filteredHours, ...nextDayFilteredHours]
        return combinedHours.slice(0, itemsCount)
      }

      const interval = 3
      const todaysHours = this.weatherData.forecast.forecastday[0].hour
      const currentHour = new Date().getHours()
      const itemsCount = this.isMobile ? 3 : 0 || this.isTablet ? 5 : 0 || this.isDesktop ? 6 : 0

      const filteredTodayHours = filterByInterval(todaysHours, currentHour, interval)

      return ensureMinimumItems(filteredTodayHours, itemsCount, interval).map((item) => {
        return {
          time: dayjs(item.time).format(`${state.isTwelveHoursTimeFormat ? 'h' : 'H'}:mm A`),
          iconUrl: item.condition.icon,
          temperature: item[`temp_${state.temperatureUnit.key}` as keyof typeof item] + state.temperatureUnit.short
        }
      })
    },
    isWeatherDataValid(state): boolean {
      return (
        state.weatherData &&
        'location' in state.weatherData &&
        'current' in state.weatherData &&
        'forecast' in state.weatherData
      )
    }
  }
})

export { useSharedStore }
