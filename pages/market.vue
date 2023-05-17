<script lang="ts" setup>
useHead({
  title: 'Market • Valeo',
})
</script>

<template>
  <div class="market-page">
    <PageTitle>
      <template #title>
        Market
      </template>
      <template #tagline>
        Beyond stable
      </template>
    </PageTitle>

    <Section>
      <div class="market-page__section__title">
        <h2>Valeo takes a deliberate phased-in approach to three main market sectors:</h2>
      </div>

      <Collapse>
        <template #icon>
          <ValeoSymbol />
        </template>
        <template #title>
          Stablecoin market
        </template>
        <template #sub-title />
        <template #content>
          <p class="text-md margin-top-xl">
            Because Valeo goes beyond stability and serves as a constant, the most immediately addressable market for our
            currency is the stablecoin market.
          </p>

          <SectionHighlight class="margin-top-xxl margin-bottom-xxl">
            <template #figure>
              <div class="highlight__stat">
                <p class="text-xxl">
                  $150B
                </p>
                <p>
                  Total Current<br>Stablecoin Market
                </p>
              </div>
            </template>
            <template #content>
              <h2>
                The stablecoin market cap is up 25x in 3 years, from $6B at the start of 2020.
              </h2>
              <p>
                Frax, a recent competitor, has achieved a market cap of nearly $3B, or 2 percent market penetration in the
                same
                time period. We anticipate we could achieve a similar initial market share—a $3B market cap—in 12 to 24
                months
                following our launch.
              </p>
            </template>
          </SectionHighlight>

          <p><strong>Current stablecoin users:</strong></p>
          <ul>
            <li>Are losing 1 percent per month to inflation, and they know it</li>
            <li>Are unsure of the future of the US dollar (which has been on a losing streak for 100 years)</li>
            <li>Mistrust stablecoins that are not transparent</li>
            <li>Are increasingly risk-averse, and move around in markets accordingly</li>
            <li>Are not brand loyal to any particular digital currency</li>
          </ul>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtRemitMarket width="56" />
        </template>
        <template #title>
          Cross-border remittance market
        </template>
        <template #sub-title />
        <template #content>
          <p>
            Families working abroad need a safe,
            speedy, affordable way to send currency internationally. Having the most
            reliable currency available positions us well to support them. The remittance
            market generated $600B in 2022 and is expected to double by 2030.
          </p>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtTag width="56" />
        </template>
        <template #title>
          Retail commerce market
        </template>
        <template #sub-title />
        <template #content>
          <p>
            For retail, we’ll establish strategic partnerships in the payments space: Apple Pay, Google Pay, Square,
            Strike, Coinpayments, Bitpay, PayPal, Stripe and potentially Telegram and Twitter. We’ll focus on design to
            integrate with them for ease of use as the rails develop for retail business adoption.
          </p>

          <p>
            We’re not just talking about large retailers, either; small business powers the global economy. Small- and
            medium-sized businesses issue 99.7% of all paychecks in the US, and account for 44% of domestic GDP. In
            emerging markets, SMEs generate 70% of all employment.
          </p>

          <p>
            Once the rails are in place for small businesses to accept Valeo, the network effects will compound adoption.
          </p>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtAdoptionCurve width="56" />
        </template>
        <template #title>
          Adoption curve
        </template>
        <template #sub-title />
        <template #content>
          <div class="ecosystem-page__collapse__split">
            <div>
              <p>
                For digital currency systems, we’re past the early adopters and well into the early majority phase, with
                forecasts predicting half the world on mobile wallets by 2024.
              </p>
            </div>
            <div class="adoption-curve">
              <div>
                <ArtAdoptionCurve width="200px" />
              </div>
            </div>
          </div>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtGraph width="56" />
        </template>
        <template #title>
          Competition
        </template>
        <template #sub-title />
        <template #content>
          <p>
            The primary function of Valeo is to preserve value while circulating value through different systems. In a
            global economy, people need the ability to move fluidly among different digital currencies and between digital
            currencies and fiat currencies. At present, this is difficult. If the solution is pegged to a volatile dollar
            or other currency peg, it’s expensive, and if one uses an exchange or a bank, it’s increasingly risky.
          </p>

          <p>
            Our closest competition from an ecosystem perspective is probably Binance. We share the aspects of a native
            currency and an exchange, but not the other components, plus they’re centralized, so it’s a bit of an apples
            and oranges comparison. Another potential competitor, though we’re already in conversation with them, is
            Holochain; we see ourselves as a bridge to and/or an integration with their solution, which is a longer play.
          </p>

          <p>
            In the stablecoin and remittance markets, our key competitors are utilities like RSR, Nuon, Angle and GSU, as
            well as a few fiat stablecoins like USDC and FRAX. None of these solutions applies a holistic approach like
            Valeo does, at least not yet. We’re an ecosystem, built for collaboration and integration. And protecting our
            participants is our prime directive.
          </p>

          <p>
            We see Circle’s stablecoin, USDC, as the likely de facto digital dollar. USDC is actually an interesting
            forerunner for us in many ways; in the end, though, USDC is more of a proxy for us than a competitor, because
            it’s pegged to the dollar. We’re more than happy to hang out behind Circle until the moment people realize
            fiscal policies and/or market manipulations are forcing the dollar to fall, and we’ll be right there to
            welcome them to Valeo.
          </p>

          <p>
            The stablecoin and remittance markets are our first focus; retail commerce follows, concurrent with the
            evolution of ubiquitous payment rails.
          </p>

          <p>
            The online marketplace space has some big players in it: Amazon, Ebay, Etsy… we’re more like Etsy than Amazon
            or Ebay, and we don’t need to be anywhere near as big to achieve our goals. While the big players would appear
            to own the whole market, and they have decades of traction, we see a clear space to fill. We are to Amazon
            what Wild Oats (now Whole Foods) once was to the big grocery chains—the conscious, healthy market.
          </p>
        </template>
      </Collapse>
    </Section>
  </div>
</template>

<style lang="scss" scoped>
.market-page {
  .intro {
    &__title {}
  }

  &__section {
    padding-top: var(--space-xxxl);
    padding-bottom: var(--space-xxxl);

    &__title {
      margin-bottom: var(--space-xxl);
      max-width: 80ch;
    }
  }

  .adoption-curve {
    display: flex;
    align-items: center;
    justify-content: center;
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

        border-top: var(--border);

        li {
          border-bottom: var(--border);
          font-size: var(--text-base-size);
          padding-top: var(--space-lg);
          padding-bottom: var(--space-lg);
        }
      }
    }
  }

  .feature {
    &__row {
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

      &__figure {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: var(--gutter);
        padding: var(--space-xxxxl) var(--gutter);

        border: var(--border);
        border-radius: var(--radius-xs);
      }
    }
  }
}
</style>
