<script setup lang="ts">
import { computed, defineProps } from 'vue'
import sizes from '@/constants/sizes'

const props = defineProps({
  uppercase: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: sizes.M
  },
  weight: {
    type: String,
    default: ''
  },
  noWrap: {
    type: Boolean,
    default: false
  },
  isAccented: {
    type: Boolean,
    default: false
  }
})

const captionModifiers = computed(() => {
  return [
    (props.uppercase || props.size === sizes.S) && 'shared-caption--uppercase',
    props.size && `ui-caption--${props.size}`,
    props.weight && `ui-caption--${props.weight}`,
    props.noWrap && 'ui-caption--no-wrap',
    props.isAccented && 'ui-caption--accented'
  ]
})
</script>

<template>
  <span class="ui-caption" :class="captionModifiers">
    <slot />
  </span>
</template>

<style lang="scss">
@import '@/assets/styles/ui/typography';

.ui-caption {
  &--s {
    @include text-s;
  }

  &--m {
    @include text-m;
  }

  &--l {
    @include text-l;
  }

  &--xl {
    @include text-xl;
  }

  &--xxl {
    @include text-xxl;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--no-wrap {
    white-space: nowrap;
  }

  &--bold {
    font-weight: bold;
  }

  &--normal {
    font-weight: normal;
  }

  &--accented {
    color: var(--text-acceted);
  }
}
</style>
