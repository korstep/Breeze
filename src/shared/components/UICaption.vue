<script setup lang="ts">
import { computed, defineProps } from 'vue'
import sizes from '@/shared/constants/sizes'

const props = defineProps({
  uppercase: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: sizes.M
  },
  weight: {
    type: String,
    default: ''
  },
  noWrap: {
    type: Boolean,
    default: false
  },
  isAccented: {
    type: Boolean,
    default: false
  }
})

const captionModifiers = computed(() => {
  return [
    props.uppercase && 'ui-caption--uppercase',
    props.size && `ui-caption--${props.size}`,
    props.weight && `ui-caption--${props.weight}`,
    props.noWrap && 'ui-caption--no-wrap',
    props.isAccented && 'ui-caption--accented'
  ]
})
</script>

<template>
  <span class="ui-caption" :class="captionModifiers">
    <slot />
  </span>
</template>

<style lang="scss">
.ui-caption {
  letter-spacing: 0;
  white-space: pre-line;

  &--s {
    font-family: var(--font-first);
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 150%;
    text-transform: uppercase;
  }

  &--m {
    font-family: var(--font-first);
    font-size: 1rem;
    font-weight: normal;
    line-height: 137.5%;
  }

  &--l {
    font-family: var(--font-first);
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 125%;
  }

  &--xl {
    font-family: var(--font-first);
    font-size: 2rem;
    font-weight: bold;
    line-height: 120%;
  }

  &--xxl {
    font-family: var(--font-first);
    font-size: 3rem;
    font-weight: bold;
    line-height: 120%;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--no-wrap {
    white-space: nowrap;
  }

  &--bold {
    font-weight: bold;
  }

  &--normal {
    font-weight: normal;
  }

  &--accented {
    color: var(--text-accented);
  }
}
</style>
