<script setup lang="ts">
withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text',
  width: 44,
})
</script>

<template>
  <svg :width="width" height="auto" viewBox="0 0 43 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.6876 0.415283H27.7544L10.2028 52.6421H6.34999L23.6876 0.415283ZM42.8089 1.05742L24.6151 52H18.1938L0 1.05742H6.70673L18.1938 33.7349C18.717 35.1143 19.1689 36.4461 19.5494 37.7304C19.9299 39.0146 20.2629 40.2513 20.5483 41.4405C20.8812 42.582 21.1666 43.7236 21.4044 44.8652C21.6423 43.7236 21.9039 42.5583 22.1893 41.3691C22.5222 40.18 22.879 38.9433 23.2595 37.659C23.6876 36.3748 24.1395 35.0191 24.6151 33.5922L36.0308 1.05742H42.8089Z"
      :fill="`var(${fill})`"
    />
  </svg>
</template>
