<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  bg?: string
  borderTop?: boolean
  borderBottom?: boolean
}>(), {
  bg: '--color-bg',
  borderTop: false,
  borderBottom: false,
})

const cssVars = computed(() => {
  return {
    '--section-bg': `var(${props.bg})`,
  }
})

const cssClasses = computed(() => {
  return {
    'section--border-top': props.borderTop,
    'section--border-bottom': props.borderBottom,
  }
})
</script>

<template>
  <section class="section" :class="cssClasses" :style="cssVars">
    <div class="section__inner">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.section {
  background: var(--section-bg);
  border-radius: var(--radius-xs);
  padding-top: var(--gutter-y);
  padding-bottom: var(--gutter-y);
  position: relative;
  width: 100%;

  &--border-top {
    border-top: var(--border);
  }

  &--border-bottom {
    border-bottom: var(--border);
  }

  &__inner {
    margin: 0 auto;
    padding-right: var(--gutter);
    padding-left: var(--gutter);
    /* max-width: var(--site-width-max); */
    width: 100%;
  }
}
</style>
