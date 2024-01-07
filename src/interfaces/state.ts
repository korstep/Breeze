import type { IWeatherData } from '@/interfaces/weatherData'

export interface IStoreState {
  deviceType: string
  position: {
    longitude: number
    latitude: number
  }
  weatherData: IWeatherData
}
