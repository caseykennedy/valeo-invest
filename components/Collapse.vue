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
        <div>
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.collapse {
  --toggle-icon-size: 30px;

  @include breakpoint(sm) {
    --toggle-icon-size: 100px;
  }

  display: flex;
  flex-flow: column nowrap;
  border-bottom: var(--border);
  border-color: var(--color-border-light);
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
    cursor: pointer;

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
    }
  }

  &__carat {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      transform: rotate(-90deg);
      transition: transform var(--transition);
    }
  }

  &__content {
    transition: 150ms ease-out;

    /* border-top: var(--border); */
    /* border-color: var(--color-border-light); */

    @include breakpoint(sm) {
      padding-right: var(--toggle-icon-size);
      padding-left: var(--toggle-icon-size);
    }

    div {
      padding: 0 0 var(--gutter);
      /* padding: var(--gutter) 0; */
    }
  }

  &--open {
    .collapse__carat {
      svg {
        transform: rotate(0deg);
      }
    }
  }

  .enter-active,
  .leave-active {
    overflow: hidden;
    transition: height var(--transition);
  }
}
</style>
