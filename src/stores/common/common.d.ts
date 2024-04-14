import type { IStoreState } from '@/interfaces/state'
export declare const useCommonStore: import('pinia').StoreDefinition<
  'store',
  IStoreState,
  {
    isMobile(): boolean
    isTablet(): boolean
    isDesktop(): boolean
  },
  {
    addListeners(): void
    removeListeners(): void
    onResize(): void
    setDeviceType(windowWidth: number): void
    setOrientation(width: number, height: number): void
    setGeolocation(): Promise<void>
    setWeatherData(): Promise<void>
  }
>
export default useCommonStore
