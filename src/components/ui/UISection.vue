<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="section__body">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--background-second);
  border-radius: 16px;

  &__body {
    padding: 25px;
  }
}
</style>
