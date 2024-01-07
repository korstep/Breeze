<script setup lang="ts">
import { computed } from 'vue'
import icons from '@/helpers/icons'

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