// app/en/page.tsx
import Link from 'next/link';

export default function EnHome() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">Gifts & Packaging</h1>
      <p className="text-gray-500 mb-10">Explore our categories:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <li><Link className="block border rounded-xl p-6 hover:shadow" href="/en/products/gifts">Gifts</Link></li>
        <li><Link className="block border rounded-xl p-6 hover:shadow" href="/en/products/boxes">Boxes</Link></li>
        <li><Link className="block border rounded-xl p-6 hover:shadow" href="/en/products/sets">Gift Sets</Link></li>
      </ul>
    </main>
  );
}
