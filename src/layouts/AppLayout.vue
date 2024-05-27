<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.app-layout {
  --app-layout-padding: 2.25dvw;

  height: fit-content;
  padding: var(--app-layout-padding);

  @include media('>sm') {
    height: calc(100dvh - var(--app-layout-padding) * 2);

    --app-layout-padding: 1.75dvw;
  }
}
</style>
