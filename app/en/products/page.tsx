// app/en/products/page.tsx
import Link from 'next/link';

export default function ProductsIndex() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link className="block border rounded-xl p-6 hover:shadow" href="/en/products/gifts">Gifts</Link>
        <Link className="block border rounded-xl p-6 hover:shadow" href="/en/products/boxes">Boxes</Link>
        <Link className="block border rounded-xl p-6 hover:shadow" href="/en/products/sets">Gift Sets</Link>
      </div>
    </main>
  );
}
