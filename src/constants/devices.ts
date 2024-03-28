import breakpoints from '@/constants/breakpoints'

export const devices: { [key: string]: string } = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
}

const devicesMap: { [key: string]: number } = {
  [devices.MOBILE]: breakpoints.xxs,
  [devices.TABLET]: breakpoints.m,
  [devices.DESKTOP]: breakpoints.xl
}

export function getDeviceByWidth(width: number): string {
  if (width <= devicesMap[devices.MOBILE]) {
    return devices.MOBILE
  }
  if (width <= devicesMap[devices.TABLET]) {
    return devices.TABLET
  }

  return devices.DESKTOP
}
