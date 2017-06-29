class PlayersStats {
  constructor (ExporterService = {}, playersStats = []) {
    this.ExporterService = ExporterService
    this.playersStats = playersStats
  }

  add (playerStat) {
    return this.playersStats.push(playerStat)
  }

  all () {
    return this.playersStats.slice(0)
  }

  export () {
    return new this.ExporterService().export('players_stats', this.playersStats)
  }
}

module.exports = PlayersStats
