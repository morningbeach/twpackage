// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Tomorrow Package</h1>
      <p className="text-gray-500 max-w-xl text-center">
        Premium gifts, custom boxes & curated gift sets.
      </p>
      <div className="flex gap-3">
        <Link href="/en" className="px-4 py-2 rounded-full border">
          Enter English site →
        </Link>
        <Link href="/en/products/gifts" className="px-4 py-2 rounded-full border">
          View Gifts
        </Link>
      </div>
    </main>
  );
}
