
function myFunc() {
let countDownDate = new Date("2024-01-01")  - new Date();

document.getElementById("daysNumber").innerHTML = Math.floor(countDownDate / (1000 * 60 * 60 * 24))
document.getElementById("hoursNumber").innerHTML = Math.floor(countDownDate % (1000 * 60 * 60 * 24) /(1000 * 60 * 60))
document.getElementById("minutesNumber").innerHTML = Math.floor(countDownDate % (1000 * 60 * 60) / (1000 * 60))
document.getElementById("secondsNumber").innerHTML = Math.floor(countDownDate % (1000*60) / 1000)


}

setInterval(myFunc, 1000)
