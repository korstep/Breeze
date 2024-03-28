<script setup lang="ts">
import TheWeather from '@/components/blocks/TheWeather/TheWeather.vue'
import TodaysForecast from '@/components/blocks/TodaysForecast/TodaysForecast.vue'
import NextDaysForecast from '@/components/blocks/NextDaysForecast/NextDaysForecast.vue'
import AirConditions from '@/components/blocks/AirConditions/AirConditions.vue'
</script>

<template>
  <main class="main">
    <TheWeather class="main__weather" />
    <TodaysForecast class="main__today" />
    <NextDaysForecast class="main__forecast" />
    <AirConditions class="main__conditions" />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  row-gap: 3vh;

  @include media('>m') {
    display: grid;
    grid-template-areas:
      'weather forecast'
      'today forecast'
      'conditions forecast';
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 2.1fr 1fr;
    grid-gap: 2vh 1.5vw;
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
