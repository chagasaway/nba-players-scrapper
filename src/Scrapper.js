'use strict'

const scrapeIt = require('scrape-it')

class Scrapper {
  constructor(scrapperConfig) {
    this.scrapperConfig = scrapperConfig
  }

  start(params) {
    return scrapeIt(
      this.scrapperConfig.url(params), this.scrapperConfig.config
    );
  }
}

module.exports = Scrapper
