// app/settings/page.tsx
"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [scoringFormat, setScoringFormat] = useState<
    "standard" | "half" | "full"
  >("half");
  const [aggressiveness, setAggressiveness] = useState<
    "conservative" | "balanced" | "aggressive"
  >("balanced");
  const [autoSave, setAutoSave] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  const handleSave = () => {
    // In the future, call an API here.
    setMessage("Settings saved (mock).");
    setTimeout(() => setMessage(null), 2500);
  };

  return (
    <main className="p-8 space-y-6 max-w-xl">
      <header>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-2">
          Configure how Fantasy Friend evaluates trades for your leagues.
        </p>
      </header>

      <section className="space-y-4 text-sm">
        {/* Scoring format */}
        <div className="space-y-2">
          <h2 className="font-semibold">Scoring Format</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="scoring"
                checked={scoringFormat === "standard"}
                onChange={() => setScoringFormat("standard")}
              />
              <span>Standard (no PPR)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="scoring"
                checked={scoringFormat === "half"}
                onChange={() => setScoringFormat("half")}
              />
              <span>Half PPR</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="scoring"
                checked={scoringFormat === "full"}
                onChange={() => setScoringFormat("full")}
              />
              <span>Full PPR</span>
            </label>
          </div>
        </div>

        {/* Aggressiveness */}
        <div className="space-y-2">
          <h2 className="font-semibold">Trade Aggressiveness</h2>
          <select
            value={aggressiveness}
            onChange={(e) =>
              setAggressiveness(e.target.value as typeof aggressiveness)
            }
            className="bg-black border border-gray-700 rounded-md px-3 py-2"
          >
            <option value="conservative">Conservative</option>
            <option value="balanced">Balanced</option>
            <option value="aggressive">Aggressive</option>
          </select>
          <p className="text-xs text-gray-500">
            Conservative favors safer, more balanced deals. Aggressive chases
            upside even if it increases risk.
          </p>
        </div>

        {/* Auto-save */}
        <div className="space-y-2">
          <h2 className="font-semibold">Auto-save Analyzed Trades</h2>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e) => setAutoSave(e.target.checked)}
            />
            <span>Automatically add each analyzed trade to your history.</span>
          </label>
        </div>
      </section>

      <button
        onClick={handleSave}
        className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium"
      >
        Save Settings
      </button>

      {message && <p className="text-xs text-green-400 mt-2">{message}</p>}
    </main>
  );
}
