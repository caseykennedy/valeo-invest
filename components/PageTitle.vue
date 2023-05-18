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
      <div class="page-title__figure">
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
    padding-top: calc(var(--space-xxl) * 1);
  }

  &__title {
    /* line-height: 0.85; */

    &--muted {
      color: var(--color-text-lighter);
      font-size: var(--text-xxl);
    }

    &__symbol {
      svg {
        width: 30px;

        @include breakpoint(md) {
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
