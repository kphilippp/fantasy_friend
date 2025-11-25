// lib/types.ts
export type Player = {
  id: number;
  name: string;
  position: string;
  team: string;
};

export type FantasyTeam = {
  id: number;
  name: string;
  owner: string;
  roster: Player[];
};

export type League = {
  id: number;
  name: string;
  season: string;
  teams: FantasyTeam[];
};

export type TradeSummary = {
  id: string;
  title: string;
  leagueId: string;
  userTeamName: string;
  tradingWithTeamName: string;
  aiScore: string;
  aiBreakdown: string;
};
