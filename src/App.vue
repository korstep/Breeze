<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import useStore from '@/stores'

const store = useStore()

const isWeatherDataValid = computed(() => {
  return (
    store.weatherData && 'location' in store.weatherData && 'current' in store.weatherData && 'forecast' in store.weatherData
  )
})

onMounted(async () => {
  onResize()
  document.addEventListener('resize', onResize)
  await store.setGeolocation()
  await store.setWeatherData()
})

onUnmounted(() => {
  document.removeEventListener('resize', onResize)
})

function onResize() {
  const { innerWidth, innerHeight } = window
  store.setDeviceType(innerWidth)
  store.setOrientation(innerWidth, innerHeight)
}
</script>

<template>
  <router-view v-if="isWeatherDataValid"></router-view>
</template>

<style lang="scss"></style>
