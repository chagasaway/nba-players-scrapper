class Scrapper {
  constructor (ConfigBuilder, scrapeService) {
    this.ConfigBuilder = ConfigBuilder
    this.scrapeService = scrapeService
  }

  start (params) {
    const config = this._config(params)
    return this.scrapeService(config.url, config.config)
  }

  _config (params) {
    const configBuilder = new this.ConfigBuilder(params)
    return configBuilder.build()
  }
}

module.exports = Scrapper
