<script setup lang="ts">
import { computed, defineProps } from 'vue'

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
  <article class="next-days-forecast-item">
    <span class="next-days-forecast-item__day">{{ formattedDay }}</span>
    <div class="next-days-forecast-item__weather">
      <img v-if="iconUrl.length" :src="iconUrl" class="next-days-forecast-item__weather-icon" />
      <span class="next-days-forecast-item__weather-type">{{ weatherType }}</span>
    </div>
    <div class="next-days-forecast-item__temp">
      <span class="next-days-forecast-item__temp-max">{{ Math.round(props.maxTemp) }}</span>
      <span class="next-days-forecast-item__temp-min">/{{ Math.round(props.minTemp) }}</span>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/styles/ui/mixins';

.next-days-forecast-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 0;

  &__day {
    flex: 0 1 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__weather {
    display: flex;
    flex: 1;
    column-gap: 4%;
    align-items: center;
    justify-content: start;

    &-icon {
      width: 34px;
    }

    &-type {
      font-weight: bold;
      color: var(--text-acceted);
    }
  }

  &__temp {
    display: flex;
    justify-content: end;

    &-max {
      font-weight: bold;
      color: var(--text-acceted);
    }
  }
}
</style>