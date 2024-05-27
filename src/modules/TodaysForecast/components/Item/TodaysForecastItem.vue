<script setup lang="ts">
import { defineProps } from 'vue'
import UICaption from '@/shared/components/UICaption.vue'

const { time, weatherIcon, temperature } = defineProps({
  time: {
    type: String,
    default: ''
  },
  weatherIcon: {
    type: String,
    default: ''
  },
  temperature: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="todays-forecast-item">
    <UICaption class="todays-forecast-item__time" weight="bold" uppercase>{{ time }}</UICaption>
    <img class="todays-forecast-item__img" :src="weatherIcon" alt="weather" />
    <UICaption is-accented class="todays-forecast-item__temperature" weight="bold">{{ temperature }}</UICaption>
  </div>
</template>

<style scoped lang="scss">
.todays-forecast-item {
  display: flex;
  flex-direction: column;
  row-gap: 2.3dvh;
  align-items: center;

  &__img {
    width: 20dvw;

    @include media('>xxs') {
      width: 15dvw;
    }

    @include media('>xs') {
      width: 12dvw;
    }

    @include media('>sm') {
      width: 10dvw;
    }

    @include media('>=m') {
      width: 5dvw;
    }
  }
}
</style>
