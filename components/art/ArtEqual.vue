<script setup lang="ts">
withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text-lighter',
  width: 200,
})
</script>

<template>
  <svg :width="width" height="auto" viewBox="0 0 268 147" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.0234375 38.5818H268V0.144775H0.0234375V38.5818ZM0.0234375 146.855H268V108.418H0.0234375V146.855Z"
      :fill="`var(${fill})`"
    />
  </svg>
</template>
