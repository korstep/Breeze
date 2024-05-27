interface ISettings {
  units: {
    name: string
    availableValues: IAvailableValues[]
    storeKey: string
  }[]
  notifications: {
    name: string
    description: string
    storeKey: string
  }[]
  general: {
    name: string
    description: string
    storeKey: string
  }[]
}

interface IAvailableValues {
  name: string
  short: string
  key: string
}

interface IUnitsDefaults {
  [key: string]: IAvailableValues
}

export type { ISettings, IAvailableValues, IUnitsDefaults }
