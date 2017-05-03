import ConfigBuilder, { defaultConfigItems } from './ConfigBuilder'

test('should retrive player stats configuration', () => {
  // given
  const configBuilder = new ConfigBuilder({
    year: 2001,
    offset: 13
  })

  // when
  const config = configBuilder.build()

  // then
  expect(config.url).toMatch(/year_min=2001/)
  expect(config.url).toMatch(/year_max=2001/)
  expect(config.url).toMatch(/offset=13/)
  expect(config.config).toEqual(defaultConfigItems)
})
