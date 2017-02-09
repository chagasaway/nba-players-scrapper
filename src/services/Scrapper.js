import scrapeIt from 'scrape-it'

class Scrapper {
  constructor (scrapperConfig, scrapeService = scrapeIt) {
    this.scrapperConfig = scrapperConfig
    this.scrapeService = scrapeService
  }

  start (params) {
    return this.scrapeService(
      this.scrapperConfig.url(params), this.scrapperConfig.config
    )
  }
}

module.exports = Scrapper
