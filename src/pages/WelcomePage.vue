<script setup lang="ts">
import UIButton from '@/shared/components/UIButton.vue'
import UICaption from '@/shared/components/UICaption.vue'
import sizes from '@/shared/constants/sizes'
import UIIcon from '@/shared/components/UIIcon.vue'
import { onMounted } from 'vue'
import index from '@/router'
import { useSharedStore } from '@/shared/store'
import ThePage from '@/pages/base/ThePage.vue'
import { routeNames } from '@/router/constants/routeNames'

const store = useSharedStore()

onMounted(async () => {
  if (!store.isWeatherDataValid) {
    await store.setGeolocation()
    await store.setWeatherData()
  }
})

const goToMainPage = function () {
  index.push({ name: routeNames.main })
}
</script>

<template>
  <ThePage>
    <div class="welcome">
      <div class="welcome__poster">
        <picture class="welcome__poster-image">
          <source srcset="@/assets/images/brand-logo.avif" type="image/avif" />
          <source srcset="@/assets/images/brand-logo.webp" type="image/webp" />
          <img src="@/assets/images/brand-logo.png" alt="logo" />
        </picture>
      </div>
      <div class="welcome__info">
        <picture class="welcome__info-poster" v-if="store.isDesktop">
          <source srcset="@/assets/images/brand-logo.avif" type="image/avif" />
          <source srcset="@/assets/images/brand-logo.webp" type="image/webp" />
          <img src="@/assets/images/brand-logo.png" alt="logo" />
        </picture>
        <UICaption is-accented :size="sizes.XXL" class="welcome__title">Breeze</UICaption>
        <UICaption :size="sizes.L" weight="normal" class="welcome__description">Weather App</UICaption>

        <UIButton class="welcome__button" @click="goToMainPage()" :disabled="!store.isWeatherDataValid">
          <UIIcon name="arrow" v-if="store.isMobile" />
          <UICaption v-else>Get started</UICaption>
        </UIButton>
      </div>
    </div>
  </ThePage>
</template>

<style scoped lang="scss">
.welcome {
  display: grid;
  grid-template: 45% 55% / 100%;
  height: 100%;

  @include media('>sm') {
    grid-template: 100% / 45% 55%;
  }

  &__poster {
    display: flex;
    align-items: center;
    justify-content: center;

    @include media('>sm') {
      background-color: var(--background-third);
      border-radius: 1rem;
    }
  }

  &__poster-image {
    width: 75%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 1dvh;
    align-items: center;

    @include media('>sm') {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__info-poster {
    width: 5dvw;
  }

  &__description {
    margin-bottom: 12.5dvh;

    @include media('>sm') {
      margin-bottom: 7.5dvh;
    }
  }

  &__button {
    min-width: 11dvw;
    aspect-ratio: 1;

    @include media('>xxs') {
      min-width: auto;
      aspect-ratio: auto;
      padding: 0.75rem 2.5rem;
    }
  }

  &__location {
    cursor: pointer;
  }
}
</style>
