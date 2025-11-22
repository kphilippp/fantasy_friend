type TradeBuilderPageProps = {
  params: { leagueId: string };
};

export default function TradeBuilderPage({ params }: TradeBuilderPageProps) {
  const { leagueId } = params;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Trade Builder (League {leagueId})</h1>
      <p className="text-gray-400">
        This will be the main UI to choose players from your team and other
        teams and send them to the AI for analysis.
      </p>
    </main>
  );
}
