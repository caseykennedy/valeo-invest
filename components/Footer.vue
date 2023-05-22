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
  <section class="footnote">
    <div class="footnote__layout">
      <button href="https://valeo.network" class="btn btn--outline" target="_blank" rel="noopener noreferrer">
        Executive Summary
        <span class="icon icon--sm icon--right">
          <Pdf width="24" />
        </span>
      </button>
      <div class="footnote__meta">
        <span>Presentation</span> Q3, 2023
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer__row">
      <div class="footer__logo">
        <!-- {{ isDark ? t('theme.dark') : t('theme.light') }} -->
        <NuxtLink to="/">
          <span class="footer__logo__symbol">
            <ValeoSymbol />
          </span>
          <span class="footer__logo__wordmark">
            Valeo
          </span>
        </NuxtLink>
      </div>

      <div class="footer__nav">
        <nav>
          <NuxtLink v-for="{ title, path } in routes" v-slot="{ href, navigate, isActive }" :key="path" :to="path" custom>
            <a :href="href" :class="`${isActive && 'active'}`" @click="navigate">
              {{ title }}
            </a>
          </NuxtLink>
        </nav>
      </div>

      <div class="footer__contact">
        <div class="footer__contact__capture">
          <p class="text">
            Let us know you stopped by
          </p>
          <form>
            <input type="text" placeholder="Email Address" class="form-control">
            <button class="btn btn--xs btn--primary" style="padding: 0">
              <ArrowRight fill="--color-white" />
            </button>
          </form>
        </div>
        <!-- <NuxtLink
          href="mailto:hello@valeo.money?subject=Connect with Valeo" class="btn btn--outline"
          rel="noopener noreferrer" target="_blank"
        >
          Contact
          <span class="icon icon--right">
            <ArrowRight />
          </span>
        </NuxtLink> -->
      </div>
    </div>

    <div class="footer__row">
      <div class="footer__legal">
        <div>
          &copy; 2023 Valeo Labs Inc.
        </div>

        <div class="footer__legal__nav">
          <nav>
            <NuxtLink to="mailto:hello@valeo.money?subject=Connect with Valeo" target="_blank" rel="nofollow noreferrer">
              hello@valeo.money
            </NuxtLink>
            <button class="footer__top-btn btn btn--xs btn--outline" @click="scrollTop">
              <ArrowRight fill="--color-text-lighter" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
:root,
[data-theme="light"] {
  --footnote-bg: var(--color-bg-highlight);
}

[data-theme="dark"] {
  --footnote-bg: var(--color-bg);
}

@mixin rowLayout {
  display: flex;
  margin: 0 auto;
  padding-right: var(--gutter);
  padding-left: var(--gutter);
  max-width: var(--site-width-max);
  width: 100%;
}

.footnote {
  /* background: var(--footnote-bg); */
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
    /* color: var(--color-white); */

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
    font-size: var(--text-md);
    margin-right: var(--gutter);
    margin-bottom: var(--gutter);
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

  &__nav {
    flex: 1.25;

    nav {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--space-sm);
      width: fit-content;

      a {
        color: var(--color-text);
        font-size: calc(var(--text-base-size) / 1.15);
        text-transform: capitalize;

        &:hover,
        &:focus,
        &.active {
          text-decoration: underline
        }
      }
    }

    ;
  }

  &__contact {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;

    padding-top: var(--space-xxxl);

    @include breakpoint(xs) {
      padding-top: 0;
    }

    &__capture {
      flex: 1;

      form {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-end;

        input {
          /* padding: 0; */
          width: 100%;
        }

        button,
        .btn {
          aspect-ratio: 1;
          /* border-radius: 0; */

          padding: 0;
          position: relative;
          /* bottom: 1px; */
        }
      }
    }
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
        text-decoration: underline;

        &:hover {
          color: var(--color-text-light);
          text-decoration: none;
        }
      }
    }

  }

  &__top-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1;
    /* background: var(--color-border); */
    /* border-radius: var(--radius-full); */
    cursor: pointer;
    padding: 0;

    svg {
      transform: rotate(-90deg);
    }
  }
}
</style>
