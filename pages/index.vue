<script lang="ts" setup>
useHead({
  title: 'Valeo',
})
</script>

<template>
  <main class="home-page">
    <Section class="hero">
      <h1 class="hero__title">
        Ꝟ <span class="text-arial">Valeo</span>
        <br>
        <div class="hero__title--muted">
          Equilibrium for a new economy
        </div>
      </h1>

      <div class="hero__intro">
        <div>
          <p>1. Watch the intro</p>
          <div class="hero__intro__media">
            video
          </div>
        </div>
        <div>
          <p>2. Listen to the presentation</p>
          <div class="hero__intro__media">
            audio
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

          <p>
            Thank you for your attention.
            <br>
            —Christian Goodell
          </p>
        </div>
        <div class="note__logo">
          <div class="note__logo__badge">
            Ꝟ
          </div>
        </div>
      </div>
    </Section>

    <section class="footnote">
      <div class="footnote__call">
        <div class="footnote__call__row">
          <p>Safe passage to calmer waters.</p>
        </div>
      </div>

      <div class="footnote__action">
        <div class="footnote__action__row">
          <button href="https://valeo.network" class="btn btn--outline" target="_blank" rel="noopener noreferrer">
            Executive Summary
            <span class="icon icon--sm icon--right">
              <Pdf width="24" />
            </span>
          </button>
          <div class="footnote__action__meta">
            Presentation <span>Q2, 2023</span>
          </div>
        </div>
      </div>
    </section>
  </main>
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
        color: var(--color-text-muted);
      }
    }

    &__intro {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--gutter);

      border-top: var(--border);
      margin-top: var(--gutter);
      padding-top: var(--gutter);

      @include breakpoint(sm) {
        flex-flow: row nowrap;
      }

      &>* {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
      }

      &__media {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-bg-dark);
        border-radius: var(--border-radius);
        padding: var(--space-xxxxl) 0;
      }
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

    &__logo {
      flex: 1;
      font-size: var(--text-xxxxl);

      @include breakpoint(md) {
        flex: 1.25;
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
        color: var(--color-text-light);
        padding: var(--space-xxxxl);
        width: 100%;
      }
    }
  }

  .footnote {

    &__call {
      padding: var(--text-xxxl) 0;
      /* text-align: center; */

      &__row {
        @include rowLayout;
      }

      p {
        font-size: var(--text-xl);
        font-weight: var(--font-weight-bold);
      }
    }

    &__action {
      border-top: var(--border);
      border-color: var(--color-border-light);
      /* background: var(--color-primary-light); */
      /* color: var(--color-bg); */
      padding: var(--gutter-sm) 0;

      &__row {
        @include rowLayout;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--gutter);

        @include breakpoint(xs) {
          flex-flow: row nowrap;
        }
      }

      &__meta {
        span {
          margin-left: var(--space-lg);
        }
      }
    }
  }
}
</style>
