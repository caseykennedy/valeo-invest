<script setup lang="ts">
withDefaults(defineProps<{
  fill?: string
  stroke?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--color-text',
  stroke: '--color-bg',
  width: 44,
})
</script>

<template>
  <svg :width="width" height="auto" viewBox="0 0 60 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47.3481 17.0698H7.00048L0.918671 58.6709H53.0813L47.3481 17.0772V17.0698Z" :fill="`var(${fill})`" />
    <path d="M55.2529 21.6362V48.9021H4.7466V21.6362" :fill="`var(${fill})`" />
    <path d="M0 17.1364L9.49367 1.26294H50.5063L60 17.1364H0Z" :fill="`var(${fill})`" />
    <path d="M8.95201 17.1364L17.4963 1.26294" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
    <path d="M19.5182 17.1364L23.7904 1.26294" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
    <path d="M30.0846 17.1364V1.26294" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
    <path d="M40.651 17.1364L36.3788 1.26294" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
    <path d="M51.2172 17.1364L42.6729 1.26294" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
    <path
      d="M0.00906372 17.1362C0.00906372 19.6236 2.02172 21.6362 4.50906 21.6362C6.9964 21.6362 9.00906 19.6236 9.00906 17.1362"
      :fill="`var(${fill})`"
    />
    <path
      d="M12.6928 17.1362C12.6928 19.6236 14.7055 21.6362 17.1928 21.6362C19.6802 21.6362 21.6928 19.6236 21.6928 17.1362"
      :fill="`var(${fill})`"
    />
    <path
      d="M25.3757 17.1362C25.3757 19.6236 27.3883 21.6362 29.8757 21.6362C32.363 21.6362 34.3757 19.6236 34.3757 17.1362"
      :fill="`var(${fill})`"
    />
    <path
      d="M38.0596 17.1362C38.0596 19.6236 40.0723 21.6362 42.5596 21.6362C45.0469 21.6362 47.0596 19.6236 47.0596 17.1362"
      :fill="`var(${fill})`"
    />
    <path
      d="M50.7527 17.1362C50.7527 19.6236 52.7654 21.6362 55.2527 21.6362C57.7401 21.6362 59.7527 19.6236 59.7527 17.1362"
      :fill="`var(${fill})`"
    />
    <path d="M24.1798 48.902V27.8735H13.2242V48.902" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
    <path d="M46.9457 27.8735H32.8855V41.9337H46.9457V27.8735Z" :stroke="`var(${stroke})`" stroke-width="3" stroke-miterlimit="10" />
  </svg>
</template>
