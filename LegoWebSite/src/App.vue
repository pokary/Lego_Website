<script setup>
import{ ref } from 'vue'
import signIn from './components/signIn.vue'
import signUp from './components/signUp.vue'
import Store from '../src/components/Store.vue'
import Command from '../src/components/Command.vue'
import Help from '../src/components/Help.vue'
import { insiders } from './store'
const userEmail = ref('')
const choice = ref('')


function upd_IdLog(id){
  IdLog.value = id
}

function click(val){
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

    <header >
        <img src="/logo.png" alt="Icon" id="logo" />
        <div class="logo-text">
          <h1>Lego Website</h1>
          <p>New construction for your home</p>
          <router-link to="/store" class="button">Store</router-link>
          <router-link to="/help" class="button">Help</router-link>

        </div>
    </header>
    <main>
      <button @click = "reset()">reset</button>


      <div v-show = true id="bloc-button">
        <div class="bloc-form">
          <button @click = "click('create')">Create an account</button>
          <signIn v-if="choice === 'create'"/> 
        </div>
        <div class="bloc-form"> 
          <button @click = "click('login')">Log In</button>
          <signUp v-if="choice === 'login'"/> 
        </div>
      </div> 
    </main>
</template>

<style scoped>
  .bloc-form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #logo {          /* picture */
    height: 100px;
    width: fit-content;
  }

  .logo-text h1 {
    margin: 0;
    font-size: 50px;
    letter-spacing: 1px;
  }
  .logo-text p {
    margin: 0;
    font-size: 20px;
    color: #666;
  }
  #bloc-button {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

</style>