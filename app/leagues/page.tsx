// app/leagues/page.tsx
import Link from "next/link";
import { mockLeagues } from "@/lib/mockData";

export default function LeaguesPage() {
  const hasLeagues = mockLeagues.length > 0;

  return (
    <main className="p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Your Leagues</h1>
        <p className="text-gray-400 mt-2">
          These are the leagues currently connected to Fantasy Friend.
        </p>
      </header>

      {!hasLeagues && (
        <p className="text-gray-400">
          No leagues connected yet. Once you sync your ESPN account,
          they&apos;ll show up here.
        </p>
      )}

      {hasLeagues && (
        <section className="grid gap-4 md:grid-cols-2">
          {mockLeagues.map((league) => (
            <Link
              key={league.id}
              href={`/leagues/${league.id}`}
              className="border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition"
            >
              <h2 className="text-lg font-semibold">{league.name}</h2>
              <p className="text-sm text-gray-400">Season {league.season}</p>
              <p className="text-sm text-gray-400 mt-2">
                Teams: {league.teams.length}
              </p>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
