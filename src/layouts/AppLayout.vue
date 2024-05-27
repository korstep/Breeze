<script setup lang="ts">
import UICaption from '@/shared/components/UICaption.vue'
import sizes from '@/shared/constants/sizes'
</script>

<template>
  <div class="app-layout">
    <router-view></router-view>
    <UICaption class="app-layout__author" :size="sizes.S">Developed by Stepan Korobeinikov</UICaption>
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

  &__author {
    position: absolute;
    right: 50%;
    bottom: calc(var(--app-layout-padding) * 0.1);
    text-transform: unset;
    transform: translateX(50%);
  }
}
</style>
