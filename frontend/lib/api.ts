const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

// get all leagues
export async function fetchLeagues() {
  const res = await fetch(`${API_BASE}/api/leagues`);
  if (!res.ok) {
    throw new Error("Failed to fetch leagues");
  }
  return res.json();
}

// get single league
export async function fetchLeagueById(leagueId: number) {
  const res = await fetch(`${API_BASE}/api/leagues/${leagueId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch specific leagure");
  }
  return res.json();
}
