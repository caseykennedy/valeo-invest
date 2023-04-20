<script setup lang="ts">
const props = withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text',
  width: 44,
})
</script>

<template>
  <svg :width="width" height="auto" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47.3481 17.0698H7.00048L0.918671 58.6709H53.0813L47.3481 17.0772V17.0698Z" :fill="`var(${fill})`" />
    <path
      d="M27.0115 1.49438C31.1501 1.49438 34.51 4.86163 34.51 9.02248C34.51 13.1833 31.1427 16.5506 27.0115 16.5506C22.8803 16.5506 19.4834 13.1611 19.4834 9.02248C19.4834 4.88388 22.8507 1.49438 27.0115 1.49438Z"
      :fill="`var(${fill})`" stroke-width="2.66133"
    />
  </svg>
</template>
