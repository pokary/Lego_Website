<script setup>
import{ ref } from 'vue'
import signIn from './components/signIn.vue'
import { insiders } from './store'
const userEmail = ref('')
const choice = ref('')


function upd_IdLog(id){
  IdLog.value = id
}

function debog(val){
  choice.value = val
  console.log(val)
}

function jsp(val){
  console.log('login')
  console.log(val ==='login')
  return val === 'login'
}

function reset(){
  console.log('reset')
  choice.value = ''
  console.log(choice.value ==='login')
}




</script>

<template>

    <header>
        <img src="/logo.png" alt="Icon" id="logo" />
        <div class="logo-text">
          <h1>Lego Website</h1>
          <p>New construction for your home</p>
          <router-link to="/" class="button">Store</router-link>
        </div>
    </header>
    <main>
      <button @click = "reset()">reset</button>

      <div v-show = true>

        <button @click = "debog('login')">log in</button>
        <signIn v-if="choice === 'login'"/> 


      </div> 
  
      <p> test paragraphe </p>





    </main>
</template>