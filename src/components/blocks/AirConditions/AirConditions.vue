<script setup lang="ts">
import UISection from '@/components/shared/UISection.vue'
import UIButton from '@/components/shared/UIButton.vue'
import useStore from '@/stores'
import { computed } from 'vue'
import AirConditionsItem from '@/components/blocks/AirConditions/Item/AirConditionsItem.vue'
import UICaption from '@/components/shared/UICaption.vue'
import sizes from '@/constants/sizes'

const store = useStore()

const currentWeather = computed(() => {
  return store.weatherData.current
})

const currentDayForecast = computed(() => {
  return store.weatherData.forecast.forecastday[0]
})

const airConditions = [
  {
    title: 'Real Feel',
    icon: 'feels',
    value: currentWeather.value.feelslike_c + '°'
  },
  {
    title: 'Wind',
    icon: 'wind',
    value: currentWeather.value.wind_kph + ' km/h'
  },
  {
    title: 'Chance of Rain',
    icon: 'rain',
    value: currentDayForecast.value.day.daily_chance_of_rain + '%'
  },
  {
    title: 'UV Index',
    icon: 'uv',
    value: currentDayForecast.value.day.uv
  }
]
</script>

<template>
  <UISection title="air Conditions">
    <template #head>
      <UIButton class="air-conditions__button">
        <UICaption class="air-conditions__button-text" :size="sizes.S">See details</UICaption>
      </UIButton>
    </template>
    <div class="air-conditions">
      <AirConditionsItem v-for="item in airConditions" :title="item.title" :value="item.value" :icon="item.icon" />
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.air-conditions {
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, auto);
  grid-gap: 0 5px;

  &__button {
    justify-self: end;
    border-radius: 24px;
  }
}
</style>