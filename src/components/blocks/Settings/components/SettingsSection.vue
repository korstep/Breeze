<script setup lang="ts">
import UISection from '@/components/shared/UISection.vue'
import UICaption from '@/components/shared/UICaption.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="settings-section">
    <UICaption weight="bold" class="settings-section__title" is-accented>{{ title }}</UICaption>
    <UISection is-hide-head class="settings-section__section">
      <slot />
    </UISection>
  </div>
</template>

<style scoped lang="scss">
.settings-section {
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
}
</style>
