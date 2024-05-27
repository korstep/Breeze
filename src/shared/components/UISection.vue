<script setup lang="ts">
import UICaption from '@/shared/components/UICaption.vue'
import { defineProps } from 'vue'
import sizes from '@/shared/constants/sizes'

const { title } = defineProps({
  title: {
    type: String,
    default: ''
  },
  isHideHead: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="section">
    <div class="section__head" v-if="!isHideHead">
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
  display: flex;
  flex-direction: column;
  row-gap: 1.5dvh;
  padding: 5dvw;
  background-color: var(--background-second);
  border-radius: 1rem;

  @include media('>xxs') {
    padding: 3.5dvw;
  }

  @include media('>sm') {
    padding: 2dvw;
  }

  @include media('>l') {
    padding: 2dvw;
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
