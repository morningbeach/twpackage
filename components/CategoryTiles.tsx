// components/CategoryTiles.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Route } from 'next';

type Tile = {
  href: Route;            // 關鍵：用 Route 讓 typedRoutes 通過
  title: string;
  description?: string;
  image: string;
};

const tiles: Tile[] = [
  { href: '/en/products/boxes', title: 'Custom Boxes', image: '/images/tiles/boxes.jpg' },
  { href: '/en/products/gifts', title: 'Corporate Gifts', image: '/images/tiles/gifts.jpg' },
  { href: '/en/products/sets',  title: 'Gift Sets',     image: '/images/tiles/sets.jpg' },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Explore categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group rounded-3xl border border-neutral-200 overflow-hidden bg-white hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={t.image}
                alt={t.title}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{t.title}</h3>
              {t.description ? (
                <p className="text-sm text-neutral-500">{t.description}</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
