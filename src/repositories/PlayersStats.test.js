import PlayersStats from './PlayersStats'

test('should add player stat to collection', () => {
  // given
  const repository = new PlayersStats()
  const playerStats = { id: 1, data: 'some-data' }

  // when
  const added = repository.add(playerStats)

  // then
  expect(added).toBeTruthy()
  expect(repository.all().length).toBe(1)
  expect(repository.all()[0]).toBe(playerStats)
})

test('should return players stats collection', () => {
  // given
  const playersStats = [
    { id: 1, data: 'some-data' },
    { id: 2, data: 'another-data' }
  ]
  const repository = new PlayersStats({}, playersStats)

  // when
  const collection = repository.all()

  // then
  expect(collection.length).toBe(2)
  expect(collection).toEqual(expect.arrayContaining(playersStats))
})

test('should export data with a given exporter service', () => {
  // given
  const playersStats = [
    { id: 1, data: 'some-data' },
    { id: 2, data: 'another-data' }
  ]
  const mockExport = jest.fn()
  const exporter = { export: mockExport }
  const Exporter = () => {
    return exporter
  }
  const repository = new PlayersStats(Exporter, playersStats)

  // when
  repository.export()

  // then
  expect(mockExport).toBeCalled()
  expect(mockExport.mock.calls.length).toBe(1)
  expect(mockExport).toBeCalledWith('players_stats', playersStats)
})
