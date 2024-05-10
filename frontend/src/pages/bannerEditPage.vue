<template>
  <q-page class="q-pa-lg">
    <q-btn class="q-mb-md" label="download this banner" @click="getInnerContent" color="primary" size="sm"/>
    <q-btn class="q-mb-md q-ml-sm" label="download All banner" @click="getAllBanner" color="primary" size="sm"/>
    <div ref="innerBannerContent">

      <div style="display: none;" v-if="bannerStore.globalCssAvailable" v-html="bannerStore.globalCss"></div>
      <div
        class="cnt-banner theme-blue blue-bg-image html purple-arrow-l-to-r prospect logo-x-center logo-y-top btn-x-center btn-y-bottom tc-x-center tc-y-bottom"
        :class="[
          `size_${
            bannerStore.bannerSizes[bannerStore.selectedBannerIndex].width
          }x${bannerStore.bannerSizes[bannerStore.selectedBannerIndex].height}`,
        ]"
        :style="{
          width:
            bannerStore.bannerSizes[bannerStore.selectedBannerIndex].width + 'px',
          height:
            bannerStore.bannerSizes[bannerStore.selectedBannerIndex].height +
            'px',
        }"
      >
        <a
          href="javascript:window.open(window.clickTag1)"
          id="clickTAG-snabbare"
          class="click-area snabbare"
        ></a>
  
        <div class="banner-inner">
          <div
            :class="[item.element.cntElementUniqueClass?item.element.cntElementUniqueClass:'']"
            v-for="(item, index) in bannerStore.cntElementList"
            :key="index"
            :style="{
              width:
                bannerStore.bannerSizes[bannerStore.selectedBannerIndex].width +
                'px',
              height:
                bannerStore.bannerSizes[bannerStore.selectedBannerIndex].height +
                'px',
            }"
          >
            <div
              :class="[item.element.animationInClasses]"
            >
              <div
                :class="[item.element.animationOutClasses]"
                :style="{
                  width:
                    bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                      .width + 'px',
                  height:
                    bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                      .height + 'px',
                }"
              >
                <div
                  class="transform-x"
                  :style="{
                    width:
                      bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                        .width + 'px',
                    height:
                      bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                        .height + 'px',
                  }"
                >
                  <div
                    class="transform-y"
                    :style="{
                      width:
                        bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                          .width + 'px',
                      height:
                        bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                          .height + 'px',
                    }"
                  >
                    <div
                      :class="[item.element.uiCustomClasses]"
                      :style="{
                        position: 'absolute',
                        left:
                          bannerStore.cntElementStyles[
                            bannerStore.selectedBanner
                          ][item.element.cntElementUniqueClass].left + 'px',
                        top:
                          bannerStore.cntElementStyles[
                            bannerStore.selectedBanner
                          ][item.element.cntElementUniqueClass].top + 'px',
                        transformBox: 'fill-box',
                        transformOrigin: '0% 0%',
                        transform:
                          'scale(' +
                          bannerStore.cntElementStyles[
                            bannerStore.selectedBanner
                          ][item.element.cntElementUniqueClass].scale /
                            100 +
                          ')',
                        width:
                          bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                            ?.width + 'px',
                        height:
                          bannerStore.bannerSizes[bannerStore.selectedBannerIndex]
                            ?.height + 'px',
                        backgroundImage: bannerStore.cntElementStyles[
                          bannerStore.selectedBanner
                        ][item.element.cntElementUniqueClass]?.bgImg
                          ? 'url(' +
                            bannerStore.cntElementStyles[
                              bannerStore.selectedBanner
                            ][item.element.cntElementUniqueClass]?.bgImg +
                            ')'
                          : '',
                      }"
                    >
                      <div
                        v-if="item.innerHTML"
                        class="inner"
                        v-html="item.innerHTML"
                      ></div>
                      <div
                        v-if="item.innerCSS"
                        class="innerCSS"
                        v-html="'<style>'+item.innerCSS+'</style>'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-mt-lg">
      <div> Global Css </div>
      <q-input v-model="bannerStore.globalCss" type="textarea" outlined/>
      <div class="flex justify-end q-mt-md">
        <q-btn v-if="bannerStore.globalCssAvailable" label="Save" outline color="primary" @click="bannerStore.updateGlobalCss
        ()"/>
        <q-btn v-else label="Create" outline color="primary" @click="bannerStore.createGlobalCss
        ()"/>
      </div>
    </div>
    <q-dialog v-model="bannerStore.createSizeDialog">
      <q-card class="q-dialog-plugin">
        <q-card-section>
          <createNewSize />
        </q-card-section>
        <q-card-section align="right">
          <q-btn class="q-ml-sm" color="primary" label="Cancel" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="bannerStore.createCntElDialog">
      <q-card class="q-dialog-plugin">
        <q-card-section>
          <createNewElement />
        </q-card-section>
        <q-card-section align="right">
          <q-btn class="q-ml-sm" color="primary" label="Cancel" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { useBannerStore } from "src/stores/dataStore";
import createNewSize from "src/components/dialog/createNewSize.vue";
import createNewElement from "src/components/dialog/createNewElement.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useTimeoutFn } from "@vueuse/core";

const route = useRoute();
const mod = ref("banner-1");
const innerBannerContent = ref(null);

const bannerStore = useBannerStore();
const innerhtmltext = `<div class="nn">hello</div>`;

const getInnerContent =()=>{
bannerStore.downloadBanners(innerBannerContent.value.innerHTML,bannerStore.selectedBanner)
}
const getAllBanner =()=>{
  bannerStore.outputBannerLists = []
  bannerStore.bannerSizes.forEach((bnrSiz,index)=>{
    bannerStore.selectedBanner = bnrSiz.name
    bannerStore.selectedBannerIndex = index;   
    const { isPending, start, stop } = useTimeoutFn(() => {
      bannerStore.outputBannerLists.push(innerBannerContent.value.innerHTML)
      bannerStore.downloadBanners(innerBannerContent.value.innerHTML,bnrSiz.name)
}, 1000*index)
start()
  })
}
onMounted(() => {
  bannerStore.selectedBannerId = route.params.id;
  bannerStore.getBannerElementById();
  bannerStore.getGlobalCss()
});
</script>
<style>
input[type="radio"][custom="removecircle"]:checked {
  visibility: hidden;
}
</style>