const starStopBtn = document.querySelector('.btn-play')
const resetBtn = document.querySelector('.btn-reset')

let seconds = 0
let minutes = 0
let hours = 0

// variables para duplicar el cero en el cronometro
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

// variables para setInterval y timerStatus
let cronometrar
let iniciado = false

function stopWatch(){
    seconds++

    if(seconds > 59){
        seconds = 0
        minutes++

        if(minutes > 59){
            minutes = 0
            hours++
        }
    }

    // agregando el doble cero
    if(seconds < 10){
        leadingSeconds = '0' + seconds.toString()
    }else{
        leadingSeconds = seconds
    }

    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString()
    }else{
        leadingMinutes = minutes
    }

    if(hours < 10){
        leadingHours = '0' + hours.toString()
    }else{
        leadingHours = hours
    }

    let displayTimer = document.querySelector('.timer')
    displayTimer.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds
}

// setInterval(stopWatch, 1000);


starStopBtn.addEventListener('click',()=>{
    if(iniciado === false){
        cronometrar = setInterval(stopWatch, 1000);
        
        let btnReemplazo = document.getElementsByClassName('btn-play')[0]
        btnReemplazo.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`

        iniciado = true
    }else{ // si ya fue iniciado
        clearInterval(cronometrar)
        
        let btnReemplazo = document.getElementsByClassName('btn-play')[0]
        btnReemplazo.innerHTML = `<i class="fa-regular fa-circle-play"></i>`
        
        iniciado = false
    }
})


resetBtn.addEventListener('click',()=>{
    let btnReemplazo = document.getElementsByClassName('btn-play')[0]
    btnReemplazo.innerHTML = `<i class="fa-regular fa-circle-play"></i>`

    clearInterval(cronometrar)
    seconds = 0
    minutes = 0
    hours = 0

    let timer = document.getElementsByClassName('timer')[0]
    timer.innerText = '00:00:00'
})