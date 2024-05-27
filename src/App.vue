<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useSharedStore } from '@/shared/store'

const sharedStore = useSharedStore()

onMounted(() => {
  sharedStore.addListeners()
})

onUnmounted(() => {
  sharedStore.removeListeners()
})
</script>

<template>
  <router-view></router-view>
</template>
