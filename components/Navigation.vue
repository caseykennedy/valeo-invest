<script lang="ts" setup>
const routes = [
  {
    title: 'introduction',
    path: '',
  },
  {
    title: 'ecosystem',
    path: 'ecosystem',
  },
  // {
  //   title: 'market',
  //   path: 'blog',
  // },
  // {
  //   title: 'opportunity',
  //   path: 'blog',
  // },
]
</script>

<template>
  <div class="navigation">
    <div class="navigation__row">
      <nav>
        <NuxtLink v-for="{ title, path } in routes" v-slot="{ href, navigate }" :key="path" :to="`/${path}`" custom>
          <a :href="href" @click="navigate">
            {{ title }}
          </a>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  border-top: var(--border);
  border-bottom: var(--border);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: var(--z-index-header);

  &__row {
    display: flex;

    margin: 0 auto;

    /* max-width: var(--site-width-max); */
    width: 100%;
  }

  nav {
    --nav-link-border-width: 2px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1px;
    width: 100%;

    background: var(--color-border);

    a {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--color-bg);
      border-bottom: solid var(--nav-link-border-width);
      border-color: var(--color-bg);

      font-size: var(--text-base-size);
      font-weight: 500;
      color: var(--color-text);
      text-transform: capitalize;
      padding: var(--space-xs);
      padding-top: calc(var(--space-xs) + var(--nav-link-border-width));

      &:hover {
        /* background: alpha(var(--color-primary), 0.15); */
        border-color: var(--color-border);
      }

      &:focus,
      &--active {
        color: var(--color-text);
      }
    }
  }
}
</style>
