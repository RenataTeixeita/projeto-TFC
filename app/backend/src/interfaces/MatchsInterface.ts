export interface InputMatch {
  homeTeam: number,
  awayTeam:number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface OutputMatch extends InputMatch{
  id: number,
}
