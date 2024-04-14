import { defineStore } from 'pinia'
import getCurrentPosition from '@/helpers/geolocation'
import ky from 'ky'
import { weatherApiUrl } from '@/constants/api'
import { devices, getDeviceByWidth } from '@/constants/devices'
import orientation from '@/constants/orientation'
export const useCommonStore = defineStore('store', {
  state: () => ({
    deviceType: '',
    windowWidth: 0,
    windowHeight: 0,
    orientation: '',
    position: {},
    weatherData: {}
  }),
  actions: {
    addListeners() {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },
    onResize() {
      const { innerWidth, innerHeight } = window
      this.windowWidth = innerWidth
      this.windowHeight = innerHeight
      this.setDeviceType(innerWidth)
      this.setOrientation(innerWidth, innerHeight)
    },
    setDeviceType(windowWidth) {
      this.deviceType = getDeviceByWidth(windowWidth)
    },
    setOrientation(width, height) {
      this.orientation = width < height ? orientation.VERTICAL : orientation.HORIZONTAL
    },
    async setGeolocation() {
      const { latitude, longitude } = (await getCurrentPosition()).coords
      this.position.latitude = latitude
      this.position.longitude = longitude
    },
    async setWeatherData() {
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
    isMobile() {
      return this.deviceType === devices.MOBILE
    },
    isTablet() {
      return this.deviceType === devices.TABLET
    },
    isDesktop() {
      return this.deviceType === devices.DESKTOP
    }
  }
})
export default useCommonStore
