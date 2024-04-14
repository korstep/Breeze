import type { IWeatherData } from '@/interfaces/weatherData'
import type { IAvailableValues } from '@/constants/settings'

export interface IStoreState {
  deviceType: string
  windowWidth: number
  windowHeight: number
  orientation: string
  position: {
    latitude: number
    longitude: number
  }
  weatherData: IWeatherData
  isEnabledNotifications: boolean
  isTwelveHoursTimeFormat: boolean
  isEnabledWeatherByLocation: boolean
  temperatureUnit: IAvailableValues
  windSpeedUnit: IAvailableValues
  pressureUnit: IAvailableValues
  precipitationUnit: IAvailableValues
  distanceUnit: IAvailableValues
}
