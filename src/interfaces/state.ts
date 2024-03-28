import type { IWeatherData } from '@/interfaces/weatherData'

export interface IStoreState {
  deviceType: string
  orientation: string
  position: {
    longitude: number
    latitude: number
  }
  weatherData: IWeatherData
}
