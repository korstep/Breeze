<script setup lang="ts">
import UICaption from '@/shared/components/UICaption.vue'
import UISection from '@/shared/components/UISection.vue'
import sizes from '@/shared/constants/sizes'

const listItems = ['Ad free', 'Health activities overview', 'Severe weather notifications']
</script>

<template>
  <UISection isHideHead>
    <div class="subscription-banner">
      <UICaption is-accented :size="sizes.XL" class="subscription-banner__title">Advanced</UICaption>
      <UICaption is-accented :size="sizes.L" class="subscription-banner__subtitle">Get new experience</UICaption>
      <ul class="subscription-banner__list">
        <li v-for="item in listItems" :key="item" class="subscription-banner__list-item">
          <UICaption>{{ item }}</UICaption>
        </li>
      </ul>
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.subscription-banner {
  display: flex;
  flex-direction: column;
  row-gap: 3dvh;

  &__title {
    padding-bottom: 2dvh;
    border-bottom: 2px solid var(--background-fourth);
  }

  &__list {
    display: flex;
    flex-direction: column;
    list-style: inside;
  }
}
</style>
