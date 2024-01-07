<script setup lang="ts">
import TheWeather from '@/components/blocks/TheWeather.vue'
import TodaysForecast from '@/components/blocks/TodaysForecast.vue'
import NextDaysForecast from '@/components/blocks/NextDaysForecast.vue'
</script>

<template>
  <main class="main">
    <TheWeather />
    <TodaysForecast />
    <NextDaysForecast />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
}
</style>