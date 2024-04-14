<script setup lang="ts">
import UICaption from '@/components/shared/UICaption.vue'
import UiSwitcher from '@/components/shared/UiSwitcher.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  value: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="settings-item-switch">
    <UICaption class="settings-item-switch__title" weight="bold" is-accented>{{ props.title }}</UICaption>
    <UICaption class="settings-item-switch__description">{{ props.description }}</UICaption>
    <UiSwitcher class="settings-item-switch__value" :value="props.value" @toggle="$emit('toggle')" />
  </div>
</template>

<style scoped lang="scss">
.settings-item-switch {
  display: grid;
  grid-template: repeat(2, auto) / auto min-content;
  grid-template-areas:
    'title switcher'
    'description switcher';
  grid-gap: 0.5dvh 1vw;

  &__title {
    grid-area: title;
  }
  &__description {
    grid-area: description;
  }
  &__value {
    justify-self: end;
    grid-area: switcher;
  }
}
</style>
