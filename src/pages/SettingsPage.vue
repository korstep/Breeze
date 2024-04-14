<script setup lang="ts">
import UICaption from '@/components/shared/UICaption.vue'
import sizes from '@/constants/sizes'
import { GeneralSettings, NotificationsSettings, UnitsSettings } from '@/components/blocks/Settings'
import { onMounted, onUnmounted, ref } from 'vue'
import TheNavigation from '@/components/blocks/TheNavigation/TheNavigation.vue'

const navigation = ref<InstanceType<typeof TheNavigation>>()
const navigationHeight = ref('0px')

const layoutStyle = ref({
  '--navigation-height': navigationHeight
})

const updateStyles = function () {
  navigationHeight.value = `${navigation.value?.$el?.offsetHeight ?? 0}px`
}

onMounted(() => {
  updateStyles()
  window.addEventListener('resize', updateStyles)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateStyles)
})
</script>

<template>
  <div class="settings" :style="layoutStyle">
    <TheNavigation class="main__navigation" ref="navigation" />
    <UICaption :size="sizes.XL" is-accented>Settings</UICaption>
    <UnitsSettings class="settings__units" />
    <NotificationsSettings class="settings__notifications" />
    <GeneralSettings class="settings__general" />
  </div>
</template>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  row-gap: 4dvh;
  padding-bottom: var(--navigation-height);
  flex: 1;

  @include media('>sm') {
    display: grid;
    grid-template: auto repeat(2, fit-content(100%)) / auto 2.1fr 1fr;
    grid-template-areas:
      'navigation weather forecast'
      'navigation today forecast'
      'navigation conditions forecast';
    grid-gap: 3dvh 1.5vw;
  }
}
</style>
