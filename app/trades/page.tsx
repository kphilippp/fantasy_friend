// app/trades/page.tsx
import Link from "next/link";
import { mockTrades, mockLeagues } from "@/lib/mockData";

export default function TradesPage() {
  const hasTrades = mockTrades.length > 0;

  const getLeagueName = (leagueId: string) => {
    const idNum = Number(leagueId);
    return (
      mockLeagues.find((l) => l.id === idNum)?.name ?? `League ${leagueId}`
    );
  };

  return (
    <main className="p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Saved Trades</h1>
        <p className="text-gray-400 mt-2">
          A history of trades you&apos;ve analyzed with the AI (mock data for
          now).
        </p>
      </header>

      {!hasTrades && (
        <p className="text-gray-400">
          You haven&apos;t analyzed any trades yet. Use the trade builder in one
          of your leagues to get started.
        </p>
      )}

      {hasTrades && (
        <section className="space-y-3">
          {mockTrades.map((trade) => (
            <Link
              key={trade.id}
              href={`/trades/${trade.id}`}
              className="block border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition"
            >
              <h2 className="font-semibold">{trade.title}</h2>
              <p className="text-sm text-gray-400 mt-1">
                League: {getLeagueName(trade.leagueId)}
              </p>
              <p className="text-sm text-gray-400">
                {trade.userTeamName} ↔ {trade.tradingWithTeamName}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                AI score: {Math.round(parseFloat(trade.aiScore) * 100)}%
              </p>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
