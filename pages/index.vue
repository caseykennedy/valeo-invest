<script lang="ts" setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

useHead({
  title: 'Valeo',
})
</script>

<template>
  <div class="home-page">
    <Section :border-bottom="true" class="hero">
      <h1 class="hero__title">
        <span class="hero__title__symbol">
          <ValeoSymbol />
        </span> <span class="text-arial">Valeo</span>
        <br>
        <div class="hero__title--muted">
          Equilibrium for a new economy
        </div>
      </h1>
    </Section>

    <Section>
      <div class="media">
        <div>
          <h3>Our challenge</h3>
          <div class="media__video">
            <LiteYouTubeEmbed id="IsmzMnmrv8s" title="Valeo Intro" />
          </div>
        </div>
        <div>
          <h3>Our solution</h3>
          <div class="media__audio">
            <iframe
              width="100%" height="120"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&hide_artwork=1&feed=%2FOriginTrustFoundation%2Fvaleo-deck-narration-audio%2F"
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
              That’s where Valeo comes in.
            </p>

            <div class="note__signature">
              <div>
                <p>
                  Thank you for your attention.
                </p>
                <p>
                  Christian Goodell
                  <br>
                  Founder &amp; CEO
                </p>
              </div>
              <div>
                <img src="~/assets/images/fig__sig.png" style="max-width: 150px" alt="Christian Goodell Signature">
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
    @include breakpoint(md) {
      padding-top: calc(var(--space-xxxl) * 2);
    }

    &__title {
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
  }

  .media {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--gutter);

    @include breakpoint(sm) {
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
