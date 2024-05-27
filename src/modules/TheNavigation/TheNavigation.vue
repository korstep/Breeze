<script setup lang="ts">
import UiIcon from '@/shared/components/UIIcon.vue'
import UICaption from '@/shared/components/UICaption.vue'
import { useSharedStore } from '@/shared/store'
import { navigationList } from '@/modules/TheNavigation/constants/navigationList'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['navigationResize'])
const sharedStore = useSharedStore()
const router = useRouter()
const navigation = ref<InstanceType<typeof HTMLElement>>()

let navigationResizeObserver: ResizeObserver
const onNavigationResize = (entries: ResizeObserverEntry[]) => {
  const element = entries[0].target as HTMLElement
  emit('navigationResize', element.clientHeight ?? 0)
}

onMounted(() => {
  navigationResizeObserver = new ResizeObserver(onNavigationResize)

  navigationResizeObserver.observe(navigation.value as HTMLElement)
})

onUnmounted(() => {
  navigationResizeObserver.disconnect()
})
</script>

<template>
  <div class="navigation" ref="navigation">
    <picture v-if="sharedStore.isDesktop">
      <source srcset="@/assets/images/brand-logo.avif" type="image/avif" />
      <source srcset="@/assets/images/brand-logo.webp" type="image/webp" />
      <img src="@/assets/images/brand-logo.png" class="navigation__brand-logo" alt="logo" />
    </picture>
    <div class="navigation__list">
      <div @click="router.push({ name: item.url })" class="navigation__item" v-for="item in navigationList" :key="item.text">
        <UiIcon class="navigation__item-icon" :name="item.icon" />
        <UICaption is-accented v-if="!sharedStore.isMobile" class="navigation__item-name">{{ item.text }}</UICaption>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 2dvh 0;
  background-color: var(--background-second);

  @include media('>sm') {
    position: unset;
    display: flex;
    flex-direction: column;
    row-gap: 7.5dvh;
    align-items: center;
    width: fit-content;
    padding-right: 1dvw;
    padding-left: 1dvw;
    border-radius: 1.5rem;
  }

  &__list {
    display: flex;
    column-gap: 10dvw;
    justify-content: center;

    @include media('>xxs', '<=m') {
      column-gap: 6dvw;
    }

    @include media('>sm') {
      flex-direction: column;
      row-gap: 3dvh;
      align-items: center;
    }
  }

  &__item {
    display: flex;
    column-gap: 2dvw;
    align-items: center;

    @include media('>sm') {
      flex-direction: column;
      row-gap: 1dvh;
    }
  }

  &__item-icon {
    width: clamp(1rem, calc(0.78rem + 1.13dvw), 2.13rem);
  }

  &__brand-logo {
    width: 4.5dvw;
    height: auto;

    @include media('>l') {
      width: 4dvw;
    }
  }
}
</style>
