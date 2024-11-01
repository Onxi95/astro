<script setup>
import { useStore } from '@nanostores/vue'
import { counterStore } from '../stores/counterStore'

const count = useStore(counterStore)
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <button @click="counterStore.set(counterStore.get() - 1)">decrement</button>
    {{ count }}
    <button @click="counterStore.set(counterStore.get() + 1)">increment</button>
  </div>
</template>
