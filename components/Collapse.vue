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
  --toggle-icon-size: 125px;

  display: flex;
  flex-flow: column nowrap;
  border-bottom: var(--border);
  border-color: var(--color-border-light);
  transition: background-color var(--transition);

  /* &:not(:first-child) {
    margin-top: var(--space-md);
  } */

  &:hover {
    background: var(--color-bg-highlight);
  }

  &__toggle {
    display: flex;
    align-items: center;
    padding: var(--space-md) 0;
    cursor: pointer;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--toggle-icon-size);
      width: var(--toggle-icon-size);
    }

    &__title {
      flex: 1;
    }
  }

  &__content {
    padding-right: var(--toggle-icon-size);
    padding-left: var(--toggle-icon-size);
    transition: 150ms ease-out;

    /* border-top: var(--border); */
    /* border-color: var(--color-border-light); */

    div {
      padding: 0 0 var(--gutter);
      /* padding: var(--gutter) 0; */
    }
  }

  &__carat {
    display: flex;
    align-items: center;
    justify-content: center;

    height: var(--toggle-icon-size);
    width: var(--toggle-icon-size);

    svg {
      transform: rotate(-90deg);
      transition: transform var(--transition);
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
