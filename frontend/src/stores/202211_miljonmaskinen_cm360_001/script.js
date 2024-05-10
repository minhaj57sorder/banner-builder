

let iconN = document.querySelectorAll(".gameIconLine01N,.gameIconLine02N,.gameIconLine03N,.gameIconLine04N,.gameIconLine05N")
let iconF = document.querySelectorAll(".gameIconLine01F1,.gameIconLine02F1,.gameIconLine03F1,.gameIconLine04F1,.gameIconLine05F1")

for(let i = 0; i < iconN.length; i++){
iconN[i].addEventListener("animationend",function(){
        iconN[i].style.transition = "0.3s"
        iconF[i].style.opacity = "0"
        iconN[i].style.opacity = "0.6"
    })
}


