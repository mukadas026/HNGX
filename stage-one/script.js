const dayEl = document.querySelector('.day')
const timeEl = document.querySelector('.time')

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


const date = new Date()

dayEl.innerHTML = daysOfWeek[date.getDay()]

console.log(date.getUTCMilliseconds())