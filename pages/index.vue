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
        &#42846; <span class="text-arial">Valeo</span>
        <br>
        <div class="hero__title--muted">
          Equilibrium for a new economy
        </div>
      </h1>
    </Section>

    <Section>
      <div class="media">
        <div>
          <p>1. Watch the intro</p>
          <div class="media__video">
            <LiteYouTubeEmbed id="IsmzMnmrv8s" title="Valeo Intro" />
          </div>
        </div>
        <div>
          <p>2. Listen to the presentation</p>
          <div class="media__audio">
            <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&hide_artwork=1&feed=%2FOriginTrustFoundation%2Fvaleo-deck-narration-audio%2F" frameborder="0" />
          </div>
        </div>
      </div>
    </Section>

    <Section bg="--color-bg-highlight">
      <div class="note">
        <div class="note__message">
          <p>
            <strong>How can we transition into a global society that puts what really matters in life—true value—front and
              center?
              By
              creating an economy that circulates—and is tied to, and based on, and strengthens—what creates real
              wealth.</strong>
          </p>

          <p>
            That’s an economy that works for all, restores our capacity to focus on what actually matters in life, and
            allows
            us to care for our fellow inhabitants on this planet. As we’ve all recently been reminded, to preserve our
            wealth,
            we must not only grow; we must prevent loss.
          </p>

          <p>
            That’s where Valeo comes in.
          </p>

          <div class="note__signature">
            <div>
              <p>
                Thank you for your attention.
                <br>
                —Christian Goodell
              </p>
            </div>
            <div>
              <ArtSignature />
            </div>
          </div>
        </div>
        <div class="note__logo">
          <div class="note__logo__badge">
            <ValeoSymbol width="100px" />
          </div>
        </div>
      </div>
    </Section>

    <Section class="footnote">
      <p class="text-xl">
        Safe passage to calmer waters.
      </p>
    </Section>
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
    padding-top: calc(var(--space-xxxl) * 2);

    &__title {
      &--muted {
        color: var(--color-text-lighter);
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

    &__video {

    }

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
    display: flex;
    flex-flow: column-reverse nowrap;
    gap: var(--gutter);

    @include breakpoint(sm) {
      flex-flow: row nowrap;
    }

    &>* {
      flex: 1;
      display: flex;
      align-items: center;
      /* padding: var(--space-xxl) 0; */

      @include breakpoint(sm) {
        padding: var(--space-xxl) calc(var(--space-lg) * 1);
      }

      @include breakpoint(md) {
        padding: var(--space-xxl) calc(var(--space-xxxl) * 1);
      }

      @include breakpoint(lg) {
        padding: var(--space-xxl) calc(var(--space-xxxxl) * 1);
      }
    }

    &__message {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      p {
        width: 100%;
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

    &__logo {
      flex: 1;
      font-size: var(--text-xxxxl);

      @include breakpoint(md) {
        flex: 1;
      }

      &__badge {
        display: flex;
        align-items: center;
        justify-content: center;

        aspect-ratio: 1 / 1;
        border: var(--border);
        border-color: var(--color-border);
        border-width: 2px;
        border-radius: var(--radius-full);
        color: var(--color-text);
        /* padding: var(--space-xl); */
        width: 100%;
      }
    }
  }

  .footnote {
    padding: var(--text-xxxl) 0;
  }
}
</style>
