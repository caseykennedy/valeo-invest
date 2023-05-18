<template>
  <div class="app">
    <div class="sticky">
      <Header />
      <Navigation />
    </div>
    <main>
      <div class="main__layout">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.sticky {
  position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
}

main {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  width: 100%;

  .main__layout {
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    max-height: 100%;
    /* max-width: var(--site-width-max); */
    width: 100%;
    position: relative;
    z-index: 1;
  }
}

/* main {
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-height: 100%;
  max-width: var(--site-width-max);
  width: 100%;
  position: relative;
  z-index: 1;
} */
</style>
