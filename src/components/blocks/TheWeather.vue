<script setup lang="ts">
import useStore from '@/stores'
import { computed } from 'vue'

const store = useStore()
const currentDayForecast = computed(() => {
  return store.weatherData.forecast.forecastday[0]
})
</script>

<template>
  <section class="weather">
    <div class="weather__body">
      <div class="weather__common">
        <div class="weather__container-city-rain">
          <h2 class="weather__city">{{ store.weatherData.location.name }}</h2>
          <span class="weather__rain">Chance of rain: {{ currentDayForecast.day.daily_chance_of_rain }}%</span>
        </div>
        <Teleport to=".weather__body" :disabled="store.isMobile">
          <div class="weather__icon">
            <img :src="currentDayForecast.day.condition.icon" />
          </div>
        </Teleport>
        <h1 class="weather__temperature">{{ currentDayForecast.day.avgtemp_c }}&deg;</h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/ui/mixins';

.weather {
  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 6vh;
    align-items: center;
  }

  &__common {
    @include media('s') {
      row-gap: 6vh;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__container-city-rain {
    @include media('s') {
      text-align: center;
    }
  }

  &__city {
    margin-bottom: 1vh;
  }

  &__icon {
    @include media('s') {
      width: 100%;
    }
  }
}
</style>