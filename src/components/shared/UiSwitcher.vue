<script setup lang="ts"></script>

<template>
  <div class="switch">
    <div class="switch__thumb"></div>
  </div>
</template>

<style lang="scss">
.switch {
  display: flex;
  align-items: center;
  background-color: var(--background-third);

  &__thumb {
    background-color: var(--background-first);
  }
}
</style>
