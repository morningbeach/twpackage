import Link from 'next/link';

const tiles = [
  {
    href: '/en/products/gifts',
    title: 'Gifts',
    desc: 'Branded merch, lifestyle items, premium keepsakes',
    img: placeholder('#e0f2fe', '#fafafa')
  },
  {
    href: '/en/products/boxes',
    title: 'Packaging Boxes',
    desc: 'Rigid boxes, foldable cartons, sustainable options',
    img: placeholder('#ffe4e6', '#fafafa')
  },
  {
    href: '/en/products/sets',
    title: 'Gift Sets',
    desc: 'Curated bundles with custom inserts & sleeves',
    img: placeholder('#dcfce7', '#fafafa')
  }
];

function placeholder(c1: string, c2: string) {
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><circle cx='300' cy='200' r='160' fill='white' fill-opacity='0.35'/><rect x='700' y='380' width='280' height='180' rx='24' fill='white' fill-opacity='0.25'/></svg>`
  );
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Explore Categories</h2>
        <Link
          href="/en/products/gifts"
          className="text-sm text-neutral-600 hover:text-black underline underline-offset-4"
        >
          View all products
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group rounded-3xl border border-neutral-200 overflow-hidden bg-white hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={t.img}
                alt={t.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{t.title}</h3>
                <span className="text-xs rounded-full border px-2 py-1 text-neutral-600 group-hover:bg-black group-hover:text-white transition-colors">
                  discover
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{t.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
