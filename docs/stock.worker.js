importScripts('lodash.min.js')
let second = 0

let time = 0
let leverage = 1
let money = 0
let price = 1
let stock = 0
let hands = 0
let marketHistory = [{
  open: 1,
  close: 1,
  high: 1,
  low: 1,
  time: Date.now()
}]

const updateMarkerPrice = () => {
  let seed = _.random(-98,100)
  stock = _.round(stock + hands * price * (seed/10000) * leverage, 2)
  price = _.round(price*(1+seed/10000), 4)
  if (stock <= 0) {
    hands = 0
    stock = 0
  }
  second += 1
  if (second >= 60) {
    marketHistory.push({
      time: Date.now(),
      open: price,
      close: price,
      high: price,
      low: price
    })
    second = 0
  } else {
    let marketNow = _.last(marketHistory)
    marketNow.high < price ? marketNow.high = price : ''
    marketNow.low > price ? marketNow.low = price : ''
    marketNow.close = price
  }
  if (marketHistory.length > 60) marketHistory.shift()
}

const stockBuy = (trade) => {
  hands += _.round(trade / price)
  stock += trade
  money -= trade
}

const stockSell = (trade) => {
  hands -= _.round(trade / price)
  stock -= trade
  money += trade
}

onmessage = (event)=>{
  let [action, trade, lr] = event.data
  switch (action) {
    case 'buy':
      leverage = lr
      stockBuy(trade)
      break
    case 'sell':
      leverage = lr
      stockSell(trade)
      break
    case 'spend':
      money -= trade
      break
  }
}

setInterval(()=>{
  time += 1
  money += 1
  updateMarkerPrice()
  postMessage({
    money,
    price,
    stock,
    hands,
    marketHistory,
    revenueRatio: _.round((money+stock) / time - 1, 4)
  })
}, 1000)