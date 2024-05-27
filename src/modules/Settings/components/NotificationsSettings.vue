<script setup lang="ts">
import SettingsSection from '@/modules/Settings/components/SettingsSection.vue'
import SettingsItemSwitch from '@/modules/Settings/components/SettingsItemSwitch.vue'
import { settings } from '@/modules/Settings/constants/settings'
import type { ISharedStoreState } from '@/shared/store'
import { useSharedStore } from '@/shared/store'

const weatherStore = useSharedStore()

const getWeatherSetting = (storeKey: string) => {
  return weatherStore[storeKey as keyof typeof weatherStore]
}

const toggleWeatherSetting = (storeKey: string) => {
  weatherStore.setStateValueByKey(storeKey as keyof ISharedStoreState, !getWeatherSetting(storeKey))
}
</script>

<template>
  <SettingsSection title="Notifications" class="notifications-settings">
    <SettingsItemSwitch
      class="notifications-settings__item"
      v-for="item in settings.notifications"
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
