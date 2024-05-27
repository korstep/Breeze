<script setup lang="ts">
import UISection from '@/shared/components/UISection.vue'
import NextDaysForecastItem from '@/modules/NextDaysForecast/components/Item/NextDaysForecastItem.vue'
import { useSharedStore } from '@/shared/store'

const sharedStore = useSharedStore()
</script>

<template>
  <UISection :title="`${sharedStore.getNextDaysForecast.length}-day's forecast`">
    <div class="next-days-forecast">
      <NextDaysForecastItem
        class="next-days-forecast__item"
        v-for="(item, index) in sharedStore.getNextDaysForecast"
        :key="index"
        :day="item.day"
        :icon-url="item.iconUrl"
        :weatherType="item.weatherType"
        :min-temp="item.minTemp"
        :max-temp="item.maxTemp"
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
