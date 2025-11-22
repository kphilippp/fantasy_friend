type TradeDetailPageProps = {
  params: { tradeId: string };
};

export default function TradeDetailPage({ params }: TradeDetailPageProps) {
  const { tradeId } = params;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Trade {tradeId}</h1>
      <p className="text-gray-400">
        Here you&apos;ll show AI analysis: win probability, risk, player
        projections, etc.
      </p>
    </main>
  );
}
