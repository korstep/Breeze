import { defineStore } from 'pinia'
import type { IStoreState } from '@/interfaces/state'
import getCurrentPosition from '@/helpers/geolocation'
import ky from 'ky'
import { weatherApiUrl } from '@/constants/api'
import { devices, getDeviceByWidth } from '@/constants/devices'
import orientation from '@/constants/orientation'

export const useCommonStore = defineStore('common', {
  state: () =>
    <IStoreState>{
      deviceType: '',
      windowWidth: 0,
      windowHeight: 0,
      orientation: ''
    },
  actions: {
    addListeners() {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },
    onResize(): void {
      const { innerWidth, innerHeight } = window
      this.windowWidth = innerWidth
      this.windowHeight = innerHeight
      this.setDeviceType(innerWidth)
      this.setOrientation(innerWidth, innerHeight)
    },
    setDeviceType(windowWidth: number): void {
      this.deviceType = getDeviceByWidth(windowWidth)
    },
    setOrientation(width: number, height: number): void {
      this.orientation = width < height ? orientation.VERTICAL : orientation.HORIZONTAL
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

export default useCommonStore
