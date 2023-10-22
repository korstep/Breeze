import ky from 'ky'
import type { GeolocationInfo, GeolocationPosition } from '@/interfaces/geolocation'
// eslint-disable-next-line import/no-unresolved
import { nominatimOpenStreetMapUrl } from '@/constants/index.ts'

// Функция для получения геопозиции и информации о местоположении от браузера
async function getCurrentPosition(): Promise<any> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

async function fetchLocationData(latitude: number, longitude: number): Promise<GeolocationPosition> {
  const apiUrl: string = `${nominatimOpenStreetMapUrl}reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
  return ky.get(apiUrl).json()
}

// Внешняя функция для получения текущей геопозиции
export async function getGeolocationInfo(): Promise<GeolocationInfo> {
  const position = await getCurrentPosition()
  const { latitude, longitude } = position.coords
  return fetchLocationData(latitude, longitude)
}
