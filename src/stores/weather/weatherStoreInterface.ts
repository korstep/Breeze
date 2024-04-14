import type { IWeatherData } from '@/interfaces/weatherData'
import type { IAvailableValues } from '@/constants/settings'

export interface IWeatherStoreState {
  position: {
    longitude: number
    latitude: number
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
