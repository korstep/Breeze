<script setup lang="ts">
import SettingsSection from '@/components/blocks/Settings/components/SettingsSection.vue'
import { settings } from '@/constants/settings'
import { type IWeatherStoreState, useWeatherStore } from '@/stores/weather'
import UICaption from '@/components/shared/UICaption.vue'
import sizes from '@/constants/sizes'

const weatherStore = useWeatherStore()

const getWeatherSetting = (storeKey: string) => {
  return weatherStore[storeKey as keyof typeof weatherStore]
}

const toggleWeatherSetting = (storeKey: string, value: IWeatherStoreState[keyof IWeatherStoreState]) => {
  weatherStore.setStateValueByKey(storeKey as keyof IWeatherStoreState, value)
}
</script>

<template>
  <SettingsSection title="Units">
    <div class="units-settings">
      <div class="units-settings__unit" v-for="item in settings.units" :key="item.name">
        <UICaption :size="sizes.S" weight="bold" class="units-settings__unit-name">{{ item.name }}</UICaption>
        <div class="units-settings__unit-values">
          <div
            class="units-settings__unit-value"
            v-for="value in item.availableValues"
            :key="value.name"
            :class="getWeatherSetting(item.storeKey).name === value.name ? 'units-settings__unit-value--active' : ''"
            @click="toggleWeatherSetting(item.storeKey, value)"
          >
            <UICaption
              is-accented
              :size="sizes.S"
              class="units-settings__unit-value-text"
              :weight="getWeatherSetting(item.storeKey).name === value.name ? 'bold' : 'normal'"
            >
              {{ value.name }}
            </UICaption>
          </div>
        </div>
      </div>
    </div>
  </SettingsSection>
</template>

<style scoped lang="scss">
.units-settings {
  display: flex;
  flex-direction: column;
  row-gap: 2.5dvh;

  &__unit {
    display: grid;
    grid-template: min-content auto / 100%;
    grid-row-gap: 1dvh;
  }

  &__unit-values {
    display: flex;
    padding: 0.32rem;
    background-color: var(--background-fourth);
    border-radius: 10px;
  }

  &__unit-value {
    display: inline-flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0.32rem;
    cursor: pointer;
    border-radius: 10px;

    &--active {
      background-color: var(--background-third);
    }
  }
}
</style>
