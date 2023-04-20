<script lang="ts" setup>
</script>

<template>
  <header class="header">
    <div class="header__row">
      <div class="header__logo">
        <!-- {{ isDark ? t('theme.dark') : t('theme.light') }} -->
        <NuxtLink to="/">
          <span class="header__logo__symbol">
            Ꝟ
          </span>
          <span class="header__logo__wordmark">
            Valeo
          </span>
        </NuxtLink>
      </div>

      <div class="header__utils">
        <ThemeToggler />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: var(--color-bg);
  backdrop-filter: blur(7px);
  padding: var(--space-sm) 0;
  width: 100%;
  z-index: var(--z-index-header);

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding-right: var(--gutter);
    padding-left: var(--gutter);

    max-width: var(--site-width-max);
    width: 100%;
  }

  &__logo {
    display: flex;
    font-size: var(--text-md);
    margin-right: var(--gutter);
    width: initial;

    a {
      color: var(--color-text);
    }

    &__wordmark {
      /* display: none; */
      font-family: Arial, sans-serif;
      /* font-size: var(--text-md-size); */

      @include breakpoint(xs) {
        display: initial;
      }
    }

    &__symbol {
    }
  }

  &__utils {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: var(--space-xxs);

    @include breakpoint(sm) {
      gap: var(--space-xs);
    }

    .whitepaper {
      display: none;

      @include breakpoint(xs) {
        display: flex;
      }
    }
  }
}
</style>
