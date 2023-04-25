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
  <svg :width="width" height="auto" viewBox="0 0 140 141" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M27.0213 29.207V20.2746L11.3874 35.9085L27.0213 51.5424V42.6071H61.969V29.207H27.0213ZM69.969 21.207V50.6071H35.0213V70.8561L0.0737305 35.9085L35.0213 0.960876V21.207H69.969Z"
      :fill="`var(${fill})`"
    />
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M112.929 99.1786H77.981V112.579H112.929V121.511L128.562 105.877L112.929 90.2451V99.1786ZM104.929 70.9325V91.1786H69.981V120.579H104.929V140.825L139.876 105.877L104.929 70.9325Z"
      :fill="`var(${fill})`"
    />
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M104.929 16.5877C94.2603 16.5877 85.6106 25.2365 85.6106 35.9085C85.6106 46.5806 94.2603 55.2294 104.929 55.2294C115.598 55.2294 124.25 46.5797 124.25 35.9085C124.25 25.2374 115.598 16.5877 104.929 16.5877ZM78.4106 35.9085C78.4106 21.2605 90.2834 9.3877 104.929 9.3877C119.574 9.3877 131.45 21.2605 131.45 35.9085C131.45 50.5566 119.574 62.4294 104.929 62.4294C90.2834 62.4294 78.4106 50.5566 78.4106 35.9085Z"
      :fill="`var(${fill})`"
    />
    <path
      fill-rule="evenodd" clip-rule="evenodd"
      d="M8.44189 79.359H61.4808V132.395H8.44189V79.359ZM15.6419 125.195H54.2808V86.559H15.6419V125.195Z"
      :fill="`var(${fill})`"
    />
  </svg>
</template>
