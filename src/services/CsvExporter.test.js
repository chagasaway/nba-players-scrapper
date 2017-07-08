import CsvExporter from './CsvExporter'
import fs from 'fs'

jest.mock('fs')

test('should export an empty CSV file', () => {
  // given
  const directory = '/data'
  const filename = 'a-filename'
  const items = []
  const writeFileMock = jest.fn()
  const fileSystem = {
    writeFile: writeFileMock
  }
  const exporter = new CsvExporter(fileSystem, directory)

  // when
  exporter.export(filename, items)

  // then
  expect(writeFileMock).toBeCalled()
  expect(writeFileMock.mock.calls.length).toBe(1)
  expect(writeFileMock).toBeCalledWith(`${directory}/${filename}.csv`, '')
})

test('should export items in a CSV file', () => {
  // given
  const directory = '/data'
  const filename = 'a-filename'
  const items = [{ a: '1', b: '2' }, { a: '98', b: '99' }]
  const writeFileMock = jest.fn()
  const fileSystem = {
    writeFile: writeFileMock
  }
  const exporter = new CsvExporter(fileSystem, directory)

  // when
  exporter.export(filename, items)

  // then
  expect(writeFileMock).toBeCalled()
  expect(writeFileMock.mock.calls.length).toBe(1)
  expect(writeFileMock).toBeCalledWith(
    `${directory}/${filename}.csv`,
    '"a","b"\n"1","2"\n"98","99"'
  )
})

test('should export items in a CSV file without mocks', () => {
  // given
  const filename = 'csv-export-test'
  const items = [{ a: '1', b: '2' }, { a: '98', b: '99' }]
  const exporter = new CsvExporter()

  // when
  exporter.export(filename, items)

  // then
  expect(fs.writeFile).toBeCalled()
})
