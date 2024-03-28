<script setup lang="ts">
import UICaption from '@/components/shared/UICaption.vue'
import { defineProps } from 'vue'
import sizes from '@/constants/sizes'

const { title } = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="section">
    <div class="section__head">
      <UICaption class="section__title" v-if="title" weight="bold" :size="sizes.S" uppercase>{{ title }}</UICaption>
      <slot name="head" />
    </div>
    <div class="section__body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.section {
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, auto);
  grid-template-areas:
    'head head'
    'body body';
  row-gap: 1.5vh;
  padding: 5vw;
  background-color: var(--background-second);
  border-radius: 1rem;

  @include media('>xxs') {
    padding: 3.5vw;
  }

  @include media('>m') {
    padding: 2.5vw;
  }

  @include media('>l') {
    padding: 2vw;
  }

  &__head {
    display: flex;
    grid-area: head;
    justify-content: space-between;
  }

  &__body {
    grid-area: body;
  }
}
</style>
