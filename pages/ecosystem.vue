<script lang="ts" setup>
useHead({
  title: 'ecosystem • Valeo',
})

// const data = [
//   {
//     title: '',
//     content: '',
//     icon: 'icon',
//   },
// ]
</script>

<template>
  <div class="ecosystem-page">
    <PageTitle>
      <template #title>
        Ecosystem
      </template>
      <template #tagline>
        Money for the 21st century
      </template>
    </PageTitle>

    <Section class="ecosystem-page__section">
      <div class="ecosystem-page__section__title">
        <h2>Six components together create a healthy circulatory system for value:</h2>
      </div>

      <Collapse>
        <template #icon>
          <ValeoSymbol />
        </template>
        <template #title>
          A digital currency
        </template>
        <template #sub-title>
          Valeo offers a steadfast, reliable, functional currency for a value- and values-based economy.
        </template>
        <template #content>
          <p>
            Valeo functions as a constant. It doesn’t lose purchasing power over time like fiat currencies do, and its
            exposure to the risks and volatility of markets is reduced to the absolute minimum.
          </p>
          <p>
            Unlike the majority of stablecoins, which are pegged to the dollar or other fiat currencies, Valeo is a
            digital valuation of commodities, pegged to real-world value: a basket of actual human needs. This mechanism
            solves the challenges posed by fiscal policy and market manipulation, because essential human needs rarely
            change, even if everything else does.
          </p>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <Dex />
        </template>
        <template #title>
          A decentralized exchange (DEX)
        </template>
        <template #sub-title>
          Our fully transparent, over-collateralized DEX operates on a set of hard rules rather than human error (or
          greed).
        </template>
        <template #content>
          <div class="ecosystem-page__collapse__split">
            <div>
              <p>
                It’s high time for a bulletproof exchange, one that’s impervious to the many pitfalls that plague the
                exchange
                space. Our decentralized exchange operates on a set of hard rules, rather than on governance or in-house
                decision making.
              </p>

              <p>
                Rule number one is that all of our protocol-owned liquidity stays on the exchange in the liquidity pools
                and
                cannot be removed or reinvested. Our hard rules are well-defined, transparent operational parameters that
                account for and eliminate the hazards of external market conditions as well as the potential for internal
                misuse, misappropriation, or obfuscation of funds.
              </p>

              <p>
                It
                <span class="font-bold font-italic">
                  is
                </span> possible to create a perfectly healthy, trustworthy, reliable currency system. The Valeo Exchange
                is
                a
                key part of how we do it.
              </p>

              <p>
                Our DEX has single-sided liquidity. Valeo provides the liquidity for each currency we select to include in
                the DEX, and stakers of those currencies provide matching liquidity for Valeo. At the same time, this
                backing
                from stakers overcollateralizes the currency.
              </p>

              <p>
                Full collateralization by our protocol-owned liquidity means that we maintain the ability to assure the
                peg,
                as we automatically buy back any amount of Valeo required to do so. And the status of our collateral
                holdings
                is transparent on the exchange in real time.
              </p>
            </div>
            <div>
              <img src="~/assets/images/fig__dex.png" alt="alt">
            </div>
          </div>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <Balast />
        </template>
        <template #title>
          A ballast fund
        </template>
        <template #sub-title>
          Our ballast fund assures invulnerability to financial panics and provides a buffer to ensure the Valeo ecosystem
          remains balanced and protected.
        </template>
        <template #content>
          <p>
            <strong>Ballast (noun):</strong> <span class="font-italic">heavy material, such as gravel, sand, iron, or lead, placed low in a vessel
              to improve its
              stability.</span>
          </p>

          <p>
            Our ballast fund self-insures the ecosystem against financial panics or runs on banks. Valeo’s entire
            ecosystem is engineered to be immune to being gamed, mismanaged, undermined or taken down.
          </p>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <Marketplace />
        </template>
        <template #title>
          A marketplace
        </template>
        <template #sub-title>
          Our ecosystem includes a marketplace where the Valeo currency can be spent on real-world goods and services.
        </template>
        <template #content>
          <p>
            <strong>We feel it is essential to have a place to spend your Valeo on real things of real value.</strong>
          </p>

          <p>
            The Valeo Store of Value is an online marketplace to do precisely that. Our carefully-curated selection of
            essentials initially includes billpay services, food, energy sources, and precious metals. It’s made up of our
            own store and select other stores. Over time, it will become an expanding community of small- and medium-sized
            merchants, assuring that there will be many places circulating the Valeo currency.
          </p>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtMobileApp />
        </template>
        <template #title>
          A mobile app
        </template>
        <template #sub-title>
          The Valeo app simplifies the circulation of value, namely: acquisition, exchange, sending, receiving and
          spending the currency.
        </template>
        <template #content>
          <div class="ecosystem-page__collapse__split">
            <div>
              <p>
                At the center of the Valeo ecosystem is the Valeo app—a seamless, intuitive, easy-to-use system of
                integrated
                purchase, exchange, merchant services and point of sale (POS) services.
              </p>

              <p>
                For launch, we’ll partner with money service business and POS partners, and we’re securing anchors for the
                marketplace who will accept Valeo from day one. As we grow, we’ll evaluate where to add partnerships
                and/or
                build our own solutions.
              </p>
            </div>
            <div>
              <img src="~/assets/images/fig__app-mock.png" alt="mobile app mockup">
            </div>
          </div>
        </template>
      </Collapse>

      <Collapse>
        <template #icon>
          <ArtExperience />
        </template>
        <template #title>
          A stellar customer experience
        </template>
        <template #sub-title>
          Ease-of-use and human-to-human support are prioritized for all Valeo clients: savers and spenders, as well as
          our merchants, affiliates, developers, and investors.
        </template>
        <template #content>
          <div class="ecosystem-page__collapse__split">
            <div>
              <p>
                <strong>Ease of use has proven to be a challenge for digital currency thus far, and this is an area of
                  keen focus
                  throughout the Valeo ecosystem.</strong>
              </p>

              <p>
                We’re on a mission to make the user experience for our customers —and our industry—seamless. Digital
                transactions are still clunky. It’s time to simplify. In an AI world, proof-of-human goes both ways; we
                want
                to know there’s a human being on the other side of the interface who actually cares about us.
              </p>

              <p>
                Valeo’s customer support team is 24/7/365, skilled, patient, and responsive.
              </p>
            </div>
            <div>
              <ArtBeforeAfter />
            </div>
          </div>
        </template>
      </Collapse>
    </Section>
  </div>
</template>

<style lang="scss">
.ecosystem-page {
  &__collapse {
    &__split {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      gap: var(--gutter);

      @include breakpoint(md) {
        flex-flow: row nowrap;
      }

      &>* {
        flex: 1;

        &:first-child {
          flex: 1.5;
        }
      }
    }
  }

  &__section {
    padding-top: var(--space-xxxl);
    padding-bottom: var(--space-xxxl);

    &__title {
      margin-bottom: var(--space-xxl);
      max-width: 60ch;
    }
  }
}
</style>
