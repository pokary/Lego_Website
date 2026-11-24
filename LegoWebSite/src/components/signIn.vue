<script setup>
import { ref } from 'vue'
import { insiders } from '../store'
const message = ref('Bonjour !')


const name = ref('')

function handleSubmit() {
  console.log('ca marche')

  insiders.value.push({
    id: insiders.value.length + 1,
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    insiderPoints: 0
  })

  console.log(insiders.value, 'caca')

}

const lastName = ref('')
const errorMessage = ref('')
const email = ref('')
const password = ref('')


</script>

<template>
<form @submit.prevent="handleSubmit" class="my-form">

<div v-if="errorMessage" class="alert-error">
{{ errorMessage }}
</div>

  <div class="field">
    <label>Name :</label>
    <input type="text" v-model.trim="name" />
  </div>


  <div class="field">
    <label>Last name :</label>
    <input type="text" v-model.trim="lastName" />
  </div>

  <div class="field">
    <label>email :</label>
    <input type="email" v-model.trim="email" />
  </div>

    <div class="field">
    <label>password :</label>
    <input type="password" v-model.trim="password" />
  </div>

<button type="submit">Submit</button>

</form>






  <div>
    <h1>{{ message }}gnjo</h1>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>