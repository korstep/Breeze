<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.app-layout {
  --app-layout-padding: 2.5vw;

  min-height: calc(100% - var(--app-layout-padding) * 2);
  padding: var(--app-layout-padding);
  display: flex;

  @include media('>sm') {
    overflow: hidden;

    --app-layout-padding: 2vw;
  }
}
</style>
