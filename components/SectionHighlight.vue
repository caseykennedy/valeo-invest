<script lang="ts">
</script>

<template>
  <Section bg="--color-bg-highlight">
    <div class="highlight">
      <div class="highlight__figure">
        <slot name="figure" />
      </div>
      <div class="highlight__content">
        <slot name="content" />
      </div>
    </div>
  </Section>
</template>

<style lang="scss">
.highlight {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @include breakpoint(md) {
    flex-flow: row nowrap;
    /* gap: var(--space-xxxxl); */
  }

  &>* {
    flex: 1;
    padding: var(--gutter) 0;

    @include breakpoint(sm) {
      padding: var(--gutter-sm) var(--space-xxxl);
    }
  }

  &__stat {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    /* padding: var(--space-xxxxl); */
    width: 100%;

    aspect-ratio: 1 / 1;
    border: var(--border);
    border-color: var(--color-border-light);
    border-width: 2px;
    border-radius: var(--radius-full);

    color: var(--color-text-light);
    text-align: center;
  }

  &__figure {}

  &__content {
    flex: 1;

    @include breakpoint(sm) {
      flex: 1.25;
    }
  }
}
</style>
