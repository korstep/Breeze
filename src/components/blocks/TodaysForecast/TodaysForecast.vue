<script setup lang="ts">
import UISection from '@/components/shared/UISection.vue'
import useStore from '@/stores'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { Hour } from '@/interfaces/weatherData'
import TodaysForecastItem from '@/components/blocks/TodaysForecast/Item/TodaysForecastItem.vue'

const store = useStore()
const windowWidth = ref(0)

onMounted(() => {
  document.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

onUnmounted(() => {
  document.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

const getTodaysForecastArr = computed(() => {
  const interval = 3
  const todaysHours = store.weatherData.forecast.forecastday[0].hour
  const currentHour = new Date().getHours()
  const itemsCount = store.isMobile ? 3 : 0 ||  ? 5 : 0 || store.isDesktop ? 6 : 0

  const filteredTodayHours = filterByInterval(todaysHours, currentHour, interval)

  return ensureMinimumItems(filteredTodayHours, itemsCount, interval)
})

function filterByInterval(hours: Hour[], startHour: number, interval: number) {
  return hours.slice(startHour + 1).filter((item: any) => new Date(item.time).getHours() % interval === 0)
}

function ensureMinimumItems(filteredHours: Hour[], itemsCount: number, interval: number) {
  if (filteredHours.length >= itemsCount) {
    return filteredHours.slice(0, itemsCount)
  }

  const nextDaysHours = store.weatherData.forecast.forecastday[1].hour
  const nextDayFilteredHours = filterByInterval(nextDaysHours, 0, interval)

  const combinedHours = [...filteredHours, ...nextDayFilteredHours]
  return combinedHours.slice(0, itemsCount)
}
</script>

<template>
  <UISection title="today's forecast">
    <div class="todays-forecast">
      <TodaysForecastItem
        class="todays-forecast__item"
        v-for="(item, index) in getTodaysForecastArr"
        :key="index"
        :time="item.time"
        :weatherIcon="item.condition.icon"
        :temperature="item.temp_c"
      />
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.todays-forecast {
  display: flex;
  padding-top: 1vh;

  &__item {
    flex: 1;

    &:not(:first-child) {
      border-left: solid 1px var(--background-third);
    }

    &:last-child {
      @include media('>=xxs', '<xs') {
        display: none;
      }
    }
  }
}
</style>
