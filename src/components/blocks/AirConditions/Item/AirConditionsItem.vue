<script setup lang="ts">
import { defineProps } from 'vue'
import UIIcon from '@/components/shared/UIIcon.vue'
import UICaption from '@/components/shared/UICaption.vue'
import sizes from '@/constants/sizes'
import useStore from '@/stores'

const { isMobile } = useStore()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  }
})
</script>

<template>
  <div class="air-conditions-item">
    <UIIcon class="air-conditions-item__icon" :name="props.icon" />
    <UICaption class="air-conditions-item__title">{{ props.title }}</UICaption>
    <UICaption class="air-conditions-item__value" weight="bold" :size="isMobile ? sizes.M : sizes.L"
      >{{ props.value }}
    </UICaption>
  </div>
</template>

<style scoped lang="scss">
.air-conditions-item {
  display: grid;
  grid-template-areas: 'icon title' 'icon value';
  grid-template-columns: repeat(2, fit-content(100%));
  grid-gap: 5px;

  &__icon {
    grid-area: icon;
  }

  &__title {
    grid-area: title;
  }

  &__value {
    grid-area: value;
    color: var(--text-acceted);
  }
}
</style>