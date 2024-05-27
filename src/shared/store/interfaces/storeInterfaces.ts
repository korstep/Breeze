import type { Astro, IWeatherData, Location } from '@/shared/store/interfaces/weatherData'
import type { IAvailableValues } from '@/modules/Settings'
import type { Condition, Forecastday, Hour } from './weatherData'

export interface IStoreState {
  deviceType: string
  windowWidth: number
  windowHeight: number
  orientation: string
  position: {
    latitude: number
    longitude: number
  }
  errorMessages: errorMessage[]
  weatherData: IWeatherData | Object
  isEnabledNotifications: boolean
  isTwelveHoursTimeFormat: boolean
  isEnabledWeatherByLocation: boolean
  temperatureUnit: IAvailableValues
  windSpeedUnit: IAvailableValues
  pressureUnit: IAvailableValues
  precipitationUnit: IAvailableValues
  distanceUnit: IAvailableValues
  currentHour: number
}

interface errorMessage {
  key: string
  message: string
}

export interface ICurrentWeather {
  location: Location['name']
  iconUrl: Condition['icon']
  chanceOfRain: string
  temperature: string
}

export interface INextDayForecast {
  day: Forecastday['date']
  weatherType: Condition['text']
  iconUrl: Condition['icon']
  maxTemp: string
  minTemp: string
}

export interface ITodayForecast {
  time: string
  iconUrl: Condition['icon']
  temperature: string
}

export interface IAirConditions {
  uvIndex: Hour['uv']
  windSpeed: string
  humidity: string
  visibility: string
  feelsLike: string
  chanceOfRain: string
  pressure: string
  sunset: Astro['sunset']
}
