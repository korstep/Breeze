import { defineStore } from 'pinia'
import type { IStoreState } from '@/interfaces/state'
import getCurrentPosition from '@/helpers/geolocation'
import ky from 'ky'
import { weatherApiUrl } from '@/constants'

export const useStore = defineStore('store', {
  state: () =>
    <IStoreState>{
      deviceType: '',
      position: {},
      weatherData: {}
    },
  actions: {
    setDeviceType(): void {
      const updateDeviceType = () => {
        const width = window.innerWidth
        if (width <= 480) {
          this.deviceType = 'mobile'
        } else if (width < 1280) {
          this.deviceType = 'tablet'
        } else {
          this.deviceType = 'desktop'
        }
      }
      window.addEventListener('resize', updateDeviceType)
      updateDeviceType()
    },
    async setGeolocation(): Promise<void> {
      const { latitude, longitude } = (await getCurrentPosition()).coords
      this.position.latitude = latitude
      this.position.longitude = longitude
      await this.setWeatherData()
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
      return this.deviceType === 'mobile'
    },
    isTablet(): boolean {
      return this.deviceType === 'tablet'
    },
    isDesktop(): boolean {
      return this.deviceType === 'desktop'
    }
  }
})

export default useStore
