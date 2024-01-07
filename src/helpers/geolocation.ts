// Функция для получения геопозиции и информации о местоположении от браузера
import type { GeolocationPosition } from '@/interfaces/geolocation'

async function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export default getCurrentPosition
