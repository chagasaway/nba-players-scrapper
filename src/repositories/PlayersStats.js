class PlayersStats {
  constructor (playersStats = [], exporterService = {}) {
    this.exporterService = exporterService
    this.playersStats = playersStats
  }

  add (playerStat) {
    return this.playersStats.push(playerStat)
  }

  all () {
    return this.playersStats.slice(0)
  }

  export () {
    return this.exporterService.export('players_stats', this.playersStats)
  }
}

module.exports = PlayersStats
