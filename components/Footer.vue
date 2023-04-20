<script lang="ts" setup>
const routes = [
  {
    title: 'introduction',
    path: '',
  },
  {
    title: 'ecosystem',
    path: 'about',
  },
  {
    title: 'market',
    path: 'blog',
  },
  {
    title: 'opportunity',
    path: 'blog',
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
          <NuxtLink v-for="{ title, path } in routes" v-slot="{ href, navigate }" :key="path" :to="`/${path}`" custom>
            <a :href="href" @click="navigate">
              {{ title }}
            </a>
          </NuxtLink>
        </nav>
      </div>
      <div class="footer__contact">
        <Button href="mailto:info@valeo.money" class="btn btn--outline" rel="noopener noreferrer">
          Contact
          <span class="icon icon--right">
            <Download />
          </span>
        </Button>
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
            <button @click="scrollTop">
              Top
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

.footer {
  padding-top: var(--gutter-sm);
  padding-bottom: var(--gutter-sm);
  position: relative;
  width: 100%;

  background: var(--color-bg);
  border-top: var(--border);
  border-color: var(--color-border-light);

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

    color: var(--color-text-muted);
    font-size: calc(var(--text-base-size) * 0.9);

    /* @include breakpoint(xs) {
      justify-content: flex-end;
    } */

    nav {
      display: flex;
      gap: var(--space-md);

      a {
        color: var(--color-text-muted);

        &:hover {
          text-decoration: underline;
        }
      }
    }

  }
}
</style>
