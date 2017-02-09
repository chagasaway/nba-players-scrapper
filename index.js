'use strict'

const Scrapper = require('./src/Scrapper')
const PlayersStatsConfig = require('./src/configs/PlayersStats')
const PlayersStats = require('./src/repositories/PlayersStats')
const CsvExporter = require('./src/services/CsvExporter')

console.log('Started...')

const app = new Scrapper(PlayersStatsConfig)
const repository = new PlayersStats(CsvExporter)

let offset = 0
let promises = []

let _delay = (t) => {
  return new Promise(function(resolve) {
    setTimeout(resolve, t)
  })
}

const _scrap = (year, offset) => {
  console.log(`Running with year: ${year} and ${offset} offset...`)
  return app.start({ year: year, offset: offset }).then((result) => {
    console.log(`Scrapped ${result.items.length} items...`)
    if (result.items.length == 0) {
      console.log('Exporting data...')
      return repository.export(year)
    }
    console.log('Adding items to repository...')
    result.items.map(repository.add.bind(repository))
    offset += 100

    return _delay(5000).then(() => {
      _scrap(year, offset)
    })
  })
}

for(let year = 1984; year <= 2016; year++) {
  offset = 0
  promises.push(
    _scrap(year, offset)
  )
}

Promise.all(promises).then(() => {
  console.log('Done!')
})
