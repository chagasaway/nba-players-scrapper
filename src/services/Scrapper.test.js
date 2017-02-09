import Scrapper from './Scrapper'

test('should scrap with config', () => {
  // given
  let url = 'the-configured-url'
  let scrapperConfig = {
    url: jest.fn().mockReturnValue(url),
    config: { data: 'some-configs' }
  }
  let mockScrapper = jest.fn()
  let scrapper = new Scrapper(scrapperConfig, mockScrapper)
  let params = { data: 'some-params' }

  // when
  scrapper.start(params)

  // then
  expect(scrapperConfig.url).toBeCalled()
  expect(scrapperConfig.url.mock.calls.length).toBe(1)
  expect(scrapperConfig.url).toBeCalledWith(params)
  expect(mockScrapper).toBeCalled()
  expect(mockScrapper.mock.calls.length).toBe(1)
  expect(mockScrapper).toBeCalledWith(url, scrapperConfig.config)
})
