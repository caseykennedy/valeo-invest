<script lang="ts" setup>
useHead({
  title: 'Opportunity • Valeo',
})

const teamData = [
  {
    name: 'Christian Goodell',
    title: 'Founder & CEO',
    bio: 'Christian is an innovative, proven entrepreneur who has applied his business acumen to the transformation of commerce.',
    linkedin: 'https://www.linkedin.com/in/christian-goodell/',
  },
  {
    name: 'Roy Cammarano',
    title: 'President',
    bio: 'Roy is a seasoned career President and CEO who has served on the Board of Directors of 5 Inc. 500 companies.',
    linkedin: 'https://www.linkedin.com/in/roy-cammarano-a441b7149/',
  },
  {
    name: 'Irene Katzela',
    title: 'CTO',
    bio: 'Irene is one of Canada\'s leading systems experts, and a phenomenal tech team builder and leader.',
    linkedin: 'https://www.linkedin.com/in/irenekatzela/',
  },
  {
    name: 'Anouk Pinchetti',
    title: 'Currency Design Specialist',
    bio: 'Anouk is a well-recognized expert in currency design in Australia.',
    linkedin: 'https://www.linkedin.com/in/anouk-pinchetti-076966/',
  },
  {
    name: 'Branden Spikes',
    title: 'IT and Security Systems Architect',
    bio: 'Branden built the IT and security systems for PayPal, Tesla and SpaceX.',
    linkedin: 'https://www.linkedin.com/in/brandenspikes/',
  },
  {
    name: 'Matthew Walker',
    title: 'Olsen Law Firm Legal Team',
    bio: 'Olsen drafted the legislative frameworks for digital assets for the State of Wyoming.',
    linkedin: 'https://www.linkedin.com/in/matthew-walker-wyo/',
  },
]
</script>

<template>
  <div class="opportunity-page">
    <PageTitle>
      <template #title>
        Opportunity
      </template>
      <template #tagline>
        <span style="color: var(--color-success-darker)">How we get there</span>
      </template>
      <template #figure>
        <ArtEqual fill="--color-success-darker" class="fig__equal" />
      </template>
    </PageTitle>

    <Section class="intro">
      <h2>Decentralized, resilient currency.</h2>
    </Section>

    <Section style="padding-top: 0">
      <Collapse>
        <template #icon>
          <ArtRoadmap />
        </template>
        <template #title>
          Roadmap
        </template>
        <template #sub-title />
        <template #content>
          <v-timeline align="start">
            <v-timeline-item dot-color="var(--color-success-dark)">
              <p>
                <strong>Now</strong>
              </p>
              <br>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>Valeo/ETH Liquidity Pool (Anchor Pool of DEX)</p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Anchor Marketplace Vendor and/or POS Partner
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Ballast Fund
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="var(--color-success-dark)">
              <p>
                <strong>6 months</strong>
              </p>
              <br>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Valeo Marketplace Buildout
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Vendors
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  POS Partners
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Affiliates
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="var(--color-success-dark)">
              <p>
                <strong>12 months</strong>
              </p>
              <br>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Brand Awareness Campaign
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Valeo Marketplace Expansion
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="var(--color-success-dark)">
              <p>
                <strong>18 months</strong>
              </p>
              <br>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Full DEX Launch
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="var(--color-text-light)">
              <div>
                <p>
                  Valeo Labs
                </p>
                <br>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="var(--color-success-dark)">
              <p>
                <strong>24 months</strong>
              </p>
            </v-timeline-item>
          </v-timeline>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtRevenue />
        </template>
        <template #title>
          Revenue
        </template>
        <template #sub-title />
        <template #content>
          <p class="padding-bottom-xxl">
            Our financial model builds both company asset value and cashflow steadily over 5 years, creating a solid and
            lasting company with a large, high-value network.
          </p>
          <div class="section__layout">
            <div class="section__title">
              <h3>
                We build asset value two ways:
              </h3>
            </div>
            <div class="section__content">
              <ul>
                <li>
                  <strong>Sales of Valeo</strong>
                  <p class="margin-top-sm">
                    Proceeds from sales of the currency create immediate and expanding asset value, which we'll hold in
                    the
                    form
                    of protocol-owned liquidity, ensuring both a fully-collateralized currency and a large asset base
                  </p>
                </li>
                <li>
                  <strong>Network effects</strong>
                  <p class="margin-top-sm">
                    Our business model is based on creating a large network of Valeo customers, which becomes a
                    significant—and
                    perhaps the most important—company asset
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="section__layout margin-top-xxxxl">
            <div class="section__title">
              <h3>
                We create cash flow eight ways:
              </h3>
            </div>
            <div class="section__content">
              <ul>
                <li>Swap fees</li>
                <li>Transaction fees</li>
                <li>POS revenue split</li>
                <li>Retail store markup</li>
                <li>Marketplace vendor fees</li>
                <li>Affiliate revenue</li>
                <li>Market gains from our protocol-owned liquidity</li>
                <li>Ballast Fund portfolio income</li>
              </ul>
            </div>
          </div>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtApex />
        </template>
        <template #title>
          Trigger point
        </template>
        <template #sub-title />
        <template #content>
          <div class="section__layout">
            <div class="section__title">
              <h3>
                Not tomorrow, but soon, there will come a day when the holders of dollar-pegged stablecoins will realize
                that
                pegging to the dollar is losing money.
              </h3>
            </div>
            <div class="section__content">
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
                <mark>This is how Valeo becomes money for everyone.</mark>
              </p>
            </div>
          </div>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtTeam />
        </template>
        <template #title>
          Team
        </template>
        <template #sub-title />
        <template #content>
          <div class="">
            <h2>
              Team
            </h2>
            <p class="text-md">
              Our global team is outstanding; a complementary mix of vision, drive,
              technical skill and business acumen. The team is ideally suited for this project, and we’ve already
              built a lot of this project together. In doing so, we've also nurtured and developed a unique and
              compelling company culture.
            </p>
          </div>

          <div class="team">
            <div v-for="{ name, title, bio, linkedin } in teamData" :key="name" class="team__person">
              <div class="team__person__avatar">
                <img :src="`/images/team/${name.toLowerCase().replace(' ', '-')}.jpg`" :alt="name">
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
                <NuxtLink :to="linkedin" target="_blank" rel="noopener noreferrer">
                  <!-- <span>
                    <ArrowRight width="14px" />
                  </span> -->
                  LinkedIn
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </Collapse>
    </Section>

    <ContactCta bg="--color-bg-dark">
      <template #heading>
        <h2>
          Let's connect.
        </h2>
      </template>
    </ContactCta>
  </div>

  <PrevNext prev-to="/market">
    <template #prev>
      Market
    </template>
  </PrevNext>
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
  .fig__equal {
    width: 75px;

    @include breakpoint(sm) {
      width: 120px;
    }

    @include breakpoint(md) {
      width: 150px;
    }
  }

  .timeline-heading {
    background: var(--color-bg-dark);
    border-radius: var(--radius-xs);
    padding: var(--space-sm);
    display: inline-block;
  }

  .roadmap-bg {
    background-color: var(--roadmap-bg);
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

      ul {
        list-style: none;
        list-style-position: inside;

        li {
          border-bottom: var(--border);
          font-size: var(--text-base-size);
          padding-bottom: var(--space-lg);

          &:not(:first-child) {
            padding-top: var(--space-lg);
          }

          &::before {
            content: "\2022";
            color: var(--color-success-darker);
            font-weight: bold;
            display: inline-block;
            width: 1em;
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
        background: var(--color-white);
        border-radius: var(--radius-full);
        clip-path: circle(50%);
        filter: grayscale(100%);

        color: var(--color-text-light);
        text-align: center;
      }

      &__meta {
        &__name {
          color: var(--color-text);

          strong {
            color: var(--color-success-dark);
          }
        }

        a {
          text-decoration: underline;
          color: var(--color-text);

          &:hover {
            text-decoration: none;
          }

          span {
            margin-right: var(--space-sm);
          }
        }

        &__bio {
          color: var(--color-text-light);
        }
      }
    }
  }
}
</style>
