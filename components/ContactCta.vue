<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

withDefaults(defineProps<{
  bg?: string
}>(), {
  bg: '--color-bg',
})
</script>

<template>
  <Section :bg="bg">
    <div class="contact-cta">
      <div class="contact-cta__heading">
        <slot name="heading" />
      </div>
      <div class="contact-cta__cta">
        <div class="contact-cta__cta__icon icon icon--md">
          <ArrowRight width="24px" />
        </div>
        <NuxtLink to="mailto:hello@valeo.money?subject=Connect with Valeo" target="_blank" rel="nofollow noreferrer">
          hello@valeo.money
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>

<style lang="scss">
.contact-cta {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-xxl);
  padding: var(--space-xxxxl) 0;

  @include breakpoint(sm) {
    flex-flow: row nowrap;
    align-items: center;
  }

  &__heading {
    h2 {
      margin-bottom: 0;
    }
  }

  &__cta {
    display: flex;
    align-items: center;
    gap: var(--space-md);

    .icon {
      svg {
        transform: translateX(0);
        /* transition: transform var(--transition); */
      }
    }

    &:hover {
      .icon {
        svg {
          transform: translateX(var(--space-xxs));
        }
      }
    }

    a {
      color: var(--color-text);
      font-size: var(--text-md);
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
