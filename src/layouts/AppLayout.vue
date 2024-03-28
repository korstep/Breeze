<script setup lang="ts">
import useStore from '@/stores'
import TheNavigation from '@/components/blocks/TheNavigation/TheNavigation.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const store = useStore()

const navigation = ref<InstanceType<typeof TheNavigation>>()
const navigationHeight = ref('0px')

const layoutStyle = ref({
  '--navigation-height': navigationHeight
})

const updateStyles = function () {
  navigationHeight.value = `${navigation.value?.$el?.offsetHeight ?? 0}px`
}

onMounted(() => {
  window.addEventListener('resize', updateStyles)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateStyles)
})
</script>

<template>
  <div class="app-layout" :style="layoutStyle">
    <Teleport to="#app" :disabled="store.isDesktop">
      <TheNavigation ref="navigation" />
    </Teleport>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.app-layout {
  $layout-padding: 2.5vw;

  padding: $layout-padding $layout-padding calc($layout-padding + var(--navigation-height));

  @include media('>m') {
    $layout-padding: 2vw;

    display: flex;
    column-gap: 1.5vw;
    padding: $layout-padding;
  }
}
</style>
