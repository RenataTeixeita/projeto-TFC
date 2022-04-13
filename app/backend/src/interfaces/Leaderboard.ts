export interface MatchsI {
  dataValues: {
    homeTeamGoals: number;
    awayTeamGoals: number;
  }
}

export interface LeaderboardI {
  clubName: string;
  homeClub: MatchsI[];
}

export interface SetData {
  clubName: string;
  totalPoints: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface TeamI {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
