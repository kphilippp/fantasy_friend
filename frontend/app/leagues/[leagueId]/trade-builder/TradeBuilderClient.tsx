// app/leagues/[leagueId]/trade-builder/TradeBuilderClient.tsx
"use client";
import { useState } from "react";

// If you didn't export League from mockData.ts, either export it there
// or define a matching type here. Using import type is cleaner.

type Props = {
  league: League;
};

export function TradeBuilderClient({ league }: Props) {
  // For now just pick first two teams
  const myTeam = league.teams[0];
  const otherTeam = league.teams[1];

  const [playersOut, setPlayersOut] = useState<number[]>([]);
  const [playersIn, setPlayersIn] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const toggleOut = (id: number) => {
    setPlayersOut((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleIn = (id: number) => {
    setPlayersIn((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleAnalyze = () => {
    // Fake scoring: base 0.5, plus 0.05 per incoming player, minus 0.03 per outgoing
    const scoreRaw = 0.5 + playersIn.length * 0.05 - playersOut.length * 0.03;
    const score = Math.max(0, Math.min(1, scoreRaw)); // clamp 0–1
    const scorePercent = Math.round(score * 100);

    setResult(
      `Mock AI score: ${scorePercent}%. You are sending ${playersOut.length} player(s) and receiving ${playersIn.length} player(s).`
    );
  };

  if (!myTeam || !otherTeam) {
    return (
      <p className="text-gray-400">
        Add at least two teams to this league to use the trade builder.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Teams selection summary */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="border border-gray-800 rounded-xl p-4">
          <h2 className="font-semibold mb-1">Your Team</h2>
          <p className="text-sm text-gray-400">{myTeam.name}</p>
          <p className="text-xs text-gray-500">
            Select players you&apos;re willing to trade away.
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-4">
          <h2 className="font-semibold mb-1">Trading With</h2>
          <p className="text-sm text-gray-400">{otherTeam.name}</p>
          <p className="text-xs text-gray-500">
            Select players you&apos;d like to receive.
          </p>
        </div>
      </section>

      {/* Rosters */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* My roster */}
        <div className="border border-gray-800 rounded-xl p-4 space-y-3">
          <h3 className="font-semibold">Players You&apos;re Sending</h3>
          <ul className="space-y-2 text-sm">
            {myTeam.roster.map((player) => (
              <li key={player.id}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={playersOut.includes(player.id)}
                    onChange={() => toggleOut(player.id)}
                  />
                  <span>
                    {player.name} • {player.position} • {player.team}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Other roster */}
        <div className="border border-gray-800 rounded-xl p-4 space-y-3">
          <h3 className="font-semibold">Players You&apos;re Receiving</h3>
          <ul className="space-y-2 text-sm">
            {otherTeam.roster.map((player) => (
              <li key={player.id}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={playersIn.includes(player.id)}
                    onChange={() => toggleIn(player.id)}
                  />
                  <span>
                    {player.name} • {player.position} • {player.team}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Analyze button + result */}
      <section className="space-y-3">
        <button
          onClick={handleAnalyze}
          className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium"
        >
          Analyze Trade (mock)
        </button>

        {result && (
          <p className="text-sm text-gray-200 border border-gray-800 rounded-lg p-3">
            {result}
          </p>
        )}
      </section>
    </div>
  );
}
