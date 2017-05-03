class Runner {
  constructor (params) {
    this.offset = 0
    this.promises = []
    this.scrapper = new params.Scrapper(params.ConfigBuilder, params.scrapeIt)
    this.repository = new params.Repository(params.Exporter)
  }

  run (startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
      this.promises.push(
        this._scrap(year)
      )
    }

    Promise.all(this.promises).then(() => {
      return this.repository.export()
    })
  }

  _scrap (year, offset = 0) {
    console.log(`Running for year: ${year} and ${offset} offset...`)
    const params = { year: year, offset: offset }
    return this.scrapper.start(params).then((result) => {
      if (!result.items.length) {
        return Promise.resolve(true)
      }

      this._addItemsToRepository(result.items)

      return this._scrap(year, offset + 100)
    })
  }

  _addItemsToRepository (items) {
    console.log(`Adding ${items.length} items to repository...`)
    items.map(this.repository.add.bind(this.repository))
  }
}

module.exports = Runner
