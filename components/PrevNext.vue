<script lang="ts" setup>
withDefaults(defineProps<{
  prevTo?: string
  nextTo?: string
}>(), {
  prevTo: '',
  nextTo: '',
})
</script>

<template>
  <Section :border-top="true" style="padding-top: 0; padding-bottom: 0;">
    <div class="prev-next">
      <NuxtLink v-if="$slots.prev" :to="prevTo" class="prev-next__prev">
        <slot name="prev" />
        <ArrowRight fill="--color-text" />
      </NuxtLink>
      <NuxtLink v-if="$slots.next" :to="nextTo" class="prev-next__next">
        <ArrowRight fill="--color-text" />
        <slot name="next" />
      </NuxtLink>
    </div>
  </Section>
</template>

<style lang="scss">
.prev-next {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1px;

  &>* {
    display: flex;
    flex: 1;
    padding: var(--gutter) 0;
    align-items: center;
    gap: var(--space-lg);

    &:not(:last-child) {
      border-right: var(--border);
    }

    svg {
      display: none;

      @include breakpoint(sm) {
        display: block;
      }
    }

    &:hover {
      color: var(--color-text);

      svg {
        transform: translateX(var(--space-sm));
      }
    }
  }

  &__prev {
    justify-content: flex-start;

    svg {
      transform: rotate(180deg);
    }

    &:hover {

      svg {
        transform: rotate(180deg) translateX(var(--space-sm));
      }
    }
  }

  &__next {
    justify-content: flex-end;
  }

  a {
    background-color: var(--color-bg);
    color: var(--color-text-light);
    /* font-size: var(--text-sm); */
    /* text-decoration: underline; */

    &:hover {
      color: var(--color-text);
    }
  }
}
</style>
