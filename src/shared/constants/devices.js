import breakpoints from '@/shared/constants/breakpoints'

export const devices = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
}
const devicesMap = {
  [devices.MOBILE]: breakpoints.xxs,
  [devices.TABLET]: breakpoints.sm
}

export function getDeviceByWidth(width) {
  if (width <= devicesMap[devices.MOBILE]) {
    return devices.MOBILE
  }
  if (width <= devicesMap[devices.TABLET]) {
    return devices.TABLET
  }
  return devices.DESKTOP
}
