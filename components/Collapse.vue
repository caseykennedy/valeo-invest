<script>
export default {
  name: 'CollapseToggle',
  data() {
    return {
      show: false,
    }
  },
  computed: {
    toggleClasses() {
      return {
        'collapse--open': this.show,
      }
    },
  },
  methods: {
    toggleDropdown() {
      this.show = !this.show
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    leave(el) {
      el.style.height = '0'
    },
  },
}
</script>

<template>
  <div class="collapse" :class="toggleClasses">
    <div class="collapse__toggle" @click.prevent="toggleDropdown">
      <div class="collapse__toggle__layout">
        <div class="collapse__toggle__icon">
          <slot name="icon" />
        </div>
        <div class="collapse__toggle__title">
          <h3>
            <strong>
              <slot name="title" />
            </strong>
          </h3>
          <p>
            <slot name="sub-title" />
          </p>
        </div>
      </div>
      <div class="collapse__carat">
        <Chevron />
      </div>
    </div>

    <transition
      enter-active-class="enter-active" leave-active-class="leave-active" name="accordion"
      @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave"
    >
      <div v-show="show" class="collapse__content">
        <div class="collapse__content__layout">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.collapse {
  --toggle-icon-size: 44px;

  @include breakpoint(sm) {
    --toggle-icon-size: 125px;
  }

  display: flex;
  flex-flow: column nowrap;
  border-bottom: var(--border);
  transition: background-color var(--transition);

  /* &:not(:first-child) {
    margin-top: var(--space-md);
  } */

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gutter);
    padding: var(--space-lg) 0;

    border-radius: var(--radius-xs);
    cursor: pointer;

    &:hover {
      background: var(--color-bg-dark);
    }

    &__layout {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      gap: var(--gutter);
      flex: 1;

      @include breakpoint(sm) {
        flex-flow: row nowrap;
        align-items: center;
        gap: 0;
      }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: var(--toggle-icon-size);
      width: var(--toggle-icon-size);

      @include breakpoint(sm) {
        justify-content: center;
      }
    }

    &__title {
      flex: 1;

      h3 {
        margin-bottom: 0;
      }
    }
  }

  &__carat {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--toggle-icon-size);
    width: var(--toggle-icon-size);

    svg {
      transform: rotate(0deg);
      transition: transform var(--transition);
    }
  }

  &--open {
    .collapse__toggle {
        background: var(--color-bg-dark);
    }

    .collapse__carat {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  &__content {
    transition: 150ms ease-out;

    @include breakpoint(sm) {
      padding-right: var(--toggle-icon-size);
      padding-left: var(--toggle-icon-size);
    }

    &__layout {
      padding: var(--gutter) 0;
      /* padding: var(--gutter) 0; */
    }
  }

  .enter-active,
  .leave-active {
    overflow: hidden;
    transition: height var(--transition);
  }
}
</style>
