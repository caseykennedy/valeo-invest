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
</script>

<template>
  <nav class="nav">
    <div class="nav__layout">
      <NuxtLink v-for="{ title, path } in routes" v-slot="{ href, navigate, isActive }" :key="path" :to="path" custom>
        <a :href="href" :class="`${isActive && 'active'}`" @click="navigate">
          {{ title }}
        </a>
      </NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  border-top: var(--border);
  border-bottom: var(--border);
  /* position: sticky; */
  /* top: 0; */
  width: 100%;
  z-index: var(--z-index-header);

  &__layout {
    --nav-link-border-width: 2px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 1px;

    margin: 0 auto;
    width: 100%;

    background: var(--color-border);

    @include breakpoint(sm) {
      grid-template-columns: repeat(4, 1fr);
    }

    a {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: var(--space-xs);
      padding-top: calc(var(--space-xs) + var(--nav-link-border-width));

      background: var(--color-bg);
      /* border-bottom: solid var(--nav-link-border-width); */
      border-color: var(--color-bg);

      font-size: calc(var(--text-base-size) / 1.15);
      font-weight: 500;
      color: var(--color-text);
      text-transform: capitalize;

      &:hover,
      &:focus,
      &.active {
        background: var(--color-bg-dark);
        border-color: var(--color-border);
      }
    }
  }
}
</style>
