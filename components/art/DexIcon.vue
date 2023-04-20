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
  <svg :width="width" height="auto" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.79565 11.7876L24.2089 24.5128L44.622 11.7876L24.2089 0L3.79565 11.7876Z" :fill="`var(${fill})`" />
    <path d="M48.4108 18.1761L28.004 30.9078V53.5325L48.4108 41.7449V18.1761Z" :fill="`var(${fill})`" />
    <path d="M0 18.1761L20.4132 30.9078V53.5325L0 41.7449V18.1761Z" :fill="`var(${fill})`" />
  </svg>
</template>
