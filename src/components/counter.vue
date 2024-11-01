<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <button @click="count--">decrement</button>
    {{ count }}
    <button @click="count++">increment</button>
  </div>
</template>
