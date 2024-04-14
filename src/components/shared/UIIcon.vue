<script setup lang="ts">
import { computed } from 'vue'
import icons from '@/constants/icons'

const { name } = defineProps({
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false
  }
})
const iconComponent = computed(() => icons[name])
</script>

<template>
  <Component :is="iconComponent" class="icon" />
</template>

<style lang="scss">
.icon {
  fill: var(--text-common);

  &--is-active {
    fill: var(--text-acceted);
  }
}
</style>
