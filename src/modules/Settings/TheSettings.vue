<script setup lang="ts">
import UnitsSettings from '@/modules/Settings/components/UnitsSettings.vue'
import NotificationsSettings from '@/modules/Settings/components/NotificationsSettings.vue'
import GeneralSettings from '@/modules/Settings/components/GeneralSettings.vue'
</script>

<template>
  <div class="settings-module">
    <UnitsSettings />
    <NotificationsSettings />
    <GeneralSettings />
  </div>
</template>

<style scoped lang="scss">
.settings-module {
  display: flex;
  flex-direction: column;
  row-gap: 4dvh;
}
</style>
