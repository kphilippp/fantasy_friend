// app/leagues/[leagueId]/page.tsx
import Link from "next/link";
import { mockLeagues } from "@/lib/mockData";

type LeaguePageProps = {
  params: { leagueId: string };
};

export default function LeaguePage({ params }: LeaguePageProps) {
  const numericId = Number(params.leagueId);
  const league = mockLeagues.find((l) => l.id === numericId);

  if (!league) {
    return (
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">League not found</h1>
        <p className="text-gray-400">
          We couldn&apos;t find a league with ID {params.leagueId}.
        </p>
        <Link href="/leagues" className="text-sm underline text-gray-300">
          Back to your leagues
        </Link>
      </main>
    );
  }

  return (
    <main className="p-8 space-y-8">
      {/* Header with league info + trade builder button */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{league.name}</h1>
          <p className="text-gray-400">Season {league.season}</p>
        </div>

        <Link
          href={`/leagues/${league.id}/trade-builder`}
          className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium"
        >
          Open Trade Builder
        </Link>
      </header>

      {/* Teams in this league */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Teams</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {league.teams.map((team) => (
            <Link
              key={team.id}
              href={`/leagues/${league.id}/teams/${team.id}`}
              className="border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition"
            >
              <h3 className="font-semibold">{team.name}</h3>
              <p className="text-sm text-gray-400">Owner: {team.owner}</p>
              <p className="text-sm text-gray-400 mt-1">
                Roster size: {team.roster.length}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
