import type { NavigationListItem } from '@/modules/TheNavigation/interfaces/navigationList'
import { routeNames } from '@/router/constants/routeNames'

const navigationList: NavigationListItem[] = [
  { icon: 'weather', text: 'Weather', url: routeNames.main },
  { icon: 'list', text: 'Cities', url: routeNames.cities },
  { icon: 'settings', text: 'Settings', url: routeNames.settings }
]

export { navigationList }
