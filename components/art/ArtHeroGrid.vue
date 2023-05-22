<script setup lang="ts">
withDefaults(defineProps<{
  fill?: string
  width?: number | string
}>(), {
  // here we have default values
  fill: '--art-grid-fill',
  width: '100%',
})
</script>

<template>
  <svg :width="width" height="auto" viewBox="0 0 1202 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="-0.485858" y="0.485858" width="299.233" height="298.437" transform="matrix(-1 0 0 1 900.263 300.291)"
      :stroke="`var(${fill})`" stroke-width="0.971717"
    />
    <rect
      x="-0.485858" y="0.485858" width="299.233" height="298.437" transform="matrix(-1 0 0 1 1200.47 0.88208)"
      :stroke="`var(${fill})`" stroke-width="0.971717"
    />
    <rect
      x="-0.5" y="0.5" width="299.205" height="298.409" transform="matrix(-1 0 0 1 299.824 300.291)"
      :stroke="`var(${fill})`"
    />
    <rect
      x="-0.5" y="0.5" width="299.205" height="298.409" transform="matrix(-1 0 0 1 600.029 0.88208)"
      :stroke="`var(${fill})`"
    />
    <rect x="232.203" y="334.5" width="20.0124" height="21" stroke="var(--color-text-lighter)" />
    <rect x="823.871" y="104" width="21.0124" height="22" fill="var(--color-text-lighter)" />
  </svg>
</template>

<style lang="scss">
:root,
[data-theme="light"] {
  --art-grid-fill: var(--color-bg-highlight);
}

[data-theme="dark"] {
  --art-grid-fill: var(--color-border);
}
</style>
