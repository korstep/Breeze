<script setup lang="ts">
import UiIcon from '@/components/shared/UIIcon.vue'
import useStore from '@/stores'
import UICaption from '@/components/shared/UICaption.vue'

const store = useStore()

const navList = [
  { icon: 'weather', text: 'Weather' },
  { icon: 'list', text: 'Cities' },
  { icon: 'map', text: 'Map' },
  { icon: 'settings', text: 'Settings' }
]
</script>

<template>
  <div class="navigation">
    <picture v-if="store.isDesktop">
      <source srcset="@/assets/images/brand-logo.avif" type="image/avif" />
      <source srcset="@/assets/images/brand-logo.webp" type="image/webp" />
      <img src="@/assets/images/brand-logo.png" class="navigation__brand-logo" alt="logo" />
    </picture>
    <ul class="navigation__list">
      <li class="navigation__item" v-for="item in navList" :key="item.text">
        <UiIcon class="navigation__item-icon" :name="item.icon" />
        <UICaption v-if="!store.isMobile" class="navigation__item-name">{{ item.text }}</UICaption>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2vh 0;
  background-color: var(--background-second);

  @include media('>m') {
    position: unset;
    display: flex;
    flex-direction: column;
    row-gap: 7.5vh;
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

    @include media('>m') {
      flex-direction: column;
      row-gap: 2vh;
      align-items: center;
    }
  }

  &__item {
    display: flex;
    column-gap: 2vw;
    align-items: center;

    @include media('>m') {
      flex-direction: column;
      row-gap: 1vh;
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
