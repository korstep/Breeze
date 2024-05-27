<script setup lang="ts">
import SettingsSection from '@/modules/Settings/components/SettingsSection.vue'
import SettingsItemSwitch from '@/modules/Settings/components/SettingsItemSwitch.vue'
import { settings } from '@/modules/Settings/constants/settings'
import { type IWeatherStoreState } from '@/shared/store/weather'
import { useSharedStore } from '@/shared/store'

const weatherStore = useSharedStore()

const getWeatherSetting = (storeKey: string) => {
  return weatherStore[storeKey as keyof typeof weatherStore]
}

const toggleWeatherSetting = (storeKey: string) => {
  weatherStore.setStateValueByKey(storeKey as keyof IWeatherStoreState, !getWeatherSetting(storeKey))
}
</script>

<template>
  <SettingsSection title="General" class="general-settings">
    <SettingsItemSwitch
      class="general-settings__item"
      v-for="item in settings.general"
      :key="item.name"
      :title="item.name"
      :value="getWeatherSetting(item.storeKey)"
      :description="item.description"
      @toggle="toggleWeatherSetting(item.storeKey)"
    />
  </SettingsSection>
</template>

<style scoped lang="scss">
.general-settings {
  &__item {
    &:not(:last-child) {
      padding-bottom: 1dvh;
      margin-bottom: 2.5dvh;
      border-bottom: 1px solid var(--background-third);
    }
  }
}
</style>
