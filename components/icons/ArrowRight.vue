<script lang="ts" setup>
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
  <svg :width="width" height="auto" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.0192 10.3726L12.1381 9.49153L15.7656 5.87551H0.145752V4.61677H15.7656L12.1381 0.989304L13.0192 0.119629L18.1458 5.24614L13.0192 10.3726Z"
      :fill="`var(${fill})`"
    />
  </svg>
</template>
