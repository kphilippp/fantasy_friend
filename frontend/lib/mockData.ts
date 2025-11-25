import type { League, TradeSummary } from "./types";

export const mockLeagues: League[] = [
  {
    id: 1,
    name: "MTCFB",
    season: "2025",
    teams: [
      {
        id: 101,
        name: "Holy Hail Marys",
        owner: "Kevin",
        roster: [
          { id: 1, name: "CeeDee Lamb", position: "WR", team: "DAL" },
          { id: 2, name: "Bijan Robinson", position: "RB", team: "ATL" },
          { id: 3, name: "Anthony Richardson", position: "QB", team: "IND" },
          { id: 4, name: "Sam LaPorta", position: "TE", team: "DET" },
        ],
      },
      {
        id: 102,
        name: "Sunday School Sweepers",
        owner: "Jadon",
        roster: [
          { id: 5, name: "Justin Jefferson", position: "WR", team: "MIN" },
          { id: 6, name: "Breece Hall", position: "RB", team: "NYJ" },
          { id: 7, name: "CJ Stroud", position: "QB", team: "HOU" },
          { id: 8, name: "Kyle Pitts", position: "TE", team: "ATL" },
        ],
      },
      {
        id: 103,
        name: "Choir Loft Champions",
        owner: "Mahdi",
        roster: [
          { id: 9, name: "Amon-Ra St. Brown", position: "WR", team: "DET" },
          { id: 10, name: "Saquon Barkley", position: "RB", team: "PHI" },
          { id: 11, name: "Jalen Hurts", position: "QB", team: "PHI" },
          { id: 12, name: "George Kittle", position: "TE", team: "SF" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Work Friends League",
    season: "2025",
    teams: [
      {
        id: 201,
        name: "Office Offense",
        owner: "Alex",
        roster: [
          { id: 13, name: "Ja'Marr Chase", position: "WR", team: "CIN" },
          { id: 14, name: "Jonathan Taylor", position: "RB", team: "IND" },
          { id: 15, name: "Josh Allen", position: "QB", team: "BUF" },
          { id: 16, name: "Mark Andrews", position: "TE", team: "BAL" },
        ],
      },
      {
        id: 202,
        name: "Desk Job Defense",
        owner: "Sam",
        roster: [
          { id: 17, name: "Garrett Wilson", position: "WR", team: "NYJ" },
          { id: 18, name: "Tony Pollard", position: "RB", team: "TEN" },
          { id: 19, name: "Joe Burrow", position: "QB", team: "CIN" },
          { id: 20, name: "Dallas Goedert", position: "TE", team: "PHI" },
        ],
      },
    ],
  },
];
export const mockTrades: TradeSummary[] = [
  {
    id: "trade-1",
    leagueId: "1", // string version of league.id
    title: "Lamb + Bijan for Jefferson + Hall",
    userTeamName: "Holy Hail Marys",
    tradingWithTeamName: "Sunday School Sweepers",
    aiScore: "0.78",
    aiBreakdown:
      "This trade slightly favors you. You upgrade at WR with Jefferson while giving up a small amount of RB depth. Overall, your weekly ceiling increases but your RB position becomes thinner.",
  },
  {
    id: "trade-2",
    leagueId: "1",
    title: "Anthony Richardson for CJ Stroud",
    userTeamName: "Holy Hail Marys",
    tradingWithTeamName: "Sunday School Sweepers",
    aiScore: "0.52",
    aiBreakdown:
      "This trade is close to even. Richardson offers more rushing upside but higher injury and volatility risk, while Stroud gives a safer weekly floor in most projections.",
  },
  {
    id: "trade-3",
    leagueId: "2",
    title: "Ja'Marr Chase for Garrett Wilson + Pollard",
    userTeamName: "Office Offense",
    tradingWithTeamName: "Desk Job Defense",
    aiScore: "0.60",
    aiBreakdown:
      "You gain depth with a starting RB and WR while giving up the best player in the deal. This is solid if your roster is thin, but a slight downgrade in pure top-end talent.",
  },
];
