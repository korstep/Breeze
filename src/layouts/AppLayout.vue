<script setup lang="ts">
import TheNavigation from '@/components/blocks/TheNavigation.vue'
import useStore from '@/stores'

const store = useStore()
</script>

<template>
  <div class="app-layout">
    <Teleport to="#app" :disabled="store.isDesktop">
      <TheNavigation />
    </Teleport>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/ui/mixins';

.app-layout {
  height: calc(100% - 2.5vmax * 2);
  padding: 2.5vmax;

  @include media('s', 'm') {
    overflow-y: auto;
  }
}
</style>