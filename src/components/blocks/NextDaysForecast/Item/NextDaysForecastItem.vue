<script setup lang="ts">
import { computed, defineProps } from 'vue'
import UICaption from '@/components/shared/UICaption.vue'

const props = defineProps({
  day: { type: String, required: true, default: '' },
  iconUrl: { type: String, default: '' },
  weatherType: { type: String, required: true, default: '' },
  minTemp: { type: Number, required: true, default: 0 },
  maxTemp: { type: Number, required: true, default: 0 }
})

const formattedDay = computed(() => {
  const currentDate = new Date()
  const forecastDate = new Date(props.day)

  if (currentDate.toDateString() === forecastDate.toDateString()) {
    return 'Today'
  }

  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(forecastDate)
})
</script>

<template>
  <div class="next-days-forecast-item">
    <UICaption class="next-days-forecast-item__day">{{ formattedDay }}</UICaption>
    <div class="next-days-forecast-item__weather">
      <img v-if="iconUrl.length" :src="iconUrl" class="next-days-forecast-item__weather-icon" alt="" />
      <UICaption class="next-days-forecast-item__weather-type">{{ weatherType }}</UICaption>
    </div>
    <div class="next-days-forecast-item__temp">
      <UICaption class="next-days-forecast-item__temp-max">{{ Math.round(props.maxTemp) }}</UICaption>
      <UICaption class="next-days-forecast-item__temp-min">/{{ Math.round(props.minTemp) }}</UICaption>
    </div>
  </div>
</template>

<style scoped lang="scss">
.next-days-forecast-item {
  display: grid;
  grid-template: auto / 25% auto fit-content(100%);
  align-items: center;
  padding: 1vh 0;

  &__day {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__weather {
    display: flex;
    column-gap: 4%;
    align-items: center;
  }

  &__weather-icon {
    width: 34px;
  }

  &__weather-type {
    font-weight: bold;
    color: var(--text-acceted);
  }

  &__temp {
    display: flex;
    justify-content: end;
  }

  &__temp-max {
    font-weight: bold;
    color: var(--text-acceted);
  }
}
</style>
