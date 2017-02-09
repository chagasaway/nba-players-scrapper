import json2csv from 'json2csv'
import path from 'path'
import fs from 'fs'

class CsvExporter {
  constructor(directory) {
    this.directory = directory || path.join(__dirname, '..', '..', 'data')
  }

  export(filename, items) {
    return fs.writeFile(
      `${this.directory}/${filename}.csv`,
      this._csv(
        items, this._fields(items)
      ),
      (err) => {
        if (err) {
          return console.log(err)
        }
      }
    )
  }

  _csv(data, fields) {
    return json2csv({ data: data, fields: fields })
  }

  _fields(items) {
    return Object.keys(items[0])
  }
}

module.exports = CsvExporter
