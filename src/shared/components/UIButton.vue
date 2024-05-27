<script setup lang="ts">
import sizes from '@/shared/constants/sizes'
import { computed } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: sizes.S
  }
})

const buttonModifiers = computed(() => {
  return [props.size && `button--${props.size}`]
})
</script>

<template>
  <button class="button" :disabled="props.disabled" :class="buttonModifiers">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-weight: bold;
  color: var(--button-text-first);
  cursor: pointer;
  background-color: var(--button-background-first);
  border-radius: 1.5rem;

  &:disabled {
    opacity: 0.5;
  }

  &--s {
    padding: 0.5rem 0.75rem;
  }

  &--m {
    padding: 1rem 1.25rem;
  }
}
</style>
