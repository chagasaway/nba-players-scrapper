'use strict'

const _queryParams = (year, offset) => {
  let query = `request=1&match=single&type=totals&per_minute_base=36&per_poss_base=100&lg_id=NBA&is_playoffs=N&year_min=${year}&year_max=${year}`
  query += '&franch_id=&season_start=1&season_end=-1&age_min=0&age_max=99&shoot_hand=&height_min=0&height_max=99&birth_country_is=Y&birth_country=&birth_state=&college_id=&draft_year='
  query += '&is_active=&debut_yr_aba_start=&debut_yr_aba_end=&debut_yr_nba_start=&debut_yr_nba_end=&is_hof=&is_as=&as_comp=gt&as_val=&award=&pos_is_g=Y&pos_is_gf=Y&pos_is_f=Y&pos_is_fg=Y'
  query += '&pos_is_fc=Y&pos_is_c=Y&pos_is_cf=Y&qual=&c1stat=&c1comp=&c1val=&c2stat=&c2comp=&c2val=&c3stat=&c3comp=&c3val=&c4stat=&c4comp=&c4val=&c5stat=&c5comp=&c6mult=1.0&c6stat='
  return `${query}&order_by=player&order_by_asc=&offset=${offset}`
}

module.exports = {
  url: (params) => {
    let baseUrl = 'http://www.basketball-reference.com/play-index/psl_finder.cgi'
    let query = _queryParams(params.year, params.offset)
    return `${baseUrl}?${query}`
  },
  config: {
    items: {
      listItem: '#stats tbody tr:not(.thead)',
      data: {
        ranker: 'th[data-stat="ranker"]',
        season: 'td[data-stat="season"]',
        age: 'td[data-stat="age"]',
        teamId: 'td[data-stat="team_id"]',
        leagueId: 'td[data-stat="lg_id"]',
        player: 'td[data-stat="player"]',
        games: 'td[data-stat="g"]',
        gamesStarted: 'td[data-stat="gs"]',
        minutesPlayed: 'td[data-stat="mp"]',
        fieldGoals: 'td[data-stat="fg"]',
        fieldGoalAttempts: 'td[data-stat="fga"]',
        twoPointFieldGoals: 'td[data-stat="fg2"]',
        twoPointFieldGoalAttempts: 'td[data-stat="fg2a"]',
        threePointFieldGoals: 'td[data-stat="fg3"]',
        threePointFieldGoalAttempts: 'td[data-stat="fg3a"]',
        freeThrows: 'td[data-stat="ft"]',
        freeThrowAttempts: 'td[data-stat="fta"]',
        offensiveRebounds: 'td[data-stat="orb"]',
        defensiveRebounds: 'td[data-stat="drb"]',
        totalRebounds: 'td[data-stat="trb"]',
        assists: 'td[data-stat="ast"]',
        steals: 'td[data-stat="stl"]',
        blocks: 'td[data-stat="blk"]',
        turnovers: 'td[data-stat="tov"]',
        personalFouls: 'td[data-stat="pf"]',
        points: 'td[data-stat="pts"]',
        fieldGoalPercentage: 'td[data-stat="fg_pct"]',
        twoFieldGoalPercentage: 'td[data-stat="fg2_pct"]',
        threeFieldGoalPercentage: 'td[data-stat="fg3_pct"]',
        effectiveFieldGoalPercentage: 'td[data-stat="efg_pct"]',
        freeThrowPercentage: 'td[data-stat="ft_pct"]',
        trueShootingPercentage: 'td[data-stat="ts_pct"]'
      }
    }
  }
}
