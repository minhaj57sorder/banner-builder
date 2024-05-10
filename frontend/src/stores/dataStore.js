import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import {useSessionStorage } from '@vueuse/core'
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

export const useAuthStore = defineStore('auth store',{
  state: () => ({
    name:null,
    email:null,
    password:null,
    password1:null,
    router: useRouter(),
    userAuthInfo: useSessionStorage("userAuthInfo",{})
  }),
  getters: {
  },
  actions: {
    emptyUserData(){
      this.name = null
      this.email = null
      this.password = null
      this.password1 = null
    },
    login(){
      api.post('api/users/login',{
        email: this.email,
        password: this.password,
      }
      ).then(response=>{
        this.userAuthInfo = response.data
        this.emptyUserData()
        this.router.push('/')
      }).catch(error=>{
        console.log(error)
        this.emptyUserData()
      })
    },
    register(){
      api.post('api/users/register',{
        name: this.name,
        email: this.email,
        password: this.password,
      }
      ).then(response=>{
        this.userAuthInfo = response.data
        this.emptyUserData()
      }).catch(error=>{
        console.log(error)
        this.emptyUserData()
      })
    },
    logout(){
      this.userAuthInfo = null
    }
  }
})

export const useBannerStore = defineStore('banner_store', {
  state: () => ({
    userAuthInfo: useSessionStorage("userAuthInfo",{}),
    createSizeDialog:false,
    createCntElDialog:false,
    bannerHead: null,
    bannerCss: null,
    bannerContent: null,
    selectedBannerId: null,
    newCntElementName: "Title",
    newCntElementUniqueClass: "cnt-element unique_class_name",
    newAnimationInClassList: "anm-in animated fadeIn duration-15",
    newAnimationOutClassList: "anm-in animated zoomOut duration-15",
    newUiCustomClassList: "ui-img img-01",
    newCntElementBgImg: null,
    newBgImage: "",
    bannerName: null,
    selectedBanner: "_320x320",
    selectedBannerIndex: 0,
    newBannerSize: {
      name: "_320x320",
      width: 320,
      height:320,
    },
    bannerSizes: [
      {
        name: "_320x320",
        width: 320,
        height:320
      },
      {
        name: "_640x320",
        width: 640,
        height:320
      }
    ],
    selectedCustomElement: "bg",
    customElementList: ["bg","pontus","offer","logo"],
    cntElementList: [
      {
        name: "sanaboreBanner2023-12",
        element: {
          cntElementUniqueClass: "bg",
          animationInClasses: "anm-in animated fadeIn duration-15",
          animationOutClasses: "anm-out",
          uiCustomClasses: "ui-img img-01",
        },
        innerHTML: "<div class='ch'>Chocolet</div>",
        innerCSS:"<style>.ch{color:red}</style>",
      },
      {
        name: "sanaboreBanner2023-12",
        element: {
          cntElementUniqueClass: "pontus",
          animationInClasses: "anm-in animated fadeIn duration-06 delay-02",
          animationOutClasses: "anm-out",
          uiCustomClasses: "ui-img img-01",
        },
        innerHTML: "",
        innerCSS:"",
      },
      {
        name: "sanaboreBanner2023-12",
        element: {
          cntElementUniqueClass: "offer",
          animationInClasses: "anm-in animated fadeIn duration-06 delay-02",
          animationOutClasses: "anm-out",
          uiCustomClasses: "ui-offer custom-01",
        },
        innerHTML: "",
        innerCSS:"",
      },
      {
        name: "sanaboreBanner2023-12",
        element: {
          cntElementUniqueClass: "logo",
          animationInClasses: "anm-in",
          animationOutClasses: "anm-out",
          uiCustomClasses: "ui-logo svg",
        },
        innerHTML: "",
        innerCSS:"",
      },
    ],
    cntElementStyles:{
      _320x320:{
        bg:{
          left:0,
          top:0,
          scale:100,
          bgImg: 'https://cdn.bannerflow.com/resources/bg-blue-320x320-56e08755-ce6d-4cc8-b19d-1e8415386b8f.jpg'
        },
        pontus:{
          left:0,
          top:0,
          scale:100,
        },
        offer:{
          left:0,
          top:0,
          scale:100,
        },
        logo:{
          left:0,
          top:0,
          scale:100,
        },
      },
      _640x320:{
        bg:{
          left:0,
          top:0,
          scale:100,
        },
        pontus:{
          left:0,
          top:0,
          scale:100,
        },
        offer:{
          left:0,
          top:0,
          scale:100,
        },
        logo:{
          left:0,
          top:0,
          scale:100,
        },
      }
    },
    bannerList:null,
    globalCssAvailable:null,
    globalCss:null,
    outputBannerLists:[],
  }),
  getters: {
  },
  actions: {
    addNewCntElement() {
      this.customElementList.push(this.newCntElementUniqueClass)
      this.cntElementList.push({
        name: this.newCntElementName,
        element: {
          cntElementUniqueClass: this.newCntElementUniqueClass,
          animationInClasses: this.newAnimationInClassList,
          animationOutClasses: this.newAnimationOutClassList,
          uiCustomClasses: this.newUiCustomClassList,
        },
      })
      let elementStyles = Object.keys(this.cntElementStyles);

      elementStyles.forEach((stylesKey) => {
       this.cntElementStyles[stylesKey][this.newCntElementUniqueClass] = {
        left:0,
        top:0,
        scale:100,
        bgImg:this.newCntElementBgImg
      }
      });
    },
    addNewSize() {
        this.bannerSizes.push(this.newBannerSize)
        let elementStyles = Object.keys(this.cntElementStyles);
  
        if(elementStyles.length > 0){
          this.cntElementStyles[this.newBannerSize.name] = this.cntElementStyles[elementStyles[0]]
        }else{
          this.cntElementStyles[this.newBannerSize.name] = {}
        }
    },
    getBanner(){
      api.get('api/banner',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.userAuthInfo.token}`,
            },
        }
      ).then(response=>{
        this.bannerList = response.data
      }).catch(error=>{
        console.log(error)
      })
    },
    getBannerElementById(){
      api.get('api/banner/'+this.selectedBannerId,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.userAuthInfo.token}`,
            },
        }
      ).then(response=>{
        this.cntElementList= response.data.cntElementList
          this.selectedBannerId= response.data._id
          this.bannerName= response.data.bannerName
          this.bannerSizes= response.data.bannerSizes
          this.cntElementStyles= response.data.cntElementStyles
          this.customElementList= response.data.customElementList
          this.selectedCustomElement = response.data.customElementList[0]
          this.selectedBanner= response.data.bannerSizes[0].name
          this.selectedBannerIndex= 0
      }).catch(error=>{
        console.log(error)
      })
    },
    generateBanner(){
      
      api.get('api/banner/generate/'+this.selectedBannerId+"/",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.userAuthInfo.token}`,
            },
        }
      ).then(response=>{
        Swal.fire('Any fool can use a computer')
      }).catch(error=>{
        console.log(error)
      })
    },
    saveBanner(){
      api.put('api/banner/'+this.selectedBannerId,{
        bannerName: this.bannerName,
        cntElementList: this.cntElementList,
        bannerSizes: this.bannerSizes,
        cntElementStyles: this.cntElementStyles,
        customElementList: this.customElementList,
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.userAuthInfo.token}`,
      },
      }
      ).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    deleteBanner(id){
      api.delete('api/banner/'+id,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.userAuthInfo.token}`,
      },
      }
      ).then(response=>{
        console.log(response.data)
        this.getBanner()
        return true
      }).catch(error=>{
        console.log(error)
        return false
      })
    },
    createBanner(){
      api.post('api/banner/create',
      {
        bannerName: this.bannerName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.userAuthInfo.token}`,
      },
      },
      ).then(response=>{
        console.log(response.data)
        this.getBanner()
      }).catch(error=>{
        console.log(error)
      })
    },
    createGlobalCss(){
      api.post('api/banner/globalcss/create',
      {
        banner: this.selectedBannerId,
        bannerGlobalCss: '<style>/* Add global css here. */</style>'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.userAuthInfo.token}`,
      },
      },
      ).then(response=>{
        console.log(response.data)
        this.getGlobalCss()
      }).catch(error=>{
        console.log(error)
      })
    },
    updateGlobalCss(){
      api.put('api/banner/globalcss/'+this.globalCssAvailable,
      {
        bannerGlobalCss: this.globalCss,
        banner: this.selectedBannerId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.userAuthInfo.token}`,
      },
      },
      ).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    },
    getGlobalCss(){
      api.get('api/banner/globalcss/'+this.selectedBannerId,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.userAuthInfo.token}`,
      },
      },
      ).then(response=>{
        console.log(response.data)
        this.globalCss = response.data.bannerGlobalCss
        this.globalCssAvailable= response.data._id
      }).catch(error=>{
        console.log(error)
        this.globalCssAvailable= false
      })
    },
    downloadBanners(e,name){
      var blob = new Blob([e], {type: "text/plain;charset=utf-8"});
      saveAs(blob, name+".html");
    }
  },
});