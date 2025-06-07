/**
 * en este script podemos practicar como modificar el dom y el cssom
 * aprender sobre el manejo de eventos desde el frontend
 * 
*/

console.log("test")

//esta funcion identifica los audios de cada tecla
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) {return};

    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")

}

//esta funcion elimina la clase que se agraga cuando se realiza el evento 
//que ocacionamos cuado oprimimos una de las teclas con audios 
function removeTransition(e){
    if(e.propertyName !== "transform"){ return}
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend",removeTransition))

window.addEventListener("keydown", playSound) 