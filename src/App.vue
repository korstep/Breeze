<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import useCommonStore from '@/stores/common/common'

const store = useCommonStore()

onMounted(async () => {
  store.addListeners()
})

onUnmounted(() => {
  store.removeListeners()
})
</script>

<template>
  <router-view></router-view>
</template>
