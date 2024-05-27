<script setup lang="ts">
import TodaysForecast from '@/modules/TodaysForecast/TodaysForecast.vue'
import NextDaysForecast from '@/modules/NextDaysForecast/NextDaysForecast.vue'
import AirConditions from '@/modules/AirConditions/AirConditions.vue'
import ThePage from '@/pages/base/ThePage.vue'
import { TheWeather } from '@/modules/TheWeather'
</script>

<template>
  <ThePage show-navigation>
    <div class="main">
      <TheWeather class="main__weather" />
      <TodaysForecast class="main__today" />
      <NextDaysForecast class="main__forecast" />
      <AirConditions class="main__conditions" />
    </div>
  </ThePage>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  row-gap: var(--page-row-gap);

  @include media('>sm') {
    display: grid;
    grid-template: repeat(2, fit-content(100%)) / 2.1fr 1fr;
    grid-template-areas:
      'weather forecast'
      'today forecast'
      'conditions forecast';
    grid-gap: var(--page-row-gap) var(--page-column-gap);
    padding-bottom: 0;
  }

  &__weather {
    grid-area: weather;
  }

  &__today {
    grid-area: today;
  }

  &__forecast {
    grid-area: forecast;
  }

  &__conditions {
    grid-area: conditions;
  }
}
</style>
