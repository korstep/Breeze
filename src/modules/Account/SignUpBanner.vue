<script setup lang="ts">
import UISection from '@/shared/components/UISection.vue'
import sizes from '@/shared/constants/sizes'
import UICaption from '@/shared/components/UICaption.vue'
import UIButton from '@/shared/components/UIButton.vue'
</script>

<template>
  <UISection is-hide-head>
    <div class="sign-up-banner">
      <UICaption is-accented :size="sizes.L" class="sign-up-banner__title">Never forget your umbrella!</UICaption>
      <UICaption :size="sizes.M" class="sign-up-banner__subtitle">
        Sign up for our daily weather newsletter
        <wbr />
        personalized just for you.
      </UICaption>
      <UIButton :size="sizes.M" class="sign-up-banner__button">
        <UICaption :size="sizes.S">Sign Up</UICaption>
      </UIButton>
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.sign-up-banner {
  display: flex;
  flex-direction: column;
  row-gap: 3.5dvh;

  &__title {
    padding-bottom: 2dvh;
    border-bottom: 2px solid var(--background-fourth);
  }

  &__button {
    width: 100%;
  }
}
</style>
