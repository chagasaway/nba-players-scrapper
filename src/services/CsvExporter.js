import json2csv from 'json2csv'
import path from 'path'
import fs from 'fs'

const baseDirectory = path.join(__dirname, '..', '..', 'data')

class CsvExporter {
  constructor (fileSystem = fs, directory = baseDirectory) {
    this.fileSystem = fileSystem
    this.directory = directory
  }

  export (filename, items) {
    return this.fileSystem.writeFile(
      this._filename(filename),
      this._csv(items)
    )
  }

  _filename (filename) {
    return `${this.directory}/${filename}.csv`
  }

  _csv (items) {
    const fields = this._fields(items)
    return json2csv({ data: items, fields: fields })
  }

  _fields (items) {
    if (!items.length) {
      return []
    }
    return Object.keys(items[0])
  }
}

module.exports = CsvExporter
