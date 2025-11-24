// app/leagues/[leagueId]/trade-builder/page.tsx
import { mockLeagues } from "@/lib/mockData";
import { TradeBuilderClient } from "./TradeBuilderClient";

type TradeBuilderPageProps = {
  params: { leagueId: string };
};

export default function TradeBuilderPage({ params }: TradeBuilderPageProps) {
  const leagueIdNum = Number(params.leagueId);
  const league = mockLeagues.find((l) => l.id === leagueIdNum);

  if (!league) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">League not found</h1>
      </main>
    );
  }

  return (
    <main className="p-8 space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Trade Builder</h1>
        <p className="text-gray-400">
          League: {league.name} ({league.season})
        </p>
        <p className="text-gray-500 text-sm">
          Select players you&apos;re willing to send and players you want to
          receive, then run a mock AI analysis.
        </p>
      </header>

      <TradeBuilderClient league={league} />
    </main>
  );
}
