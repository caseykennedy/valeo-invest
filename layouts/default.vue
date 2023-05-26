<template>
  <div class="app">
    <Header />
    <Navigation />
    <main>
      <div class="main__layout">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
  <Modal />
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

/* hide the "scrim", it's pointless */
.v-overlay--active .v-overlay__scrim {
    display: none;
}
/* style the overlay container as required */
.v-overlay--active {
    backdrop-filter: blur(4px);
    background: rgb(0 0 0 / 0.4);
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
