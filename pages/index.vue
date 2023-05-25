<script lang="ts" setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

useHead({
  title: 'Valeo',
})

const { isDark, toggle } = useDark()
</script>

<template>
  <div class="home-page">
    <PageTitle>
      <template #title>
        Valeo
      </template>
      <template #tagline>
        Equilibrium for a new economy
      </template>
    </PageTitle>

    <!-- <Section :border-bottom="true" class="hero">
      <h1 class="hero__title">
        <span class="hero__title__symbol">
          <ValeoSymbol />
        </span> <span class="text-arial">Valeo</span>
        <br>
        <div class="hero__title--muted">
          Equilibrium for a new economy
        </div>
      </h1>
      <div class="hero__decorator">
        <ArtHeroGrid />
      </div>
    </Section> -->

    <Section>
      <div class="media">
        <div>
          <h2>Our challenge</h2>
          <div class="media__video">
            <LiteYouTubeEmbed id="IsmzMnmrv8s" title="Valeo Intro" />
          </div>
        </div>
        <div>
          <h2>Our solution</h2>
          <div class="media__audio">
            <iframe
              width="100%" height="120"
              :src="`https://www.mixcloud.com/widget/iframe/?hide_cover=1&${isDark ? 'dark' : 'light'}=1&hide_artwork=1&feed=%2FOriginTrustFoundation%2Fvaleo-deck-narration-audio%2F`"
              frameborder="0"
            />
          </div>
        </div>
      </div>
    </Section>

    <SectionHighlight :reverse="true">
      <template #figure>
        <div class="highlight__stat">
          <ValeoSymbol width="100px" />
        </div>
      </template>
      <template #content>
        <div class="note">
          <div class="note__message">
            <p>
              <strong>How can we transition into a global society that puts what really matters in life—true value—front
                and center?</strong>
            </p>

            <p>
              <strong>By creating an economy that circulates—and is tied to, and based on, and strengthens—what creates
                real wealth.</strong>
            </p>

            <p>
              That’s an economy that works for all, restores our capacity to focus on what actually matters in life, and
              allows
              us to care for our fellow inhabitants on this planet.
            </p>
            <p>
              Thank you for your attention.
            </p>

            <div class="note__signature">
              <div>
                <p>
                  Christian Goodell
                  <br>
                  Founder &amp; CEO
                </p>
              </div>
              <div>
                <img src="~/assets/images/fig__sig.png" style="max-width: 140px" alt="Christian Goodell Signature">
              </div>
            </div>
          </div>
        </div>
      </template>
    </SectionHighlight>

    <ContactCta>
      <template #heading>
        <h2>
          Safe passage to calmer waters.
        </h2>
      </template>
    </ContactCta>
  </div>

  <PrevNext next-to="/ecosystem">
    <template #next>
      Ecosystem
    </template>
  </PrevNext>
</template>

<style lang="scss">
@mixin rowLayout {
  margin: 0 auto;
  padding-right: var(--gutter);
  padding-left: var(--gutter);
  max-width: var(--site-width-max);
  width: 100%;
}

.home-page {
  .hero {
    overflow: hidden;
    position: relative;
    z-index: 0;
    padding-top: calc(var(--space-xxxl) * 2);

    @include breakpoint(sm) {
      padding-top: calc(var(--space-xxxl) * 2);
    }

    @include breakpoint(lg) {
      padding-top: calc(var(--space-xxxl) * 2.5);
    }

    &__title {
      max-width: 34ch;

      &--muted {
        color: var(--color-text-lighter);
      }

      &__symbol {
        svg {
          width: 23px;

          @include breakpoint(md) {
            width: 34px;
          }
        }
      }
    }

    &__decorator {
      position: absolute;
      top: -1%;
      right: -26%;
      width: 440px;
      /* height: 100%; */
      pointer-events: none;
      z-index: -1;

      @include breakpoint(sm) {
        top: -7%;
        right: -3%;
        width: 620px;
      }

      @include breakpoint(lg) {
        top: -14%;
        width: 780px;
      }

      svg {
        /* width:; */
      }
    }
  }

  .media {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--gutter);

    @include breakpoint(md) {
      flex-flow: row nowrap;
    }

    &>* {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
    }

    &__video {}

    &__audio {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border: var(--border);
      border-radius: var(--radius-xs);
      padding: var(--gutter-sm);
    }
  }

  .note {
    &__message {
      @include breakpoint(lg) {
        padding: 0 var(--gutter);
      }
    }

    &__signature {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      /* gap: var(--space-sm); */
      width: 100%;
    }
  }
}
</style>
