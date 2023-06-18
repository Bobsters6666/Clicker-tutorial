const gemHTML = document.querySelector('.gem')
const gemImgHTML = document.querySelector('.gem-img-container')
let gem = parseFloat(gemHTML.innerHTML)

let clickerCost = document.getElementById('clicker-cost')
let clickerLevel = document.getElementById('clicker-level')
let clickerGem = document.getElementById('clicker-gem')
let cGem = parseFloat(clickerGem.innerHTML)

let pickaxeCost = document.getElementById('pickaxe-cost')
let pickaxeLevel = document.getElementById('pickaxe-level')

let minerCost = document.getElementById('miner-cost')
let minerLevel = document.getElementById('miner-level')

let factoryCost = document.getElementById('factory-cost')
let factoryLevel = document.getElementById('factory-level')

let gpc = 1
let gps = 0

let gpcText = document.getElementById('gpc')
let gpsText = document.getElementById('gps')

function handleClick(event) {
  gem += gpc

  x = event.offsetX
  y = event.offsetY + 40

  newDiv = document.createElement('div')
  newDiv.innerHTML = `+${Math.round(gpc)}`
  newDiv.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
  gemImgHTML.appendChild(newDiv)

  newDiv.classList.add('fade-up')

  timeout(newDiv)
}

const timeout = (div) => {
  setTimeout(() => {
    div.remove()
  }, 800)
}

function buyClicker() {
  if ( gem >= clickerCost.innerHTML ) {
    gem -= clickerCost.innerHTML
    clickerLevel.innerHTML ++

    cGem = cGem * 1.13
    clickerGem.innerHTML = Math.round(cGem)
    gpc += parseFloat(clickerGem.innerHTML)
    clickerCost.innerHTML = Math.round(parseFloat(clickerCost.innerHTML) * 1.2)
  } 
}

function buyPickaxe() {
  if ( gem >= pickaxeCost.innerHTML ) {
    gem -= pickaxeCost.innerHTML
    gps += 3 * 1.14
    pickaxeLevel.innerHTML ++
    pickaxeCost.innerHTML = Math.round(parseFloat(pickaxeCost.innerHTML) * 1.19)
  }
}

function buyMiner() {
  if ( gem >= minerCost.innerHTML ) {
    gem -= minerCost.innerHTML
    gps += 11 * 1.14
    minerLevel.innerHTML ++
    minerCost.innerHTML = Math.round(parseFloat(minerCost.innerHTML) * 1.185)
  }
}

function buyFactory() {
  if ( gem >= factoryCost.innerHTML ) {
    gem -= factoryCost.innerHTML
    gps += 33 * 1.14
    factoryLevel.innerHTML ++
    factoryCost.innerHTML = Math.round(parseFloat(factoryCost.innerHTML) * 1.18)
  }
}

setInterval(() => {
  gem += gps / 10
  gemHTML.innerHTML = Math.round(gem)
  gpsText.innerHTML = Math.round(gps)
  gpcText.innerHTML = Math.round(gpc)
}, 100)