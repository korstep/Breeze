<script setup lang="ts">
import UISection from '@/components/shared/UISection.vue'
import useCommonStore from '@/stores/common/common'
import NextDaysForecastItem from '@/components/blocks/NextDaysForecast/Item/NextDaysForecastItem.vue'
import { computed } from 'vue'

const store = useCommonStore()
const nDaysForecast = computed(() => {
  return store.weatherData.forecast.forecastday
})
</script>

<template>
  <UISection :title="`${nDaysForecast.length}-day's forecast`">
    <div class="next-days-forecast">
      <NextDaysForecastItem
        class="next-days-forecast__item"
        v-for="(item, index) in nDaysForecast"
        :key="index"
        :day="item.date"
        :icon-url="item.day.condition.icon"
        :weatherType="item.day.condition.text"
        :min-temp="item.day.mintemp_c"
        :max-temp="item.day.maxtemp_c"
      />
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.next-days-forecast {
  display: flex;
  flex-direction: column;

  &__item {
    &:not(:last-child) {
      border-bottom: solid 1px var(--background-third);
    }
  }
}
</style>
