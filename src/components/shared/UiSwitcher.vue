<script setup lang="ts">
const props = defineProps({
  value: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="switch" :class="props.value && 'switch--is-active'" @click="$emit('toggle')">
    <div class="switch__thumb"></div>
  </div>
</template>

<style lang="scss">
.switch {
  $self: &;
  $switch-height: 2.5vh;
  $switch-width: 2.5vh * 2.2;
  $switch-thumb-width: $switch-height * 0.75;

  position: relative;
  display: flex;
  align-items: center;
  width: $switch-width;
  height: $switch-height;
  cursor: pointer;
  background-color: var(--background-third);
  border-radius: 30px;
  transition: background-color 0.6s ease-out;

  &__thumb {
    position: absolute;
    top: 12.5%;
    bottom: 12.5%;
    left: 8%;
    aspect-ratio: 1;
    background-color: var(--background-first);
    border-radius: 30px;
    transition: left 0.3s ease-out;
  }

  &--is-active {
    background-color: var(--button-background-first);

    #{$self}__thumb {
      left: calc(92% - $switch-thumb-width);
    }
  }
}
</style>
