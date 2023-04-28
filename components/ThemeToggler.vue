<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

const { isDark, toggle } = useDark()
const theme = ref(isDark)

onMounted(() => {
  const localTheme = localStorage.getItem('color-scheme')
  document.documentElement.setAttribute('data-theme', localTheme !== null ? localTheme : 'light')
})

watch(theme, () => {
  const dataTheme = theme.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', dataTheme)
})
</script>

<template>
  <button class="theme-toggler" aria-label="Toggle themes" @click="toggle()">
    <div class="theme-toggler__toggle" />
    <div class="icon icon--xxs">
      <Sunshine fill="--color-text-muted" />
    </div>
    <div class="icon icon--xxs">
      <MoonIcon fill="--color-text-muted" width="14px" />
    </div>
  </button>
</template>

<style lang="scss">
:root {
  --theme-toggler-height: 22px;
  --theme-toggler-color-bg: var(--color-bg-dark);
  --theme-toggler-position: calc(100% - var(--theme-toggler-height));
}

[data-theme="dark"] {
  --theme-toggler-color-bg: var(--color-bg-lighter);
  --theme-toggler-position: 0;
}

.theme-toggler {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xs);

  height: var(--theme-toggler-height);
  position: relative;

  background: var(--theme-toggler-color-bg);
  border-radius: var(--radius-lg);
  cursor: pointer;

  &>* {
    flex: 1;
  }

  &__toggle {
    aspect-ratio: 1;
    background: var(--color-bg);
    backdrop-filter: blur(3px);
    border: 3px solid var(--theme-toggler-color-bg);
    border-radius: var(--radius-full);

    height: 100%;
    position: absolute;
    top: 0;
    left: var(--theme-toggler-position);
    transition: var(--transition-all);
  }
}
</style>
