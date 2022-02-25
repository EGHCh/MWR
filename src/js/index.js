const averageWeather = document.querySelector(`.weather`)
const averageWind = document.querySelector(`.wind`)
const averagePressure = document.querySelector(`.pressure`)
const lastSol = document.querySelector(`.date__sol`)
const smplDay = document.querySelector(`.date__day`)
const smplMonth = document.querySelector(`.date__month`)

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0'

fetch(url)
.then(res => res.json())
.then(data => {
  let sol = data[`${data.sol_keys[data.sol_keys.length - 1]}`] //Obtiene la información del ultimo Sol en forma de objeto

  let pWeather = document.createElement(`p`)
  pWeather.innerHTML = `${parseInt(sol.AT.av)}<span>c</span>`
  averageWeather.appendChild(pWeather)

  let pWind = document.createElement(`p`)
  pWind.innerHTML =  `${sol.HWS.av}<span>m/s</span>`
  averageWind.appendChild(pWind)

  let pPressure = document.createElement(`p`)
  pPressure.innerHTML =  `${parseInt(sol.PRE.av)}<span>Pa</span>`
  averagePressure.appendChild(pPressure)

  let pSol = document.createElement(`p`)  
  pSol.className = `date__value`
  pSol.innerHTML = data.sol_keys[data.sol_keys.length - 1]
  lastSol.appendChild(pSol)
  
  //Last sample - Earth Date
  let date = new Date(sol[`First_UTC`])

  let day = date.getDate()
  let pDay = document.createElement(`p`)
  pDay.className = `date__value`
  pDay.innerHTML = day
  smplDay.appendChild(pDay)

  let month = months[date.getMonth()]
  let pMonth = document.createElement(`p`)
  pMonth.className = `date__value`
  pMonth.innerHTML = month
  smplMonth.appendChild(pMonth)
})
.catch(err => console.log(err))