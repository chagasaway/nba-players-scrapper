import Runner from './Runner'

test('should run scrapper for givens years and export results', () => {
  // given
  const ConfigBuilder = {}
  const Exporter = {}
  const scrapeIt = {}
  const firstResult = {
    items: [
      'item 1'
    ]
  }
  const lastResult = {
    items: []
  }
  const scrapperMock = jest.fn()
                           .mockReturnValueOnce(Promise.resolve(firstResult))
                           .mockReturnValue(Promise.resolve(lastResult))
  const scrapper = {
    start: scrapperMock
  }
  const scrapperConstructorMock = jest.fn()
  const Scrapper = (configBuilder, scrapeService) => {
    scrapperConstructorMock(configBuilder, scrapeService)
    return scrapper
  }

  const repositoryExportMock = jest.fn().mockReturnValue(Promise.resolve(true))
  const repositoryAddMock = jest.fn()
  const repository = {
    export: repositoryExportMock,
    add: repositoryAddMock
  }
  const repositoryConstructorMock = jest.fn()
  const Repository = (Exporter) => {
    repositoryConstructorMock(Exporter)
    return repository
  }

  const runner = new Runner({
    scrapeIt: scrapeIt,
    ConfigBuilder: ConfigBuilder,
    Exporter: Exporter,
    Scrapper: Scrapper,
    Repository: Repository
  })

  // when
  return runner.run(1984, 1984).then(() => {
    // then
    expect(scrapperMock).toBeCalled()
    expect(scrapperMock.mock.calls.length).toBe(2)
    expect(scrapperMock).toBeCalledWith({ year: 1984, offset: 0 })
    expect(scrapperMock).lastCalledWith({ year: 1984, offset: 100 })
    expect(scrapperConstructorMock).toBeCalled()
    expect(scrapperConstructorMock.mock.calls.length).toBe(1)
    expect(scrapperConstructorMock).toBeCalledWith(ConfigBuilder, scrapeIt)
    expect(repositoryConstructorMock).toBeCalled()
    expect(repositoryConstructorMock.mock.calls.length).toBe(1)
    expect(repositoryConstructorMock).toBeCalledWith(Exporter)
    expect(repositoryAddMock).toBeCalledWith(firstResult.items[0])
  })
})
