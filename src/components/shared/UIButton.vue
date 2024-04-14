<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="button" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0.375rem 0.5rem;
  font-weight: bold;
  color: var(--button-text-first);
  cursor: pointer;
  background-color: var(--button-background-first);
  border-radius: 1.5rem;

  &:disabled {
    opacity: 0.5;
  }
}
</style>
