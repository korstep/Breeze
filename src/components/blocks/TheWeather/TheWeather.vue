<script setup lang="ts">
import useCommonStore from '@/stores/common/common'
import { computed } from 'vue'
import UICaption from '@/components/shared/UICaption.vue'
import sizes from '@/constants/sizes'

const store = useCommonStore()
const currentDayForecast = computed(() => {
  return store.weatherData.forecast.forecastday[0]
})
</script>

<template>
  <div class="weather">
    <UICaption class="weather__city" :size="sizes.XL">{{ store.weatherData.location.name }}</UICaption>
    <UICaption class="weather__rain">Chance of rain: {{ currentDayForecast.day.daily_chance_of_rain }}%</UICaption>
    <div class="weather__icon">
      <img :src="currentDayForecast.day.condition.icon" class="weather__img" />
    </div>
    <UICaption class="weather__temperature" :size="sizes.XXL">{{ currentDayForecast.day.avgtemp_c }}&deg;</UICaption>
  </div>
</template>

<style scoped lang="scss">
.weather {
  height: min-content;
  display: grid;
  grid-template-areas: 'city' 'rain' 'icon' 'temperature';
  justify-items: center;

  @include media('screen', '>xxs') {
    grid-template-areas: 'city icon' 'rain icon' 'temperature icon';
    grid-template-rows: repeat(2, fit-content(100%)) auto;
    grid-template-columns: fit-content(100%) auto;
    justify-items: flex-start;
    padding: 1dvh 20px;
  }

  &__temperature {
    grid-area: temperature;
    color: var(--text-acceted);
  }

  &__city {
    grid-area: city;
    margin-bottom: 1dvh;
    color: var(--text-acceted);
  }

  &__rain {
    grid-area: rain;
    margin-bottom: 2dvh;

    @include media('>xxs') {
      margin-bottom: 6dvh;
    }
  }

  &__icon {
    grid-area: icon;
    width: 50%;
    margin-bottom: 2dvh;

    @include media('>xxs') {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 75%;
      margin-bottom: 0;
    }
  }

  &__img {
    @include media('>xxs') {
      width: auto;
    }
  }
}
</style>
