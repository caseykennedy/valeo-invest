<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  bg?: string
  border?: boolean
}>(), {
  bg: '--color-bg',
  border: false,
})

const cssVars = computed(() => {
  return {
    '--section-bg': `var(${props.bg})`,
  }
})

const cssClasses = computed(() => {
  return {
    'section--border': props.border,
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
  /* border-radius: var(--radius); */
  padding-top: var(--gutter-y);
  padding-bottom: var(--gutter-y);
  position: relative;
  width: 100%;

  &--border {
    border-top: var(--border);
    border-color: alpha(var(--color-text-muted), 0.25);
  }

  &__inner {
    margin: 0 auto;
    padding-right: var(--gutter);
    padding-left: var(--gutter);
    max-width: var(--site-width-max);
    width: 100%;
  }
}
</style>
