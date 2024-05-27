<script setup lang="ts">
import { defineProps } from 'vue'
import UICaption from '@/shared/components/UICaption.vue'

const props = defineProps({
  day: { type: String, required: true, default: '' },
  iconUrl: { type: String, default: '' },
  weatherType: { type: String, required: true, default: '' },
  minTemp: { type: String, required: true, default: 0 },
  maxTemp: { type: String, required: true, default: 0 }
})
</script>

<template>
  <div class="next-days-forecast-item">
    <UICaption class="next-days-forecast-item__day">{{ day }}</UICaption>
    <div class="next-days-forecast-item__weather">
      <img v-if="iconUrl" :src="iconUrl" class="next-days-forecast-item__weather-icon" alt="" />
      <UICaption is-accented weight="bold" class="next-days-forecast-item__weather-type">{{ weatherType }}</UICaption>
    </div>
    <div class="next-days-forecast-item__temp">
      <UICaption is-accented weight="bold" class="next-days-forecast-item__temp-max">{{ props.maxTemp }}</UICaption>
      <UICaption class="next-days-forecast-item__temp-min">/{{ props.minTemp }}</UICaption>
    </div>
  </div>
</template>

<style scoped lang="scss">
.next-days-forecast-item {
  display: grid;
  grid-template: auto / 25% auto fit-content(100%);
  align-items: center;
  padding: 1dvh 0;

  @include media('>sm', '<m') {
    display: flex;
    flex-direction: column;
    row-gap: 0.5dvh;
    align-items: flex-start;
  }

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

  &__temp {
    display: flex;
    justify-content: end;
  }
}
</style>
