<script setup>
import { ref } from 'vue'
import { insiders } from '../store'
const message = ref('Hello !')
const errorMessage = ref('')

function handleSubmit() {

  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Veuillez remplir tous les champs.'
    return
  }

  // Search for the client 
  const clientTrouve = insiders.find(
    (client) => client.email === email.value && client.password === password.value
  )

  if (!clientTrouve) {
    errorMessage.value = 'Email ou mot de passe incorrect.'
    return
  }

  console.log('Connexion réussie pour :', clientTrouve)

}


const email = ref('')
const password = ref('')
</script>

<template>
  <form @submit.prevent="handleSubmit" class="my-form">

    <div v-if="errorMessage" class="alert-error">
      {{ errorMessage }}
    </div>

    <div class="field">
      <label>Email :</label>
      <input type="email" v-model.trim="email" />
    </div>

    <div class="field">
      <label>Password :</label>
      <input type="password" v-model.trim="password" />
    </div>

    <button type="submit">Submit</button>

  </form>
</template>

<style scoped>
  .my-form {
    display: table-column;
    justify-content: center;
    gap: 15px; 
    padding: 25px;
    border-radius: 15px; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 300px; 
    margin-top: 15px; 
    box-sizing: border-box;
}

.field {
    display: flex;
    flex-direction: column; 
    gap: 5px;
}

.field label {
    font-size: 14px;
    font-weight: bold;
    color: #000000;
}

.field input {
    width: 100%;
    padding: 10px 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
}

.field input:focus {
    border-color: #b30000;
}
</style>