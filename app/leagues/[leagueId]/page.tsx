type LeaguePageProps = {
  params: { leagueId: string };
};

export default function LeaguePage({ params }: LeaguePageProps) {
  const { leagueId } = params;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">League {leagueId}</h1>
      <p className="text-gray-400">
        This page will show league standings, rosters, and trade fits.
      </p>
    </main>
  );
}
