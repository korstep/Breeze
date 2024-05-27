<script setup lang="ts">
import ThePage from '@/pages/base/ThePage.vue'
import UICaption from '@/shared/components/UICaption.vue'
import sizes from '@/shared/constants/sizes'
</script>

<template>
  <ThePage show-navigation>
    <div class="cities">
      <UICaption :size="sizes.XXL">Coming soon...</UICaption>
    </div>
  </ThePage>
</template>

<style scoped lang="scss">
.cities {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
