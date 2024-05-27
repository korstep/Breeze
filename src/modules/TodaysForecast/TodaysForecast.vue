<script setup lang="ts">
import UISection from '@/shared/components/UISection.vue'
import TodaysForecastItem from '@/modules/TodaysForecast/components/Item/TodaysForecastItem.vue'
import { useSharedStore } from '@/shared/store'

const sharedStore = useSharedStore()
</script>

<template>
  <UISection title="today's forecast">
    <div class="todays-forecast">
      <TodaysForecastItem
        class="todays-forecast__item"
        v-for="(item, index) in sharedStore.getTodayForecast"
        :key="index"
        :time="item.time"
        :weatherIcon="item.iconUrl"
        :temperature="item.temperature"
      />
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.todays-forecast {
  display: flex;
  padding-top: 1dvh;

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
