import scrapeIt from 'scrape-it'

const Scrapper = require('./src/services/Scrapper')
const ConfigBuilder = require('./src/services/ConfigBuilder')
const PlayersStats = require('./src/repositories/PlayersStats')
const CsvExporter = require('./src/services/CsvExporter')
const Runner = require('./src/services/Runner')

const runner = new Runner({
  scrapeIt: scrapeIt,
  ConfigBuilder: ConfigBuilder,
  Exporter: CsvExporter,
  Scrapper: Scrapper,
  Repository: PlayersStats
})

const startYear = 1984
const endYear = 2016

runner.run(startYear, endYear).then(() => console.log('Done! (:'))
