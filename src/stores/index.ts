import { defineStore } from 'pinia'
import type { IStoreState } from '@/interfaces/state'
import getCurrentPosition from '@/helpers/geolocation'
import ky from 'ky'
import { weatherApiUrl } from '@/constants/api'
import { devices, getDeviceByWidth } from '@/constants/devices'
import orientation from '@/constants/orientation'

export const useStore = defineStore('store', {
  state: () =>
    <IStoreState>{
      deviceType: '',
      orientation: '',
      position: {},
      weatherData: {}
    },
  actions: {
    setDeviceType(): void {
      const updateDeviceType = () => {
        this.deviceType = getDeviceByWidth(window.innerWidth)
      }
      window.addEventListener('resize', updateDeviceType)
      updateDeviceType()
    },
    setOrientation(): void {
      const updateDeviceOrientation = () => {
        this.orientation = window.innerWidth < window.innerHeight ? orientation.VERTICAL : orientation.HORIZONTAL
      }
      window.addEventListener('resize', updateDeviceOrientation)
      updateDeviceOrientation()
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
      return this.deviceType === devices.MOBILE
    },
    isTablet(): boolean {
      return this.deviceType === devices.TABLET
    },
    isDesktop(): boolean {
      return this.deviceType === devices.DESKTOP
    }
  }
})

export default useStore
