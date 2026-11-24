<script setup>
import { ref } from 'vue'

const message = ref('Bonjour !')

function direSalut() {
  message.value = 'Salut !'
}
</script>

<template>
  <div>
    <h1>{{ message }}gnjo</h1>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>