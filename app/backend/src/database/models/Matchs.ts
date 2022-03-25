import { DataTypes, Model } from 'sequelize';
import db from '.';
import Clubs from './Clubs';

class Matchs extends Model {
  public id: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;

  public inProgress: boolean;
}

Matchs.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    field: 'home_team',
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    field: 'home_team_goals',
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    field: 'away_team',
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    field: 'away_team_goals',
    type: DataTypes.INTEGER,
  },
  inProgress: {
    field: 'in_progress',
    type: DataTypes.BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matchs',
  timestamps: false,
});

Matchs.belongsTo(Clubs, { foreignKey: 'homeTeam', as: 'id' });
Matchs.belongsTo(Clubs, { foreignKey: 'awayTeam', as: 'id' });

Clubs.hasMany(Matchs, { foreignKey: 'id', as: 'homeTeam' });
Clubs.hasMany(Matchs, { foreignKey: 'id', as: 'awayTeam' });

export default Matchs;
