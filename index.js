const gemHTML = document.querySelector('.gem')
let gem = parseFloat(gemHTML.innerHTML)

let clickerCost = document.getElementById('clicker-cost')
let clickerLevel = document.getElementById('clicker-level')

let passiveGems = 0

function incrementGems() {
  gem ++
}

function buyClicker() {
  if ( gem >= clickerCost.innerHTML ) {
    gem -= clickerCost.innerHTML
    passiveGems += 1
    clickerLevel.innerHTML = parseFloat(clickerLevel.innerHTML) + 1
    clickerCost.innerHTML = Math.round(parseFloat(clickerCost.innerHTML) * 1.2)
  } 
}

setInterval(() => {
  gem += passiveGems / 10
  gemHTML.innerHTML = Math.round(gem)
}, 100)