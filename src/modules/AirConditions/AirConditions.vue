<script setup lang="ts">
import UISection from '@/shared/components/UISection.vue'
import UIButton from '@/shared/components/UIButton.vue'
import AirConditionsItem from '@/modules/AirConditions/Item/AirConditionsItem.vue'
import UICaption from '@/shared/components/UICaption.vue'
import sizes from '@/shared/constants/sizes'
import { useSharedStore } from '@/shared/store'

const sharedStore = useSharedStore()

const airConditions = [
  {
    title: 'Real Feel',
    icon: 'feels',
    value: sharedStore.getAirConditions.feelsLike
  },
  {
    title: 'Wind',
    icon: 'wind',
    value: sharedStore.getAirConditions.windSpeed
  },
  {
    title: 'Chance of Rain',
    icon: 'rain',
    value: sharedStore.getAirConditions.chanceOfRain
  },
  {
    title: 'UV Index',
    icon: 'uv',
    value: sharedStore.getAirConditions.uvIndex
  }
]
</script>

<template>
  <UISection title="air Conditions">
    <template #head>
      <UIButton class="air-conditions__button">
        <UICaption class="air-conditions__button-text" :size="sizes.S">See details</UICaption>
      </UIButton>
    </template>
    <div class="air-conditions">
      <AirConditionsItem v-for="item in airConditions" :title="item.title" :value="item.value" :icon="item.icon" />
    </div>
  </UISection>
</template>

<style scoped lang="scss">
.air-conditions {
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, auto);
  grid-gap: 0 5px;

  &__button {
    justify-self: end;
  }
}
</style>
