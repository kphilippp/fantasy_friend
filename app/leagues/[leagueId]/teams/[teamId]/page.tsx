type TeamPageProps = {
  params: { leagueId: string; teamId: string };
};

export default function TeamPage({ params }: TeamPageProps) {
  const { leagueId, teamId } = params;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">
        Team {teamId} (League {leagueId})
      </h1>
      <p className="text-gray-400">
        Roster breakdown, positional needs, and suggested incoming/outgoing
        players will show here.
      </p>
    </main>
  );
}
