const gemHTML = document.querySelector('.gem')
let gem = parseFloat(gemHTML.innerHTML)

let clickerCost = document.getElementById('clicker-cost')
let clickerLevel = document.getElementById('clicker-level')

let pickaxeCost = document.getElementById('pickaxe-cost')
let pickaxeLevel = document.getElementById('pickaxe-level')

let minerCost = document.getElementById('miner-cost')
let minerLevel = document.getElementById('miner-level')

let passiveGems = 0

function incrementGems() {
  gem ++
}

function buyClicker() {
  if ( gem >= clickerCost.innerHTML ) {
    gem -= clickerCost.innerHTML
    passiveGems += 1 * 1.13
    clickerLevel.innerHTML ++
    clickerCost.innerHTML = Math.round(parseFloat(clickerCost.innerHTML) * 1.2)
  } 
}

function buyPickaxe() {
  if ( gem >= pickaxeCost.innerHTML ) {
    gem -= pickaxeCost.innerHTML
    passiveGems += 3 * 1.14
    pickaxeLevel.innerHTML ++
    pickaxeCost.innerHTML = Math.round(parseFloat(clickerCost.innerHTML) * 1.19)
  }
}

function buyMiner() {
  if ( gem >= minerCost.innerHTML ) {
    gem -= minerCost.innerHTML
    passiveGems += 3 * 1.14
    minerLevel.innerHTML ++
    minerCost.innerHTML = Math.round(parseFloat(clickerCost.innerHTML) * 1.19)
  }
}

setInterval(() => {
  gem += passiveGems / 10
  gemHTML.innerHTML = Math.round(gem)
}, 100)