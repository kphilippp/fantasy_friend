// app/leagues/[leagueId]/teams/[teamId]/page.tsx
import Link from "next/link";
import { mockLeagues } from "@/lib/mockData";

type TeamPageProps = {
  params: { leagueId: string; teamId: string };
};

export default function TeamPage({ params }: TeamPageProps) {
  const leagueIdNum = Number(params.leagueId);
  const teamIdNum = Number(params.teamId);

  const league = mockLeagues.find((l) => l.id === leagueIdNum);
  const team = league?.teams.find((t) => t.id === teamIdNum);

  if (!league || !team) {
    return (
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Team not found</h1>
        <Link
          href={`/leagues/${params.leagueId}`}
          className="text-sm underline text-gray-300"
        >
          Back to league
        </Link>
      </main>
    );
  }

  const totalPlayers = team.roster.length;
  const positionCounts = team.roster.reduce<Record<string, number>>(
    (acc, player) => {
      acc[player.position] = (acc[player.position] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <main className="p-8 space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{team.name}</h1>
          <p className="text-gray-400">
            Owner: {team.owner} • League: {league.name}
          </p>
        </div>
        <Link
          href={`/leagues/${league.id}`}
          className="text-sm underline text-gray-300"
        >
          Back to {league.name}
        </Link>
      </header>

      {/* Summary */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="border border-gray-800 rounded-xl p-4">
          <h2 className="text-sm text-gray-400">Total Players</h2>
          <p className="mt-2 text-2xl font-semibold">{totalPlayers}</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-4 md:col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">By Position</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {Object.entries(positionCounts).map(([pos, count]) => (
              <span
                key={pos}
                className="px-3 py-1 rounded-full border border-gray-700"
              >
                {pos}: {count}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roster table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Roster</h2>
        <div className="overflow-x-auto border border-gray-800 rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-4 py-2 text-left">Player</th>
                <th className="px-4 py-2 text-left">Position</th>
                <th className="px-4 py-2 text-left">NFL Team</th>
              </tr>
            </thead>
            <tbody>
              {team.roster.map((player) => (
                <tr key={player.id} className="border-t border-gray-800">
                  <td className="px-4 py-2">{player.name}</td>
                  <td className="px-4 py-2">{player.position}</td>
                  <td className="px-4 py-2">{player.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
