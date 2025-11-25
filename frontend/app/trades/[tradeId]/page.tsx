// app/trades/[tradeId]/page.tsx
import Link from "next/link";
import { mockTrades, mockLeagues } from "@/lib/mockData";

type TradeDetailPageProps = {
  params: { tradeId: string };
};

export default function TradeDetailPage({ params }: TradeDetailPageProps) {
  const trade = mockTrades.find((t) => t.id === params.tradeId);

  if (!trade) {
    return (
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Trade not found</h1>
        <Link href="/trades" className="text-sm underline text-gray-300">
          Back to trades
        </Link>
      </main>
    );
  }

  const leagueName =
    mockLeagues.find((l) => l.id === Number(trade.leagueId))?.name ??
    `League ${trade.leagueId}`;
  const scorePercent = Math.round(parseFloat(trade.aiScore) * 100);

  return (
    <main className="p-8 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Trade Details</h1>
        <p className="text-gray-300">{trade.title}</p>
        <p className="text-sm text-gray-400">
          League: {leagueName} • {trade.userTeamName} ↔{" "}
          {trade.tradingWithTeamName}
        </p>
        <p className="text-sm text-gray-300">
          AI score: <span className="font-semibold">{scorePercent}%</span>
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">AI Breakdown</h2>
        <p className="text-sm text-gray-200 border border-gray-800 rounded-xl p-4">
          {trade.aiBreakdown}
        </p>
      </section>

      <section className="flex gap-4 text-sm">
        <Link href="/trades" className="underline text-gray-300">
          Back to trade history
        </Link>
        <Link
          href={`/leagues/${trade.leagueId}/trade-builder`}
          className="underline text-gray-300"
        >
          Open trade builder for this league
        </Link>
      </section>
    </main>
  );
}
