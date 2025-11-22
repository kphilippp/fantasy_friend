export default function LeaguesPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Your Leagues</h1>
      <p className="text-gray-400">
        Later this will be populated from the ESPN API.
      </p>
      <ul className="space-y-2">
        <li className="border border-gray-700 rounded-lg p-4">
          Example League 1
        </li>
        <li className="border border-gray-700 rounded-lg p-4">
          Example League 2
        </li>
      </ul>
    </main>
  );
}
