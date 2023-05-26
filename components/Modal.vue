<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const show = useStorage('show-email-capture', true)

const currentEmail = ref('')
watchEffect(() => console.log('currentEmail:', currentEmail.value))

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
        <form name="email-capture-modal" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
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
        <p class="text-sm text-center text-underline text-grey" @click.prevent="onEnter">
          enter email later
        </p>
      </div>
      <!-- <button block class="btn btn--primary" @click="show = false">
        Close Dialog
      </button> -->
    </div>
  </v-dialog>
  <form name="email-capture-modal" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
    <input type="hidden" name="form-name" value="email-capture-modal">
    <p hidden>
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <input v-model="currentEmail" type="email" name="panelist" required placeholder="Email Address" class="form-control">
    <button class="btn btn--sm btn--primary" @click="onSubmit">
      View presentation
    </button>
  </form>
</template>

<style lang="scss">
.modal {
  display: flex;
  flex-grow: 1;
  flex-flow: column nowrap;
  padding: var(--gutter);

  background: var(--color-bg);
  border: var(--border);
  border-radius: var(--radius-md);

  width: 500px;

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
  }
}
</style>
