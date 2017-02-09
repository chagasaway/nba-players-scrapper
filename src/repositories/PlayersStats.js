'use strict'

class PlayersStats {
  constructor(exporter) {
    this.exporter = new exporter()
    this.playersStats = []
  }

  add(playerStat) {
    this.playersStats.push(playerStat)
  }

  export(year) {
    return this.exporter.export('players_stats', this.playersStats)
  }
}

module.exports = PlayersStats
