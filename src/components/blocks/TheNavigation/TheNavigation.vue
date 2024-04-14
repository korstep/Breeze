<script setup lang="ts">
import UiIcon from '@/components/shared/UIIcon.vue'
import useCommonStore from '@/stores/common/common'
import UICaption from '@/components/shared/UICaption.vue'
import type { NavigationListItem } from '@/interfaces/navigationList'

const store = useCommonStore()

const navigationList: NavigationListItem[] = [
  { icon: 'weather', text: 'Weather', url: 'main' },
  { icon: 'list', text: 'Cities', url: 'main' },
  { icon: 'map', text: 'Map', url: 'main' },
  { icon: 'settings', text: 'Settings', url: 'settings' }
]
</script>

<template>
  <div class="navigation" id="navigation">
    <picture v-if="store.isDesktop">
      <source srcset="@/assets/images/brand-logo.avif" type="image/avif" />
      <source srcset="@/assets/images/brand-logo.webp" type="image/webp" />
      <img src="@/assets/images/brand-logo.png" class="navigation__brand-logo" alt="logo" />
    </picture>
    <div class="navigation__list">
      <router-link class="navigation__item" v-for="item in navigationList" :key="item.text" :to="{ name: item.url }">
        <UiIcon class="navigation__item-icon" :name="item.icon" />
        <UICaption v-if="!store.isMobile" class="navigation__item-name">{{ item.text }}</UICaption>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2dvh 0;
  background-color: var(--background-second);

  @include media('>sm') {
    position: unset;
    display: flex;
    flex-direction: column;
    row-gap: 7.5dvh;
    align-items: center;
    width: auto;
    padding-right: 1vw;
    padding-left: 1vw;
    border-radius: 1.5rem;
  }

  &__list {
    display: flex;
    column-gap: 10vw;
    justify-content: center;

    @include media('>xxs', '<=m') {
      column-gap: 6vw;
    }

    @include media('>sm') {
      flex-direction: column;
      row-gap: 2dvh;
      align-items: center;
    }
  }

  &__item {
    display: flex;
    column-gap: 2vw;
    align-items: center;

    @include media('>sm') {
      flex-direction: column;
      row-gap: 1dvh;
    }
  }

  &__item-name {
    color: var(--text-acceted);
  }

  &__item-icon {
    width: clamp(1rem, calc(0.78rem + 1.13vw), 2.13rem);
  }

  &__brand-logo {
    width: 4.5vw;
    height: auto;

    @include media('>l') {
      width: 4vw;
    }
  }
}
</style>
