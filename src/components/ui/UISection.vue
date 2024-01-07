<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="section__body">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
section.section {
  background-color: var(--background-second);
  border-radius: 22px;

  &__body {
    padding: 25px;
  }
}
</style>
