<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  width: fit-content;
  padding: 6px 8px;
  font-weight: bold;
  color: var(--button-text-first);
  cursor: pointer;
  background-color: var(--button-background-first);
}
</style>
