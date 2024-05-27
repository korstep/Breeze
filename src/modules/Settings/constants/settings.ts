import type { ISettings, IUnitsDefaults } from '@/modules/Settings/interfaces/settings'

const settings: ISettings = {
  units: [
    {
      name: 'Temperature',
      availableValues: [
        { name: 'Celsius', short: '°', key: 'c' },
        { name: 'Fahrenheit', short: '°F', key: 'f' }
      ],
      storeKey: 'temperatureUnit'
    },
    {
      name: 'Wind Speed',
      availableValues: [
        { name: 'km/h', short: 'km/h', key: 'kph' },
        { name: 'mph', short: 'm/h', key: 'mph' }
      ],
      storeKey: 'windSpeedUnit'
    },
    {
      name: 'Pressure',
      availableValues: [
        { name: 'Inches', short: 'in', key: 'in' },
        { name: 'Milibars', short: 'mb', key: 'mb' }
      ],
      storeKey: 'pressureUnit'
    },
    {
      name: 'Precipitation',
      availableValues: [
        { name: 'Milimeters', short: 'mm', key: 'mm' },
        { name: 'Inches', short: 'in', key: 'in' }
      ],
      storeKey: 'precipitationUnit'
    },
    {
      name: 'Distance',
      availableValues: [
        { name: 'Kilometers', short: 'km', key: 'km' },
        { name: 'Miles', short: 'mi', key: 'miles' }
      ],
      storeKey: 'distanceUnit'
    }
  ],
  notifications: [
    {
      name: 'Notifications',
      description: 'Be aware of weather changes',
      storeKey: 'isEnabledNotifications'
    }
  ],
  general: [
    {
      name: '12-Hour Time',
      description: 'Show time in 12-hour format',
      storeKey: 'isTwelveHoursTimeFormat'
    },
    {
      name: 'Weather by location',
      description: 'Show weather in your current location',
      storeKey: 'isEnabledWeatherByLocation'
    }
  ]
}

const unitsDefaults: IUnitsDefaults = {
  temperature: settings.units[0].availableValues.find((item) => item.key === 'c') || settings.units[0].availableValues[0],
  windSpeed: settings.units[1].availableValues.find((item) => item.key === 'kph') || settings.units[1].availableValues[0],
  pressure: settings.units[2].availableValues.find((item) => item.key === 'mb') || settings.units[2].availableValues[0],
  precipitation: settings.units[3].availableValues.find((item) => item.key === 'mm') || settings.units[3].availableValues[0],
  distance: settings.units[4].availableValues.find((item) => item.key === 'km') || settings.units[4].availableValues[0]
}

export { settings, unitsDefaults }
