<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text',
  width: 18,
})
</script>

<template>
  <svg :width="width" height="100%" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M8.60051 9.08602L0.349609 2.02792L1.87896 0.240112L9.36365 6.64277L16.8167 0.241624L18.3496 2.02641L10.1316 9.0845C9.69147 9.46254 9.04141 9.46318 8.60051 9.08602Z"
      :fill="`var(${fill})`"
    />
  </svg>
</template>
