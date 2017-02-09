import PlayersStats from './PlayersStats'

test('should add player stat to collection', () => {
  // given
  let repository = new PlayersStats([])
  let playerStats = { id: 1, data: 'some-data' }

  // when
  let added = repository.add(playerStats)

  // then
  expect(added).toBeTruthy()
  expect(repository.all().length).toBe(1)
  expect(repository.all()[0]).toBe(playerStats)
})

test('should return players stats collection', () => {
  // given
  let playersStats = [
    { id: 1, data: 'some-data' },
    { id: 2, data: 'another-data' }
  ]
  let repository = new PlayersStats(playersStats)

  // when
  let collection = repository.all()

  // then
  expect(collection.length).toBe(2)
  expect(collection).toEqual(expect.arrayContaining(playersStats))
})

test('should export data with a given exporter service', () => {
  // given
  let playersStats = [
    { id: 1, data: 'some-data' },
    { id: 2, data: 'another-data' }
  ]
  let mockExport = jest.fn()
  let repository = new PlayersStats(playersStats, { export: mockExport })

  // when
  repository.export()

  // then
  expect(mockExport).toBeCalled()
  expect(mockExport.mock.calls.length).toBe(1)
  expect(mockExport).toBeCalledWith('players_stats', playersStats)
})
