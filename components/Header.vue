<script lang="ts" setup>
</script>

<template>
  <header class="header">
    <div class="header__layout">
      <div class="header__logo">
        <!-- {{ isDark ? t('theme.dark') : t('theme.light') }} -->
        <NuxtLink to="/">
          <span class="header__logo__symbol">
            <ValeoSymbol />
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

<style lang="scss">
:root {
  --header-height: 58px;
}

.header {
  background: var(--color-bg);
  /* padding: var(--space-sm) 0; */
  height: var(--header-height);
  width: 100%;
  position: relative;
  z-index: 99;

  @include breakpoint(sm) {
    position: sticky;
    top: 0;
  }

  &__layout {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding-right: var(--gutter);
    padding-left: var(--gutter);

    height: var(--header-height);
    max-width: var(--site-width-max);
    width: 100%;
  }

  &__logo {
    font-size: var(--text-md);
    margin-right: var(--gutter);
    width: initial;

    a {
      display: flex;
      align-items: center;
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
      display: flex;
      align-items: center;
      margin-right: var(--space-xxs);

      svg {
        width: 13px;

        @include breakpoint(md) {
          width: 15px;
        }
      }
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
