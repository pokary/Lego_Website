<script setup>
import { ref } from 'vue'

const message = ref('Bonjour !')

function direSalut() {
  message.value = 'Salut !'
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="direSalut">Cliquer ici</button>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>