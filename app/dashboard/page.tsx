export default function DashboardPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-400">
        Once your ESPN league is connected, this page will show:
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Your leagues & teams</li>
        <li>Top suggested trade partners</li>
        <li>High-level roster strengths/weaknesses</li>
      </ul>
    </main>
  );
}
