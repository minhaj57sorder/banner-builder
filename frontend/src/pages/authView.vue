<template>
    <div class="flex justify-center q-mt-xl">
        <div class="row q-col-gutter-md" style="width:350px">
          <div class="col-12" v-if="route.path === '/register'">
          <q-input
          v-model="authStore.name"
          label="Name"
          outlined dense
          />
        </div>
          <div class="col-12">
          <q-input
          v-model="authStore.email"
          label="Email"
          type="email"
          outlined dense
          />
        </div>
          <div class="col-12">
          <q-input
          v-model="authStore.password"
          label="Password"
          type="password"
          outlined dense
          />
        </div>
          <div class="col-12"  v-if="route.path === '/register'">
          <q-input 
          v-model="authStore.password1"
          label="Confirm Password"
          type="password"
          outlined dense
          />
        </div>
          <div class="col-12">
            <q-btn v-if="route.path === '/register'" class="full-width" color="primary" label="Register" @click="registerFunc"/>
            <q-btn v-else class="full-width" color="primary" label="Login" @click="loginFunc"/>
        </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import {useAuthStore}from 'src/stores/dataStore.js'
import Swal from "sweetalert2"
import { onMounted } from 'vue';

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const loginFunc =()=>{
  if(authStore.email && authStore.password){
    authStore.login()
    router.push('/')
  }else{
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Kindly check you did not enter email or password!',
})
  }
}
const registerFunc =()=>{
  if(authStore.name && authStore.email && authStore.password && (authStore.password === authStore.password1)){
    authStore.login()
  }else{
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Kindly check you did not enter email or password and password dose not match!',
})
  authStore.register()
}

}
onMounted(()=>{
  if(authStore.userAuthInfo){
    if(Object.keys(authStore.userAuthInfo).length > 0){
      router.push('/')
    }
  }
})
</script>

<style>

</style>