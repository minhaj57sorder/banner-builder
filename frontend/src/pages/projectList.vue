<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      <q-btn label="Banner" icon="add" @click="addBannerDialog=true" outline color="primary">
      <q-tooltip>Create new banner project.</q-tooltip>
      </q-btn>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 col-12" v-for="(item, index) in bannerStore.bannerList" :key="index">

        <q-card >
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom">
            <div class="text-subtitle2">{{item.bannerName}}</div>
            <div class="text-subtitle2">{{item._id}}</div>
          </div>
        </q-img>
    
        <q-card-actions>
          <q-btn flat @click="router.push('edit/'+item._id)">Edit</q-btn>
          <q-btn flat @click="deleteBanner(item._id)">Delete</q-btn>
        </q-card-actions>
      </q-card>
      </div>
    </div>
    <q-dialog v-model="addBannerDialog">
      <q-card class="q-pa-md" style="width:300px">
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-input v-model="bannerStore.bannerName" label="Banner Project Name" outlined dense/>
          </div>
          <div class="col-12">
            <q-btn @click="bannerStore.createBanner" class="full-width" label="Create" outline color="primary"/>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

  <script setup>
import { useBannerStore } from 'src/stores/dataStore';
import Swal from 'sweetalert2';
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const addBannerDialog = ref(false)
const router = useRouter()
const bannerStore = useBannerStore()
bannerStore.getBanner()
const deleteBanner =(id)=>{
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    if(bannerStore.deleteBanner(id)){
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }else{
      Swal.fire(
        'Can not delete',
        'Your file has not been deleted.',
        'warning'
      )

    }
  }
})
}
</script>
<style  scoped>
</style>
