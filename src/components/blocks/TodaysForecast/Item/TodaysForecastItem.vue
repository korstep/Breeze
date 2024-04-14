<script setup lang="ts">
import { computed, defineProps } from 'vue'
import UICaption from '@/components/shared/UICaption.vue'
import dayjs from 'dayjs'

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

const getTime = computed(() => {
  return dayjs(time).format('h:mm A')
})
</script>

<template>
  <div class="todays-forecast-item">
    <UICaption class="todays-forecast-item__time" weight="bold" uppercase>{{ getTime }}</UICaption>
    <img class="todays-forecast-item__img" :src="weatherIcon" alt="weather" />
    <UICaption class="todays-forecast-item__temperature" weight="bold">{{ temperature }}°</UICaption>
  </div>
</template>

<style scoped lang="scss">
.todays-forecast-item {
  display: flex;
  flex-direction: column;
  row-gap: 2.3dvh;
  align-items: center;

  &__temperature {
    color: var(--text-acceted);
  }

  &__img {
    width: 20vw;

    @include media('>xxs') {
      width: 15vw;
    }

    @include media('>xs') {
      width: 12vw;
    }

    @include media('>sm') {
      width: 10vw;
    }

    @include media('>m') {
      width: 5vw;
    }
  }
}
</style>
