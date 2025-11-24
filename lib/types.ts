type Player = {
  id: number;
  name: string;
  position: string;
  team: string;
};

type FantasyTeam = {
  id: number;
  name: string;
  owner: string;
  roster: Player[];
};

type League = {
  id: number;
  name: string;
  season: string;
  teams: FantasyTeam[];
};

type TradeSummary = {
  id: string;
  title: string;
  leagueId: string;
  userTeamName: string;
  tradingWithTeamName: string;
  aiScore: string;
  aiBreakdown: string;
};
