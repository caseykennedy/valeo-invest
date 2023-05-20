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
    <div class="theme-toggler__icon">
      <Sunshine fill="--color-text-lighter" width="16px" />
    </div>
    <div class="theme-toggler__icon">
      <MoonIcon fill="--color-text-lighter" width="14px" />
    </div>
  </button>
</template>

<style lang="scss">
:root {
  --theme-toggler-height: 24px;
  --theme-toggler-width: 50px;
  --theme-toggler-color-bg: var(--color-bg-dark);
  --theme-toggler-position: calc(100% - var(--theme-toggler-height));
}

[data-theme="dark"] {
  --theme-toggler-color-bg: var(--color-border);
  --theme-toggler-position: 0;
}

.theme-toggler {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0;
  padding: 0;
  height: var(--theme-toggler-height);
  width: var(--theme-toggler-width);

  background: var(--theme-toggler-color-bg);
  border-radius: var(--radius-lg);
  cursor: pointer;
  position: relative;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
    height: 16px;
    width: 16px;
  }

  &__toggle {
    aspect-ratio: 1/1;
    background: var(--color-bg);
    backdrop-filter: blur(3px);
    border: 3px solid var(--theme-toggler-color-bg);
    border-radius: var(--radius-full);

    height: var(--theme-toggler-height);
    width: var(--theme-toggler-height);

    position: absolute;
    top: 0;
    left: var(--theme-toggler-position);
    transition: var(--transition-all);
  }
}
</style>
