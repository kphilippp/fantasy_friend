import Link from "next/link";

export default function TradesPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Saved Trades</h1>
      <p className="text-gray-400">
        This will show a history of trades you&apos;ve analyzed.
      </p>
      <ul className="space-y-2">
        <li>
          <Link href="/trades/example-trade" className="underline">
            Example Trade
          </Link>
        </li>
      </ul>
    </main>
  );
}
