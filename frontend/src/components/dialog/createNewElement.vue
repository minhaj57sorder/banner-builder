<template>
  <div class="row q-col-gutter-lg">
    <div class="col-12">
      <q-input v-model="bannerStore.newCntElementName" label="Title for this element" outlined dense />
    </div>
    <div class="col-12">
      <q-input v-model="bannerStore.newCntElementUniqueClass" @update:model-value="replaceSpaceWithUnderscore" label="cnt-element additional classname" outlined dense />
    </div>
    <div class="col-12">
      <q-input v-model="bannerStore.newCntElementBgImg" label="bg image for whole bg" placeholder="add multiple classname with space" outlined dense />
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
      <q-btn @click="bannerStore.addNewCntElement" class="full-width" color="primary" label="create" outlined dense v-close-popup/>
    </div>
  </div>
</template>

  <script setup>
import { useBannerStore } from 'src/stores/dataStore';

const bannerStore = useBannerStore()
const replaceSpaceWithUnderscore =()=>{
  bannerStore.newCntElementUniqueClass = bannerStore.newCntElementUniqueClass.replace(/ /g,"_")
}
</script>
<style>
</style>
