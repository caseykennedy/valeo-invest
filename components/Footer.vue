<script lang="ts" setup>
const routes = [
  {
    title: 'introduction',
    path: '/',
  },
  {
    title: 'ecosystem',
    path: '/ecosystem',
  },
  {
    title: 'market',
    path: '/market',
  },
  {
    title: 'opportunity',
    path: '/opportunity',
  },
]

function scrollTop(e: Event) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  e.preventDefault()
}
</script>

<template>
  <div class="footnote">
    <div class="footnote__layout">
      <button href="https://valeo.network" class="btn btn--outline" target="_blank" rel="noopener noreferrer">
        Executive Summary
        <span class="icon icon--sm icon--right">
          <Pdf width="24" />
        </span>
      </button>
      <div class="footnote__meta">
        <span>Presentation</span> Q2, 2023
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="footer__row">
      <div class="footer__logo">
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

      <div class="footer__nav">
        <nav>
          <NuxtLink v-for="{ title, path } in routes" v-slot="{ href, navigate }" :key="path" :to="path" custom>
            <a :href="href" @click="navigate">
              {{ title }}
            </a>
          </NuxtLink>
        </nav>
      </div>
      <div class="footer__contact">
        <NuxtLink
          href="mailto:hello@valeo.money?subject=Connect with Valeo" class="btn btn--outline"
          rel="noopener noreferrer" target="_blank"
        >
          Contact
          <span class="icon icon--right">
            <ArrowRight />
          </span>
        </NuxtLink>
      </div>
    </div>

    <div class="footer__row">
      <div class="footer__legal">
        <div>
          &copy; 2023 Valeo, Inc.
        </div>

        <div class="footer__legal__nav">
          <nav>
            <NuxtLink to="/">
              Legal
            </NuxtLink>
            <button class="footer__top-btn" @click="scrollTop">
              <ArrowRight />
            </button>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@mixin rowLayout {
  display: flex;
  margin: 0 auto;
  padding-right: var(--gutter);
  padding-left: var(--gutter);
  max-width: var(--site-width-max);
  width: 100%;
}

.footnote {
  border-top: var(--border);
  padding: var(--gutter-sm) 0;
  width: 100%;

  &__layout {
    @include rowLayout;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--gutter);
  }

  &__meta {
    span {
      display: none;
      margin-right: var(--space-lg);

      @include breakpoint(xs) {
        display: initial;
        flex-flow: row nowrap;
      }
    }
  }
}

.footer {
  padding-top: var(--gutter-sm);
  padding-bottom: var(--gutter-sm);
  position: relative;
  width: 100%;

  background: var(--color-bg);
  border-top: var(--border);

  &__row {
    @include rowLayout;

    flex-flow: column nowrap;

    @include breakpoint(xs) {
      flex-flow: row nowrap;
    }
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

    &__symbol {}
  }

  &__nav {
    flex: 1;

    nav {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--space-sm);
      width: fit-content;

      a {
        color: var(--color-text);
        font-size: calc(var(--text-base-size) / 1.15);

        &:hover {
          text-decoration: underline;
        }
      }
    }

    ;
  }

  &__contact {
    display: flex;
    justify-content: flex-end;
  }

  &__legal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-xxxl);
    width: 100%;

    color: var(--color-text-lighter);
    font-size: calc(var(--text-base-size) / 1.25);

    /* @include breakpoint(xs) {
      justify-content: flex-end;
    } */

    nav {
      display: flex;
      align-items: center;
      gap: var(--space-md);

      a {
        color: var(--color-text-lighter);

        &:hover {
          text-decoration: underline;
        }
      }
    }

  }

  &__top-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1;
    background: var(--color-bg-dark);
    border-radius: var(--radius-full);
    cursor: pointer;
    padding: var(--space-xs);

    svg {
      transform: rotate(-90deg);
    }
  }
}
</style>
