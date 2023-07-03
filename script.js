// get time

const getTime = () => {
  const currentDate = new Date()
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()
  let seconds = currentDate.getSeconds()

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  return `${hours}:${minutes}:${seconds}`
}

// render time
const renderTime = () => {
  const time = document.querySelector('.time')
  time.textContent = getTime()
}

// update time secondly
setInterval(renderTime, 1000)
