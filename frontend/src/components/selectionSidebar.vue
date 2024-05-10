<template>
   <div class="q-px-md">
    <q-btn-toggle
    class="horizontal-btns"
      v-model="bannerStore.selectedCustomElement"
      toggle-color="primary"
      :options="Array.from(bannerStore.customElementList,e=>({label:`<div class='${e}'>`,value:e}))"
    />
   </div>
</template>

<script setup>
import { useBannerStore } from "src/stores/dataStore";
const bannerStore = useBannerStore();

</script>

<style>
.horizontal-btns.q-btn-group{
    flex-direction: column;
    width: 100%;
    text-transform: lowercase;
}
.horizontal-btns.q-btn-group .q-btn{
    text-transform: none;
}
</style>