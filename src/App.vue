<script setup lang="ts">
import { computed, onMounted } from 'vue'
import useStore from '@/stores'

const store = useStore()

const isWeatherDataValid = computed(() => {
  return (
    store.weatherData && 'location' in store.weatherData && 'current' in store.weatherData && 'forecast' in store.weatherData
  )
})

onMounted(async () => {
  store.setDeviceType()
  await store.setGeolocation()
  await store.setWeatherData()
})
</script>

<template>
  <router-view v-if="isWeatherDataValid"></router-view>
</template>

<style lang="scss"></style>