<script setup lang="ts">
import UICaption from '@/shared/components/UICaption.vue'
import sizes from '@/shared/constants/sizes'
import { TheSettings } from '@/modules/Settings'
import { useSharedStore } from '@/shared/store'
import TheSubscription from '@/modules/Subscription/TheSubscription.vue'
import SignUpBanner from '@/modules/Account/SignUpBanner.vue'
import ThePage from '@/pages/base/ThePage.vue'

const { isDesktop } = useSharedStore()
</script>

<template>
  <ThePage show-navigation>
    <div class="settings">
      <div class="settings__main">
        <UICaption v-if="!isDesktop" :size="sizes.XL" is-accented>Settings</UICaption>
        <TheSettings />
      </div>
      <div v-if="isDesktop" class="settings__additional">
        <TheSubscription />
        <SignUpBanner />
      </div>
    </div>
  </ThePage>
</template>

<style lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  row-gap: var(--page-row-gap);

  @include media('>sm') {
    display: grid;
    grid-template: auto / 1.8fr 1fr;
    grid-template-areas: 'main additional';
    grid-gap: var(--page-row-gap) var(--page-column-gap);
    padding-bottom: 0;

    &__main {
      overflow: auto;
    }
  }

  &__additional {
    display: flex;
    flex-direction: column;
    row-gap: 2.5dvh;
  }
}
</style>
