import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-center">
        Fantasy Trade Assistant
      </h1>
      <p className="max-w-md text-center text-gray-400">
        Connect your ESPN fantasy league and get AI-powered trade suggestions
        before you even send an offer.
      </p>
      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-md bg-white text-black font-medium"
        >
          Go to dashboard
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 rounded-md border border-gray-500"
        >
          Learn more
        </Link>
      </div>
    </main>
  );
}
