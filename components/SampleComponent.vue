<script lang="ts" setup>
const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment, reset } = store
</script>

<template>
  <div class="">
    <h1>
      Counter: {{ count }}
    </h1>
    <div class="">
      <button class="btn" @click="increment">
        Increment
      </button>
      <button class="btn" @click="reset">
        Reset
      </button>
    </div>
  </div>
</template>
