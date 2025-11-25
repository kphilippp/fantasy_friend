// app/dashboard/page.tsx
import Link from "next/link";
import { mockLeagues, mockTrades } from "@/lib/mockData";

export default function DashboardPage() {
  const totalLeagues = mockLeagues.length;
  const totalTrades = mockTrades.length;
  const latestTrade = mockTrades[0];

  return (
    <main className="p-8 space-y-8">
      {/* Page title */}
      <header>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">
          Overview of your fantasy leagues and recent trade activity.
        </p>
      </header>

      {/* Summary cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="border border-gray-800 rounded-xl p-4">
          <h2 className="text-sm text-gray-400 uppercase tracking-wide">
            Connected Leagues
          </h2>
          <p className="mt-3 text-3xl font-semibold">{totalLeagues}</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-4">
          <h2 className="text-sm text-gray-400 uppercase tracking-wide">
            Analyzed Trades
          </h2>
          <p className="mt-3 text-3xl font-semibold">{totalTrades}</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-4">
          <h2 className="text-sm text-gray-400 uppercase tracking-wide">
            Last Trade Score
          </h2>
          <p className="mt-3 text-3xl font-semibold">
            {latestTrade
              ? `${Math.round(parseFloat(latestTrade.aiScore) * 100)}%`
              : "—"}
          </p>
          {latestTrade && (
            <p className="mt-2 text-xs text-gray-500">{latestTrade.title}</p>
          )}
        </div>
      </section>

      {/* Quick links / actions */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Links</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/leagues"
            className="px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition"
          >
            View all leagues
          </Link>

          {mockLeagues[0] && (
            <Link
              href={`/leagues/${mockLeagues[0].id}/trade-builder`}
              className="px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition"
            >
              Open trade builder for {mockLeagues[0].name}
            </Link>
          )}

          <Link
            href="/trades"
            className="px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition"
          >
            View trade history
          </Link>
        </div>
      </section>
    </main>
  );
}
