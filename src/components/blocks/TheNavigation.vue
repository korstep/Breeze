<script setup lang="ts">
import UiIcon from '@/components/ui/UIIcon.vue'
import useStore from '@/stores'

const store = useStore()

const navList = [
  { icon: 'weather', text: 'Weather' },
  { icon: 'list', text: 'Cities' },
  { icon: 'map', text: 'Map' },
  { icon: 'settings', text: 'Settings' }
]
</script>

<template>
  <nav class="navigation">
    <div class="navigation__body">
      <img v-if="store.isDesktop" src="@/assets/images/brand-logo.png" alt="Logo" class="navigation__brand-logo" />
      <ul class="navigation__list">
        <li class="navigation__item" v-for="item in navList" :key="item.text">
          <ui-icon class="navigation__item-icon" :name="item.icon" />
          <span v-if="!store.isMobile" class="navigation__item-name">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import '@/assets/styles/ui/mixins';
@import '@/assets/styles/ui/typography';

.navigation {
  width: 100%;
  background-color: var(--background-second);

  @include media('m', 's') {
    position: fixed;
    bottom: 0;
  }

  &__body {
    width: 100%;
    padding: 2vh 0;
  }

  &__list {
    display: flex;
    justify-content: center;

    @include media('s') {
      column-gap: 10vw;
    }

    @include media('m') {
      column-gap: 6vw;
    }
  }

  &__item {
    display: flex;
    column-gap: 2vw;
  }

  &__item-name {
    @include text;

    color: var(--text-acceted);
  }
}
</style>