<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text',
  width: 18,
})
</script>

<template>
  <svg :width="props.width" height="auto" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    vg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.9995 21.593H29.1679V26.9028H2.83161V21.593H0V29.7344H32L31.9995 21.593Z" :fill="`var(${fill})`" />
    <path
      d="M14.5834 0V15.7876L9.69836 10.9025L7.71606 12.8853L15.9992 21.1685L24.2824 12.8853L22.3001 10.9025L17.4151 15.7876V0H14.5834Z"
      :fill="`var(${props.fill})`"
    />
  </svg>
</template>
