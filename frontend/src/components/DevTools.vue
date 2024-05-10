<template>
    <div class="q-px-md q-pb-md">
        <div class="q-mb-sm">
            <q-btn @click="bannerStore.saveBanner" class="full-width" label="save" color="primary"/>
        </div>
        <div>
            <div class="q-mb-sm">Select banner size</div>
            <q-select :options="bannerStore.bannerSizes" v-model="selectedBanner" outlined dense
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : null"
            @update:model-value="updateSelectedBannerIndex(); bannerStore.selectedBanner = selectedBanner.name"
            >
            <!-- <template #selected>
                <div>{{ model.options }}</div>
            </template> -->
            </q-select>
        </div>
        <div>
            <div class="q-mb-sm">Select banner Element</div>
            <q-select :options="bannerStore.customElementList" v-model="bannerStore.selectedCustomElement" outlined dense @update:model-value="updateSelectedIndex"/>
        </div>
        <div class="q-my-sm">Change parameters</div>
        <div>
            <div>Left</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-8">
                    <q-slider v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].left" :min="0" :max="Number(bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].left+50)" />
                </div>
                <div class="col-4">
                    <q-input v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].left" type="number" dense outlined ></q-input>
                </div>
    
            </div>

        </div>
        <div>
            <div>Top</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-8">
                    <q-slider v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].top" :min="0" :max="Number(bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].top+50)" />
                </div>
                <div class="col-4">
                    <q-input v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].top" type="number" dense outlined></q-input>
                </div>
    
            </div>

        </div>
        <div>
            <div>Scale</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-8">
                    <q-slider v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].scale" :min="0" :max="Number(bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].scale+50)" />
                </div>
                <div class="col-4">
                    <q-input v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].scale" type="number" dense outlined></q-input>
                </div>
    
            </div>

        </div>
        <div>
            <div>Bg Image</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementStyles[bannerStore.bannerSizes[bannerStore.selectedBannerIndex].name][bannerStore.selectedCustomElement].bgImg" dense outlined></q-input>
                </div>
    
            </div>

        </div>
        <div>
            <div>Cnt element Class</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementList[selectedIndex].element.cntElementUniqueClass" dense outlined></q-input>
                </div>
    
            </div>
        </div>
        <div>
            <div>Ui Class</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementList[selectedIndex].element.uiCustomClasses" dense outlined></q-input>
                </div>
    
            </div>
        </div>
        <div>
            <div>Animated In classes</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementList[selectedIndex].element.animationInClasses" dense outlined></q-input>
                </div>
    
            </div>
        </div>
        <div>
            <div>Animated Out classes</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementList[selectedIndex].element.animationOutClasses" dense outlined></q-input>
                </div>
    
            </div>
        </div>
        <div>
            <div>Inner HTML</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementList[selectedIndex].innerHTML" dense outlined type="textarea"></q-input>
                </div>
    
            </div>

        </div>
        <div>
            <div>Inner CSS</div>
            <div class="row q-col-gutter-md items-center">
                <div class="col-12">
                    <q-input v-model="bannerStore.cntElementList[selectedIndex].innerCSS" dense outlined type="textarea"></q-input>
                </div>
    
            </div>

        </div>
    </div>
</template>

<script setup>
import { useBannerStore } from "src/stores/dataStore";
import { onActivated, onMounted, ref } from "vue";

const standard = ref(10)
const selectedBanner = ref(null)
const bannerStore = useBannerStore()
const selectedIndex = ref(0)
const updateSelectedIndex =()=>{
    selectedIndex.value = bannerStore.cntElementList.findIndex(e=>e.element.cntElementUniqueClass == bannerStore.selectedCustomElement)    
}
updateSelectedIndex()
const updateSelectedBannerIndex =()=>{
    bannerStore.selectedBannerIndex = bannerStore.bannerSizes.findIndex(e=>e.name == selectedBanner.value.name)    
}
onMounted(()=>{
    selectedBanner.value = bannerStore.bannerSizes[0]
    updateSelectedBannerIndex()
})

// const {left,top,scale}=bannerStore.cntElementStyles._320x320.offer
</script>

<style>

</style>