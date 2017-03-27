class Scrapper {
  constructor (scrapperConfig, scrapeService) {
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
