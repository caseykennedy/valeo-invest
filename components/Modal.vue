<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const show = useStorage('show-email-capture', true)
const currentEmail = ref('')

function onSubmit(e: Event) {
  show.value = false
}

function onEnter(e: Event) {
  show.value = false
}
</script>

<template>
  <v-dialog v-model="show" width="auto">
    <div class="modal">
      <div class="email-capture">
        <h3 class="text-lg">
          We appreciate knowing who’s visiting
        </h3>
        <form name="email-capture-modal" method="post" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
          <input type="hidden" name="form-name" value="email-capture-modal">
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>
          <input
            v-model="currentEmail" type="email" name="panelist" required placeholder="Email Address"
            class="form-control"
          >
          <button class="btn btn--sm btn--primary" @click="onSubmit">
            View presentation
          </button>
        </form>
        <div class="email-capture__bypass">
          <a href="#" @click.prevent="onEnter">enter email later</a>
        </div>
      </div>
      <!-- <button block class="btn btn--primary" @click="show = false">
        Close Dialog
      </button> -->
    </div>
  </v-dialog>
  <!-- <form name="email-capture-modal" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
    <input type="hidden" name="form-name" value="email-capture-modal">
    <p hidden>
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <input v-model="currentEmail" type="email" name="panelist" required placeholder="Email Address" class="form-control">
    <button class="btn btn--sm btn--primary" @click="onSubmit">
      View presentation
    </button>
  </form> -->
</template>

<style lang="scss">
.modal {
  display: flex;
  flex-grow: 1;
  flex-flow: column nowrap;

  margin: 0 auto;
  padding: var(--gutter);

  background: var(--color-bg);
  border: var(--border);
  border-radius: var(--radius-md);

  max-width: 500px;
  width: 98%;

  .email-capture {
    form {
      display: flex;
      flex-flow: column nowrap;
      /* align-items: flex-end; */
      gap: var(--space-md);
      margin-bottom: var(--gutter-sm);

      input {
        /* padding: 0; */
        width: 100%;
      }

      button,
      .btn {
        /* position: relative; */
        /* bottom: 1px; */

      }
    }

    &__bypass {
      display: flex;
      justify-content: center;

      a {
        text-align: center;
        text-decoration: underline;
        font-size: var(--text-sm);
        color: var(--color-text-lighter);

        &:hover {
          color: var(--color-text);
        }
      }
    }
  }
}
</style>
