<script setup lang="ts">
withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text',
  width: 140,
})
</script>

<template>
  <svg :width="width" height="auto" viewBox="0 0 135 107" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M0.181152 55.9133C0.181152 52.8757 2.64359 50.4133 5.68115 50.4133H28.9348C31.9723 50.4133 34.4348 52.8757 34.4348 55.9133V101.384C34.4348 104.421 31.9723 106.884 28.9348 106.884H5.68116C2.64359 106.884 0.181152 104.421 0.181152 101.384V55.9133ZM7.18115 57.4133V99.8835H27.4348V57.4133H7.18115Z"
      :fill="`var(${fill})`"
    />
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M50.4348 6.40185C50.4348 3.36428 52.8972 0.901855 55.9348 0.901855H79.1884C82.226 0.901855 84.6884 3.36428 84.6884 6.40186V101.384C84.6884 104.421 82.226 106.884 79.1884 106.884H55.9348C52.8972 106.884 50.4348 104.421 50.4348 101.384V6.40185ZM57.4348 7.90186V99.8835H77.6884V7.90186H57.4348Z"
      :fill="`var(${fill})`"
    />
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M100.688 32.2515C100.688 29.2139 103.151 26.7515 106.188 26.7515H129.442C132.48 26.7515 134.942 29.2139 134.942 32.2515V101.384C134.942 104.421 132.48 106.884 129.442 106.884H106.188C103.151 106.884 100.688 104.421 100.688 101.384V32.2515ZM107.688 33.7515V99.8835H127.942V33.7515H107.688Z"
      :fill="`var(${fill})`"
    />
  </svg>
</template>
