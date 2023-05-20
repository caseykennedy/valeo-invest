<script lang="ts" setup>
</script>

<template>
  <Section :border-bottom="true">
    <div class="page-title">
      <div>
        <h1 class="page-title__title">
          <span class="page-title__title__symbol">
            <ValeoSymbol />
          </span> <span class="text-arial">
            <slot name="title" />
          </span>
          <br>
          <span class="page-title__title--muted">
            <slot name="tagline" />
          </span>
        </h1>
      </div>
      <div v-if="$slots.figure" class="page-title__figure">
        <slot name="figure" />
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.page-title {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  @include breakpoint(md) {
    flex-flow: row nowrap;
    align-items: center;
    padding-top: var(--space-xxl);
  }

  &__title {
    /* line-height: 0.85; */

    &--muted {
      /* font-size: var(--text-lg); */
      color: var(--color-text-lighter);
    }

    &__symbol {
      svg {
        width: 23px;

        @include breakpoint(xs) {
          width: 34px;
        }
      }
    }
  }

  &__figure {
    margin-top: var(--gutter-y);

    @include breakpoint(md) {
      margin-top: 0;
    }
  }
}
</style>
