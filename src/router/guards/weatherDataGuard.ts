import { useSharedStore } from '@/shared/store'

function weatherDataGuard() {
  const store = useSharedStore()

  return store.isWeatherDataValid
}
