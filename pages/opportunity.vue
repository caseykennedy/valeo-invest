<script lang="ts" setup>
useHead({
  title: 'Opportunity • Valeo',
})

const teamData = [
  {
    name: 'Christian Goodell ',
    title: 'Founder & CEO',
    bio: 'Christian is an innovative, proven entrepreneur who has applied his business acumen to the transformation of commerce.',
  },
  {
    name: 'Roy Cammarano',
    title: 'President',
    bio: 'Roy is a seasoned career President and CEO who has served on the Board of Directors of 5 Inc. 500 companies.',
  },
  {
    name: 'Irene Katzela',
    title: 'CTO',
    bio: 'Irene is one of Canada\'s leading systems experts, and a phenomenal tech team builder and leader.',
  },
  {
    name: 'Anouk Pinchetti',
    title: 'Currency Design Specialist',
    bio: 'Anouk is a well-recognized expert in currency design in Australia.',
  },
  {
    name: 'Branden Spikes',
    title: 'IT and Security Systems Architect',
    bio: 'Branden built the IT and security systems for PayPal, Tesla and SpaceX.',
  },
  {
    name: 'Matthew Walker',
    title: 'Olsen Law Firm Legal Team',
    bio: 'Olsen drafted the legislative frameworks for digital assets for the State of Wyoming.',
  },
]
</script>

<template>
  <div class="opportunity-page">
    <Section class="page-title">
      <h1 class="page-title__title">
        Opportunity
        <br>
        <span class="page-title__title--muted">
          How we get there
        </span>
      </h1>
    </Section>

    <Section class="intro">
      <div class="intro__layout">
        <div>
          <div class="intro__title">
            <h2>Decentralized, resilient currency.</h2>
          </div>
          <div class="intro__content">
            <p>
              Valeo aims to transform the stablecoin market with a secure, transparent, and user-friendly currency that
              maintains purchasing power. Following our roadmap, Valeo will gradually develop a decentralized exchange,
              marketplace, and app, positioning itself as a leading global currency.
            </p>
          </div>
        </div>
        <div class="intro__figure">
          <ArtEqual fill="--color-success-darker" />
        </div>
      </div>
    </Section>

    <!-- <SectionHighlight>
      <template #figure>
        <p>
          <span class="text-md" style="color: var(--color-text)">
            Mobile wallet global users
          </span>
          <br>
          Visualizing the Rise of Digital Payment Adoption
        </p>
        <ArtCircleGraph />
        <p class="highlight__source">
          Source: Juniper Research
        </p>
      </template>
      <template #content>
        <h2>
          The future of currency rests on the rise of digital wallets. TBD
        </h2>
        <p>
          As digital wallets go mainstream, transaction volumes are estimated to reach $9T annually. Online purchases
          and digital commerce will drive this growth.
        </p>
        <p>Implementing our solution, lorem ipsum dolor sit amet consectetur. Porta et aenean amet quis vitae.</p>
      </template>
    </SectionHighlight> -->

    <Section class="roadmap-bg">
      <div class="roadmap">
        <h2>
          Roadmap
        </h2>
        <div class="roadmap__grid">
          <div>
            <p class="roadmap__grid__heading">
              <strong>Today</strong>
            </p>
            <ul>
              <li>Valeo/ETH Liquidity Pool (Anchor Pool of DEX)</li>
              <li>Ballast Fund</li>
              <li>Anchor Marketplace Vendor and/or POS Partner</li>
              <li>Launch Valeo Currency (ETH &amp; BTC for Valeo)</li>
            </ul>
          </div>
          <div>
            <p class="roadmap__grid__heading">
              <strong>6 months</strong>
            </p>
            <ul>
              <li>Valeo Marketplace Buildout</li>
              <li>Vendors</li>
              <li>POS Partners</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <p class="roadmap__grid__heading">
              <strong>12 months</strong>
            </p>
            <ul>
              <li>Brand Awareness Campaign</li>
              <li>Valeo Marketplace Expansion</li>
            </ul>
          </div>
          <div>
            <p class="roadmap__grid__heading">
              <strong>18 months</strong>
            </p>
            <ul>
              <li>Full DEX Launch</li>
              <li>Valeo Labs</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <Collapse>
        <template #icon>
          <ArtRevenue />
        </template>
        <template #title>
          Revenue
        </template>
        <template #sub-title>
          Our financial model builds both company asset value and cashflow steadily over 5 years, creating a solid and
          lasting company with a large, high-value network.
        </template>
        <template #content>
          <div class="section__layout">
            <div class="section__title">
              <h3>
                We build asset value two ways:
              </h3>
            </div>
            <div class="section__content">
              <ol>
                <li>
                  <strong>The first is sales of Valeo.</strong>
                  <p class="margin-top-sm">
                    Proceeds from sales of the currency create immediate and expanding asset value, which we'll hold in
                    the
                    form
                    of protocol-owned liquidity, ensuring both a fully-collateralized currency and a large asset base.
                  </p>
                </li>
                <li>
                  <strong>The second is network effects.</strong>
                  <p class="margin-top-sm">
                    Our business model is based on creating a large network of Valeo customers, which becomes a
                    significant—and
                    perhaps the most important—company asset.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div class="section__layout margin-top-xxxxl">
            <div class="section__title">
              <h3>
                We create cash flow eight ways:
              </h3>
            </div>
            <div class="section__content">
              <ol>
                <li>Swap fees</li>
                <li>Transaction fees</li>
                <li>POS revenue split</li>
                <li>Retail store markup</li>
                <li>Marketplace vendor fees</li>
                <li>Affiliate revenue</li>
                <li>Market gains from our protocol-owned liquidity</li>
                <li>Ballast Fund portfolio income</li>
              </ol>
            </div>
          </div>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <Dex />
        </template>
        <template #title>
          Trigger point
        </template>
        <template #sub-title>
          This is how Valeo becomes money for everyone.
        </template>
        <template #content>
          <p class="text-md">
            Not tomorrow, but soon, there will come a day when the holders of dollar-pegged stablecoins will realize that
            pegging to the dollar is losing money.
          </p>

          <p>They'll switch to Valeo. <strong>This is our trigger point.</strong> </p>

          <p>
            If we're to be successful in our ultimate goal of exponential growth to a ubiquitously useful global
            currency, that will be when it happens, and we'll be ready.
          </p>

          <p>
            As the dollar and other reserve currencies devalue faster and faster,
            the mainstream will also wake up and switch to Valeo because it
            maintains purchasing power, no matter what the markets bring.
          </p>

          <p>
            This is how Valeo becomes money for everyone.
          </p>
        </template>
      </Collapse>

      <!-- <Collapse>
        <template #icon>
          <ArtCirculate />
        </template>
        <template #title>
          Mission
        </template>
        <template #sub-title>
          Real and lasting wealth for us all.
        </template>
        <template #content>
          <p class="text-md">
            What AOL was to Web 1,<br>
            what Facebook was to Web 2,<br>
            it's time to build for Web 3.<br>
          </p>
        </template>
      </Collapse> -->
    </Section>

    <!-- <Section>
      <div class="section__layout">
        <div class="section__title">
          <h2>
            Revenue
          </h2>
        </div>
        <div class="section__content">
          <p class="text-md">
            Our financial model builds both company asset value and cashflow steadily over 5 years, creating a solid and
            lasting company with a large, high-value network.
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div class="section__layout">
        <div class="section__title">
          <h3>
            We build asset value two ways:
          </h3>
        </div>
        <div class="section__content">
          <ol>
            <li>
              <strong>The first is sales of Valeo.</strong>
              <p class="margin-top-sm">
                Proceeds from sales of the currency create immediate and expanding asset value, which we'll hold in the
                form
                of protocol-owned liquidity, ensuring both a fully-collateralized currency and a large asset base.
              </p>
            </li>
            <li>
              <strong>The second is network effects.</strong>
              <p class="margin-top-sm">
                Our business model is based on creating a large network of Valeo customers, which becomes a
                significant—and
                perhaps the most important—company asset.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Section>

    <Section>
      <div class="section__layout">
        <div class="section__title">
          <h3>
            We create cash flow eight ways:
          </h3>
        </div>
        <div class="section__content">
          <ol>
            <li>Swap fees</li>
            <li>Transaction fees</li>
            <li>POS revenue split</li>
            <li>Retail store markup</li>
            <li>Marketplace vendor fees</li>
            <li>Affiliate revenue</li>
            <li>Market gains from our protocol-owned liquidity</li>
            <li>Ballast Fund portfolio income</li>
          </ol>
        </div>
      </div>
    </Section> -->

    <!-- <Section :border-top="true">
      <div class="section__layout">
        <div class="section__title">
          <h2>
            Trigger point
          </h2>
        </div>
        <div class="section__content">
          <p class="text-md">
            Not tomorrow, but soon, there will come a day when the holders of dollar-pegged stablecoins will realize that
            pegging to the dollar is losing money.
          </p>

          <p>They'll switch to Valeo. <strong>This is our trigger point.</strong> </p>

          <p>
            If we're to be successful in our ultimate goal of exponential growth to a ubiquitously useful global
            currency, that will be when it happens, and we'll be ready.
          </p>

          <p>
            As the dollar and other reserve currencies devalue faster and faster,
            the mainstream will also wake up and switch to Valeo because it
            maintains purchasing power, no matter what the markets bring.
          </p>

          <p>
            This is how Valeo becomes money for everyone.
          </p>
        </div>
      </div>
    </Section> -->

    <SectionHighlight :reverse="true" class="opportunity-page__mission">
      <template #figure>
        <div style="margin-left: auto">
          <ArtCirculate />
        </div>
      </template>
      <template #content>
        <h2 class="margin-bottom-xxxl">
          Mission
        </h2>
        <p class="text-xl" style="max-width: 30ch;">
          What AOL was to Web 1,
          what Facebook was to Web 2,
          it's time to build for Web 3.
        </p>
        <p class="margin-top-xxxxl">
          <mark>Real and lasting wealth for us all.</mark>
        </p>
      </template>
    </SectionHighlight>

    <Section>
      <div class="">
        <h2>
          Team
        </h2>
        <p class="text-md">
          Our global team is outstanding; a complementary mix of vision, drive,
          technical skill and business acumen. The team is ideal for this project and we've already built a lot
          together. In doing so, we've also nurtured and developed a unique and compelling company culture.
        </p>
      </div>

      <div class="team">
        <div v-for="{ name, title, bio } in teamData" :key="name" class="team__person">
          <div class="team__person__avatar">
            avatar
          </div>
          <div class="team__person__meta">
            <p class="team__person__meta__name">
              <strong>{{ name }}</strong>
              <br>
              {{ title }}
            </p>
            <p class="team__person__meta__bio">
              {{ bio }}
            </p>
          </div>
        </div>
      </div>
    </Section>

    <ContactCta bg="--color-bg-dark">
      <template #heading>
        <h2>
          Let's connect.
        </h2>
      </template>
    </ContactCta>
  </div>
</template>

<style lang="scss">
:root {
  --roadmap-bg: var(--color-bg-dark);
  --roadmap-heading-bg: var(--color-primary-lighter);
  --roadmap-item-bg: var(--color-bg);
}

[data-theme="dark"] {
  --roadmap-bg: var(--color-primary-light);
  --roadmap-heading-bg: var(--color-bg);
  --roadmap-item-bg: var(--color-primary-lighter);
}

.opportunity-page {
.roadmap-bg {
background-color: var(--roadmap-bg);
}

  .page-title {
    border-bottom: var(--border);

    @include breakpoint(md) {
      padding-top: calc(var(--space-xxxl) * 2);
    }

    &__title {
      &--muted {
        color: var(--color-success-darker);
      }
    }
  }

  &__mission {
    svg {
      max-width: 175px;

      @include breakpoint(md) {
        max-width: 275px;
      }
    }
  }

  .highlight {
    &__source {
      border-top: var(--border);
      margin-top: var(--space-md);
      padding-top: var(--space-sm);
    }
  }

  .intro {

    &__layout {
      display: flex;
      flex-flow: column-reverse nowrap;

      @include breakpoint(sm) {
        align-items: center;
        flex-flow: row nowrap;
      }

      &>* {
        flex: 1;
      }
    }

    &__title {}

    &__figure {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      padding: 0 0 var(--space-xxxl);

      @include breakpoint(sm) {
        padding: var(--space-xxxl) 0;
        justify-content: flex-end;
      }
    }
  }

  .section {
    &__layout {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--gutter);

      @include breakpoint(sm) {
        flex-flow: row nowrap;
      }
    }

    &__title {
      flex: 1;
    }

    &__content {
      flex: 1;

      @include breakpoint(sm) {
        flex: 1.5;
      }

      @include breakpoint(md) {
        flex: 1;
      }

      ol {
        list-style: decimal;
        list-style-position: inside;

        li {
          border-bottom: var(--border);
          font-size: var(--text-base-size);
          padding-bottom: var(--space-lg);

          &:not(:first-child) {
            padding-top: var(--space-lg);
          }
        }
      }
    }
  }

  .roadmap {
    &__grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      /* grid-template-rows: repeat(2, 1fr); */
      gap: var(--gutter-sm);
      margin-top: var(--gutter-y);

      @include breakpoint(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include breakpoint(md) {
        grid-template-columns: repeat(4, 1fr);
      }

      &__heading {
        background: var(--roadmap-heading-bg);
        border: var(--border);
        border-radius: var(--radius-xs);
        color: var(--color-white);
        margin-bottom: var(--space-sm);
        padding: var(--space-sm);
      }

      ul {
        list-style: none;

        li {
          background: var(--roadmap-item-bg);
          border: var(--border);
          border-left-width: 4px;
          border-radius: var(--radius-xs);
          padding: var(--space-sm);

          &:not(:last-child) {
            margin-bottom: var(--space-sm);
          }
        }
      }
    }
  }

  .team {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: var(--gutter-y);
    margin-top: var(--space-xxxxl);
    padding-top: var(--space-xxxxl);

    @include breakpoint(xs) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoint(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    &__person {
      &__avatar {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        margin: 0 auto var(--gutter);
        max-width: 310px;
        /* width: 100%; */

        aspect-ratio: 1;
        border: var(--border);
        border-width: 2px;
        border-radius: var(--radius-full);

        color: var(--color-text-light);
        text-align: center;
      }

      &__meta {
        &__bio {
          color: var(--color-text-lighter);
        }
      }
    }
  }
}
</style>
