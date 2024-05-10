<template>
  <div class="row q-col-gutter-lg">
    <div class="col-12">
      <q-input v-model="bannerStore.newBannerSize.name" @update:model-value="startWithUnderscore" label="Title of new Banner size" outlined dense :focus="focusEl" />
      <div class="text-red" v-show="preventSameSize">Can't create same size with same name. Try different name.</div>
    </div>
    <div class="col-12">
      <q-input v-model="bannerStore.newBannerSize.width"  label="Width in px" outlined dense type="number" />
    </div>
    <div class="col-12">
      <q-input v-model="bannerStore.newBannerSize.height"  label="Height in px" outlined dense type="number" />
    </div>
    <div class="col-12">
      <q-btn @click="bannerStore.addNewSize" class="full-width" color="primary" label="create" outlined dense :disabled="preventSameSize" v-close-popup/>
    </div>
  </div>
</template>

  <script setup>
import { useBannerStore } from 'src/stores/dataStore';
import {ref} from 'vue'

const preventSameSize = ref(true)
const focusEl = ref(true)
const bannerStore = useBannerStore()
const focusedF =()=>{
  console.log(focusEl.value)
}
const startWithUnderscore =()=>{
  focusedF()
  bannerStore.newBannerSize.name = bannerStore.newBannerSize.name.replace(/ /g,"_")
  if(bannerStore.bannerSizes.filter(e=>e.name == bannerStore.newBannerSize.name).length == 0){
    preventSameSize.value = false
  }else{
    preventSameSize.value = true

  }
}
</script>
<style>
</style>
