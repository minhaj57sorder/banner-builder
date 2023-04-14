import{c as U,h as $,e as L,Q as f}from"./QBtn.3d871832.js";import{j as v,A as k,l as B,_ as g,$ as Q,a3 as N,m as T,N as P,r as y,a as p,c as b,d as r,e as o,u as n,M as S,ai as H,o as M,g as D,S as c,h as K,W as F,aj as w,ak as _,f as z,Y as A}from"./index.b2ae7ab5.js";import{Q as V}from"./QCard.6f7ccd98.js";import{t as O,v as j,Q as E}from"./QDialog.8b7a727c.js";import{a as x,Q as u}from"./dataStore.6812d630.js";import"./axios.83d095ea.js";var C=U({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(s,{slots:t}){const e=v(()=>`q-card__section q-card__section--${s.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>k(s.tag,{class:e.value},$(t.default))}}),W=U({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:t}){const{proxy:{$q:e}}=T(),a=B(Q,g);if(a===g)return console.error("QPage needs to be a deep child of QLayout"),g;if(B(N,g)===g)return console.error("QPage needs to be child of QPageContainer"),g;const l=v(()=>{const d=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof s.styleFn=="function"){const m=a.isContainer.value===!0?a.containerHeight.value:e.screen.height;return s.styleFn(d,m)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-d+"px":e.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":e.screen.height-d+"px"}}),h=v(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>k("main",{class:h.value,style:l.value},$(t.default))}});function I(s){if(s===!1)return 0;if(s===!0||s===void 0)return 1;const t=parseInt(s,10);return isNaN(t)?0:t}var q=L({name:"close-popup",beforeMount(s,{value:t}){const e={depth:I(t),handler(a){e.depth!==0&&setTimeout(()=>{const i=O(s);i!==void 0&&j(i,a,e.depth)})},handlerKey(a){P(a,13)===!0&&e.handler(a)}};s.__qclosepopup=e,s.addEventListener("click",e.handler),s.addEventListener("keyup",e.handlerKey)},updated(s,{value:t,oldValue:e}){t!==e&&(s.__qclosepopup.depth=I(t))},beforeUnmount(s){const t=s.__qclosepopup;s.removeEventListener("click",t.handler),s.removeEventListener("keyup",t.handlerKey),delete s.__qclosepopup}});const R={class:"row q-col-gutter-lg"},G={class:"col-12"},Y={class:"text-red"},J={class:"col-12"},X={class:"col-12"},Z={class:"col-12"},ee={__name:"createNewSize",setup(s){const t=y(!0),e=y(!0),a=x(),i=()=>{console.log(e.value)},l=()=>{i(),a.newBannerSize.name=a.newBannerSize.name.replace(/ /g,"_"),a.bannerSizes.filter(h=>h.name==a.newBannerSize.name).length==0?t.value=!1:t.value=!0};return(h,d)=>(p(),b("div",R,[r("div",G,[o(u,{modelValue:n(a).newBannerSize.name,"onUpdate:modelValue":[d[0]||(d[0]=m=>n(a).newBannerSize.name=m),l],label:"Title of new Banner size",outlined:"",dense:"",focus:e.value},null,8,["modelValue","focus"]),S(r("div",Y,"Can't create same size with same name. Try different name.",512),[[H,t.value]])]),r("div",J,[o(u,{modelValue:n(a).newBannerSize.width,"onUpdate:modelValue":d[1]||(d[1]=m=>n(a).newBannerSize.width=m),label:"Width in px",outlined:"",dense:"",type:"number"},null,8,["modelValue"])]),r("div",X,[o(u,{modelValue:n(a).newBannerSize.height,"onUpdate:modelValue":d[2]||(d[2]=m=>n(a).newBannerSize.height=m),label:"Height in px",outlined:"",dense:"",type:"number"},null,8,["modelValue"])]),r("div",Z,[o(f,{onClick:n(a).addNewSize,class:"full-width",color:"primary",label:"create",outlined:"",dense:"",disabled:t.value},null,8,["onClick","disabled"])])]))}},ne={class:"row q-col-gutter-lg"},te={class:"col-12"},le={class:"col-12"},ae={class:"col-12"},se={class:"col-12"},oe={class:"col-12"},ie={class:"col-12"},re={class:"col-12"},de={__name:"createNewElement",setup(s){const t=x(),e=()=>{t.newCntElementUniqueClass=t.newCntElementUniqueClass.replace(/ /g,"_")};return(a,i)=>(p(),b("div",ne,[r("div",te,[o(u,{modelValue:n(t).newCntElementName,"onUpdate:modelValue":i[0]||(i[0]=l=>n(t).newCntElementName=l),label:"Title for this element",outlined:"",dense:""},null,8,["modelValue"])]),r("div",le,[o(u,{modelValue:n(t).newCntElementUniqueClass,"onUpdate:modelValue":[i[1]||(i[1]=l=>n(t).newCntElementUniqueClass=l),e],label:"cnt-element additional classname",outlined:"",dense:""},null,8,["modelValue"])]),r("div",ae,[o(u,{modelValue:n(t).newCntElementBgImg,"onUpdate:modelValue":i[2]||(i[2]=l=>n(t).newCntElementBgImg=l),label:"bg image for whole bg",placeholder:"add multiple classname with space",outlined:"",dense:""},null,8,["modelValue"])]),r("div",se,[o(u,{modelValue:n(t).newAnimationInClassList,"onUpdate:modelValue":i[3]||(i[3]=l=>n(t).newAnimationInClassList=l),label:"animation-in classnames",placeholder:"add multiple classname with space",outlined:"",dense:""},null,8,["modelValue"])]),r("div",oe,[o(u,{modelValue:n(t).newAnimationOutClassList,"onUpdate:modelValue":i[4]||(i[4]=l=>n(t).newAnimationOutClassList=l),label:"animation-out classnames",placeholder:"add multiple classname with space",outlined:"",dense:""},null,8,["modelValue"])]),r("div",ie,[o(u,{modelValue:n(t).newUiCustomClassList,"onUpdate:modelValue":i[5]||(i[5]=l=>n(t).newUiCustomClassList=l),label:"ui-custom classnames",placeholder:"add multiple classname with space",outlined:"",dense:""},null,8,["modelValue"])]),r("div",re,[o(f,{onClick:n(t).addNewCntElement,class:"full-width",color:"primary",label:"create",outlined:"",dense:""},null,8,["onClick"])])]))}};const ce=r("a",{href:"javascript:window.open(window.clickTag1)",id:"clickTAG-snabbare",class:"click-area snabbare"},null,-1),ue={class:"banner-inner"},me=["innerHTML"],pe=["innerHTML"],he=r("div",null,null,-1),ve={__name:"bannerEditPage",setup(s){const t=K();y("banner-1");const e=x();return M(()=>{e.selectedBannerId=t.params.id,e.getBannerElementById()}),(a,i)=>(p(),D(W,{class:"q-pa-lg"},{default:c(()=>[r("div",{class:w(["cnt-banner theme-blue blue-bg-image html purple-arrow-l-to-r prospect logo-x-center logo-y-top btn-x-center btn-y-bottom tc-x-center tc-y-bottom",[`size_${n(e).bannerSizes[n(e).selectedBannerIndex].width}x${n(e).bannerSizes[n(e).selectedBannerIndex].height}`]]),style:_({width:n(e).bannerSizes[n(e).selectedBannerIndex].width+"px",height:n(e).bannerSizes[n(e).selectedBannerIndex].height+"px"})},[ce,r("div",ue,[(p(!0),b(A,null,F(n(e).cntElementList,(l,h)=>(p(),b("div",{class:w(["cnt-element",[l.element.cntElementUniqueClass]]),key:h,style:_({width:n(e).bannerSizes[n(e).selectedBannerIndex].width+"px",height:n(e).bannerSizes[n(e).selectedBannerIndex].height+"px"})},[r("div",{class:w(["anm-in animated fadeIn duration-15",[l.element.animationInClasses]])},[r("div",{class:w(["anm-out",[l.element.animationOutClasses]]),style:_({width:n(e).bannerSizes[n(e).selectedBannerIndex].width+"px",height:n(e).bannerSizes[n(e).selectedBannerIndex].height+"px"})},[r("div",{class:"transform-x",style:_({width:n(e).bannerSizes[n(e).selectedBannerIndex].width+"px",height:n(e).bannerSizes[n(e).selectedBannerIndex].height+"px"})},[r("div",{class:"transform-y",style:_({width:n(e).bannerSizes[n(e).selectedBannerIndex].width+"px",height:n(e).bannerSizes[n(e).selectedBannerIndex].height+"px"})},[r("div",{class:w(["ui-img img-01",[l.element.uiCustomClasses]]),style:_({position:"absolute",left:n(e).cntElementStyles[n(e).selectedBanner][l.element.cntElementUniqueClass].left+"px",top:n(e).cntElementStyles[n(e).selectedBanner][l.element.cntElementUniqueClass].top+"px",transformBox:"fill-box",transformOrigin:"0% 0%",transform:"scale("+n(e).cntElementStyles[n(e).selectedBanner][l.element.cntElementUniqueClass].scale/100+")",width:n(e).bannerSizes[n(e).selectedBannerIndex].width+"px",height:n(e).bannerSizes[n(e).selectedBannerIndex].height+"px",backgroundImage:n(e).cntElementStyles[n(e).selectedBanner][l.element.cntElementUniqueClass].bgImg?"url("+n(e).cntElementStyles[n(e).selectedBanner][l.element.cntElementUniqueClass].bgImg+")":""})},[l.innerHTML?(p(),b("div",{key:0,class:"inner",innerHTML:l.innerHTML},null,8,me)):z("",!0),l.innerCSS?(p(),b("div",{key:1,class:"innerCSS",innerHTML:l.innerCSS},null,8,pe)):z("",!0)],6)],4)],4)],6)],2)],6))),128))])],6),he,o(E,{modelValue:n(e).createSizeDialog,"onUpdate:modelValue":i[0]||(i[0]=l=>n(e).createSizeDialog=l)},{default:c(()=>[o(V,{class:"q-dialog-plugin"},{default:c(()=>[o(C,null,{default:c(()=>[o(ee)]),_:1}),o(C,{align:"right"},{default:c(()=>[o(f,{color:"primary",label:"OK"}),S(o(f,{class:"q-ml-sm",color:"primary",label:"Cancel"},null,512),[[q]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:n(e).createCntElDialog,"onUpdate:modelValue":i[1]||(i[1]=l=>n(e).createCntElDialog=l)},{default:c(()=>[o(V,{class:"q-dialog-plugin"},{default:c(()=>[o(C,null,{default:c(()=>[o(de)]),_:1}),o(C,{align:"right"},{default:c(()=>[o(f,{color:"primary",label:"OK"}),S(o(f,{class:"q-ml-sm",color:"primary",label:"Cancel"},null,512),[[q]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{ve as default};