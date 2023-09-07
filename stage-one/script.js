const dayEl = document.querySelector('.day')
const timeEl = document.querySelector('.time')

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



let date = new Date()
dayEl.innerHTML = daysOfWeek[date.getDay()]

setInterval(() => {
    date = new Date()
let minute = date.getUTCMinutes()
let hr = date.getUTCHours()
let sec = date.getUTCSeconds()
let mil = date.getUTCMilliseconds()

// format all of them 
hr = hr >= 10 ? `${hr}` : `0${hr}`
minute = minute >= 10 ? `${minute}` : `0${minute}`
sec = sec >= 10 ? `${sec}` : `0${sec}`
mil = mil < 10 ? `00${mil}` : mil < 100 ? `0${mil}` : `${mil}`

timeEl.innerHTML = `${hr}:${minute}:${sec}:${mil}`

// console.log(hr, minute, sec, mil)
}, 1)