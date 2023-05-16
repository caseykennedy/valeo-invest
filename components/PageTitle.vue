<script lang="ts" setup>
</script>

<template>
  <Section :border-bottom="true" class="page-title">
    <h1 class="page-title__title">
      <span class="page-title__symbol">
        <ValeoSymbol />
      </span> <span class="text-arial"><slot name="title" /></span>
      <br>
      <span class="page-title__title--muted">
        <slot name="tagline" />
      </span>
    </h1>
  </Section>
</template>

<style lang="scss" scoped>
.page-title {
  @include breakpoint(md) {
    padding-top: calc(var(--space-xxxl) * 2);
  }

  &__title {
    &--muted {
      color: var(--color-text-lighter);
    }
  }

  &__symbol {
    svg {
      width: 23px;

      @include breakpoint(md) {
        width: 34px;
      }
    }
  }
}
</style>
