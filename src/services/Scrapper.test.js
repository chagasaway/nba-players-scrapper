import Scrapper from './Scrapper'

test('should build the config and call scrape service', () => {
  // given
  const config = {
    url: 'a-url',
    config: 'a-config'
  }
  const configMock = jest.fn().mockReturnValue(config)
  const builder = {
    build: configMock
  }
  const configBuilderMock = jest.fn()
  const configBuilder = (_params) => {
    configBuilderMock(_params)
    return builder
  }
  const mockScrapper = jest.fn()
  const scrapper = new Scrapper(configBuilder, mockScrapper)
  const params = { data: 'some-params' }

  // when
  scrapper.start(params)

  // then
  expect(configBuilderMock).toBeCalled()
  expect(configBuilderMock.mock.calls.length).toBe(1)
  expect(configBuilderMock).toBeCalledWith(params)
  expect(configMock).toBeCalled()
  expect(configMock.mock.calls.length).toBe(1)
  expect(configMock).toBeCalledWith()
  expect(mockScrapper).toBeCalled()
  expect(mockScrapper.mock.calls.length).toBe(1)
  expect(mockScrapper).toBeCalledWith(config.url, config.config)
})
