'use strict'

const json2csv = require('json2csv')
const path = require('path')
const fs = require('fs')

class CsvExporter {
  constructor(directory) {
    this.directory = directory || path.join(__dirname, '..', '..', 'data')
  }

  export(filename, items) {
    console.log(`Exported ${items.length} items to ${filename}`)
    return fs.writeFile(
      `${this.directory}/${filename}.csv`,
      this._csv(
        items, this._fields(items)
      ),
      (err) => {
        if (err) {
          return console.log(err)
        }
        console.log('Exported!')
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
