<script setup lang="ts">
import TheWeather from '@/components/blocks/TheWeather/TheWeather.vue'
import TodaysForecast from '@/components/blocks/TodaysForecast/TodaysForecast.vue'
import NextDaysForecast from '@/components/blocks/NextDaysForecast/NextDaysForecast.vue'
import AirConditions from '@/components/blocks/AirConditions/AirConditions.vue'
import TheNavigation from '@/components/blocks/TheNavigation/TheNavigation.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const navigation = ref<InstanceType<typeof TheNavigation>>()
const navigationHeight = ref('0px')

const layoutStyle = ref({
  '--navigation-height': navigationHeight
})

const updateStyles = function () {
  navigationHeight.value = `${navigation.value?.$el?.offsetHeight ?? 0}px`
}

onMounted(() => {
  updateStyles()
  window.addEventListener('resize', updateStyles)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateStyles)
})
</script>

<template>
  <div class="main" :style="layoutStyle">
    <TheNavigation class="main__navigation" ref="navigation" />
    <TheWeather class="main__weather" />
    <TodaysForecast class="main__today" />
    <NextDaysForecast class="main__forecast" />
    <AirConditions class="main__conditions" />
  </div>
</template>

<style scoped lang="scss">
.main {
  padding-bottom: var(--navigation-height);
  display: flex;
  flex-direction: column;
  row-gap: 3dvh;
  height: fit-content;

  @include media('>sm') {
    display: grid;
    grid-template: auto repeat(2, fit-content(100%)) / auto 2.1fr 1fr;
    grid-template-areas:
      'navigation weather forecast'
      'navigation today forecast'
      'navigation conditions forecast';
    grid-gap: 2dvh 1.5vw;
  }

  &__navigation {
    grid-area: navigation;
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
