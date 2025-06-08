// en este aprenderemos manipulacion de estilos
//
// y crearemos un reloj con la formula geometrica 
//
//
//
//
//
//
const secondHand = document.querySelector(".hand-sec")
const minHand = document.querySelector(".hand-min")
const hourHand = document.querySelector(".hand-min")

function setDate() {
    const now = new Date()

    const secons = now.getSeconds()
    const seconsDegrees = ((secons/60)*360)+90
    secondHand.style.transform = `rotate(${seconsDegrees}deg)`
    
    const min = now.getMinutes()
    const minDegrees = ((min/60)*360)+90
    minHand.style.transform = `rotate(${minDegrees}deg)`
    
    const hour = now.getHours()
    const hourDegrees = ((hour/60)*360)+90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}



setInterval(setDate,1000)