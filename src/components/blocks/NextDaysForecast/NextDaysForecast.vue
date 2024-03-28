<script setup lang="ts">
import UISection from '@/components/shared/UISection.vue'
import useStore from '@/stores'
import NextDaysForecastItem from '@/components/blocks/NextDaysForecast/Item/NextDaysForecastItem.vue'
import { computed } from 'vue'

const store = useStore()
const nDaysForecast = computed(() => {
  return store.weatherData.forecast.forecastday
})
</script>

<template>
  <UISection :title="`${nDaysForecast.length}-day's forecast`">
    <div class="next-days-forecast">
      <div class="next-days-forecast__body">
        <NextDaysForecastItem
          class="next-days-forecast__item"
          v-for="item in nDaysForecast"
          :key="item.date"
          :day="item.date"
          :icon-url="item.day.condition.icon"
          :weatherType="item.day.condition.text"
          :min-temp="item.day.mintemp_c"
          :max-temp="item.day.maxtemp_c"
        />
      </div>
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.next-days-forecast {
  &__body {
    display: flex;
    flex-direction: column;
  }

  &__item {
    &:not(:last-child) {
      border-bottom: solid 1px var(--background-third);
    }
  }
}
</style>