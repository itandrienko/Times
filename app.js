const timeItem = document.querySelector('.app__timer')
const fullButton = document.getElementById('full')
const dateButton = document.getElementById('date')
const timeButton = document.getElementById('time')
let mode = 'time'

update()

setInterval(()=>{
  update()
}, 1000)

fullButton.onclick = () => {
  mode = 'full'
  update()
  fullButton.classList.add('app__button', 'button--action')
  dateButton.className = 'app__button'
  timeButton.className = 'app__button'
}

dateButton.onclick = () => {
  mode = 'date'
  update()
  dateButton.classList.add('app__button', 'button--action')
  fullButton.className = 'app__button'
  timeButton.className = 'app__button'
}

timeButton.onclick = () => {
  mode = 'time'
  update()
  timeButton.classList.add('app__button', 'button--action')
  fullButton.className = 'app__button'
  dateButton.className = 'app__button'
}

function update() {
  timeItem.textContent = format(mode)
}

function format(formatMode) {
  const now = new Date()

  switch(formatMode) {
    case 'time': return now.toLocaleTimeString()
    case 'date': return now.toLocaleDateString()
    case 'full': return now.toLocaleTimeString() + ' ' + now.toLocaleDateString()
  }
}