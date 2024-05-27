<script setup lang="ts">
import { TheNavigation } from '@/modules/TheNavigation'
import { computed, ref } from 'vue'

const props = defineProps({
  showNavigation: {
    type: Boolean,
    default: false
  }
})
const navigationHeight = ref(0)
const pageStyles = computed(() => {
  return { '--navigation-height': `${navigationHeight.value}px` }
})
const pageModifiers = computed(() => {
  return [props.showNavigation && 'page--with-navigation']
})
</script>

<template>
  <div class="page" :style="pageStyles" :class="pageModifiers">
    <TheNavigation
      class="page__navigation"
      @navigationResize="navigationHeight = $event"
      v-if="props.showNavigation"
      ref="navigation"
    />
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.page {
  $self: &;

  --page-column-gap: 1.25dvw;
  --page-row-gap: 3.5vh;

  height: 100%;

  &__content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  &--with-navigation {
    padding-bottom: var(--navigation-height);

    @include media('>sm') {
      display: flex;
      column-gap: var(--page-column-gap);
      padding-bottom: 0;
    }
  }
}
</style>
