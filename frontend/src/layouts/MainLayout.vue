<template>
  <q-layout view="hHh lpR fff">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Banner ads
        </q-toolbar-title>

        <q-btn dense flat round label="logout" @click="authStore.logout();router.push('/login')" />
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Screens
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import DevTools from 'components/DevTools.vue'
import { useAuthStore, useBannerStore } from "src/stores/dataStore";
import { useRouter } from 'vue-router';
const bannerStore = useBannerStore();
const authStore = useAuthStore();
const router = useRouter();
const linksList = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'home',
    link: '/'
  },
]

const leftDrawerOpen = ref(false)

const essentialLinks= linksList
const toggleLeftDrawer =()=> {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

onMounted(()=>{
  if(authStore.userAuthInfo){
    if(Object.keys(authStore.userAuthInfo).length == 0){
      router.push('/login')
    }
  }
})

</script>
