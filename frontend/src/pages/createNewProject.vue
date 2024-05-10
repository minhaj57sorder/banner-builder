<template>
  <div>
    <div class="q-pa-md row q-col-gutter-lg">
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
        <q-btn @click="bannerStore.addNewSize" class="full-width" color="primary" label="create" outlined dense :disabled="preventSameSize" />
      </div>
    </div>
    <div class="q-pa-md row q-col-gutter-lg">
      <div class="col-12">
        <q-input v-model="bannerStore.newCntElementName" label="Title for this element" outlined dense />
      </div>
      <div class="col-12">
        <q-input v-model="bannerStore.newCntElementUniqueClass" @update:model-value="replaceSpaceWithUnderscore" label="cnt-element additional classname" outlined dense />
      </div>
      <div class="col-12">
        <q-input v-model="bannerStore.newBgImage" label="bg image for whole bg" placeholder="add multiple classname with space" outlined dense />
      </div>
      <div class="col-12">
        <q-input v-model="bannerStore.newAnimationInClassList" label="animation-in classnames" placeholder="add multiple classname with space" outlined dense />
      </div>
      <div class="col-12">
        <q-input v-model="bannerStore.newAnimationOutClassList" label="animation-out classnames" placeholder="add multiple classname with space" outlined dense />
      </div>
      <div class="col-12">
        <q-input v-model="bannerStore.newUiCustomClassList" label="ui-custom classnames" placeholder="add multiple classname with space" outlined dense />
      </div>
      <div class="col-12">
        <q-btn @click="bannerStore.addNewCntElement" class="full-width" color="primary" label="create" outlined dense />
      </div>
  
  
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
const replaceSpaceWithUnderscore =()=>{
  bannerStore.newCntElementUniqueClass = bannerStore.newCntElementUniqueClass.replace(/ /g,"_")
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
