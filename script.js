function Time(){
    let hours = document.getElementById("hour")
    let minutes = document.getElementById("minute")
    let seconds = document.getElementById("second")

    let time = new Date()

    hours.innerHTML = `${time.getHours()}`
    minutes.innerHTML = `${time.getMinutes()}`
    seconds.innerHTML = `${time.getSeconds()}`
}

setInterval(()=>{
    Time()
}, 1)

