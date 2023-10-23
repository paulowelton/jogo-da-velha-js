let vez = document.querySelector(".vez")
let energia1 = true
let energia2 = false
let jog1 = "x"
let jog2 = "o"
let lig1 = document.querySelector(".ligado1")
let lig2 = document.querySelector(".ligado2")
let campos = document.querySelectorAll(".div")
let reset = document.querySelector(".reset")



campos.forEach((div) =>{
    div.addEventListener("click", ()=>{
    if(energia1 == true){
        div.innerHTML = jog1
        energia1 = false
    }else{
        div.innerHTML = jog2
        energia2 = false
        energia1 = true
    }
    reset.addEventListener("click",()=>{
    div.innerHTML = ""
    energia1 = true
    energia2 = false
})
    function ganhar(){
     
    }
})
})