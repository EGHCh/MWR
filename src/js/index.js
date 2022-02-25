const averageWeather = document.querySelector('.main__weather')
const lastSol = document.querySelector(`.date__sol`)
const smplDay = document.querySelector(`.date__day`)
const smplMonth = document.querySelector(`.date__month`)

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0'

fetch(url)
.then(res => res.json())
.then(data => {
  let sol = data[`${data.sol_keys[data.sol_keys.length - 1]}`] //Obtiene la información del ultimo Sol en forma de objeto
  // console.log(sol.AT.av) //Devuelve la t° media del día
  // console.log(data.sol_keys[data.sol_keys.length - 1])//Devuelve el el ultimo Sol disponible como String
  let av = parseInt(sol.AT.av) //Devuelve temperatura media del día como Int.
  // console.log(av)
  let pWeather = document.createElement(`p`)
  pWeather.innerHTML = `${av}<span>c</span>`
  averageWeather.appendChild(pWeather)

  let pSol = document.createElement(`p`)  
  pSol.className = `date__value`
  pSol.innerHTML = data.sol_keys[data.sol_keys.length - 1]
  lastSol.appendChild(pSol)
  
  //Last sample Earth Date
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
  // console.log(date)
})
.catch(err => console.log(err))