'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        aria-hidden
        style={{
          background:
            'radial-gradient(1200px 600px at 70% -10%, #dbeafe, transparent), radial-gradient(800px 400px at -10% 60%, #fce7f3, transparent), linear-gradient(180deg, #fff, #fafafa)'
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600">
            TOMORROWTW × MORNINGBEACH — premium gifting & packaging
          </span>
          <h1 className="mt-5 text-4xl/tight md:text-6xl/tight font-semibold tracking-[-0.02em]">
            Make your <span className="underline decoration-sky-300">gifts</span> look unforgettable.
          </h1>
          <p className="mt-5 text-neutral-600 md:text-lg">
            Elegant gift items, custom packaging boxes, and curated gift sets — designed in Taiwan,
            manufactured with care, delivered worldwide.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#rfq"
              className="rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base hover:opacity-90"
            >
              Get a Quote
            </a>
            <a
              href="/en/products/gifts"
              className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm md:text-base hover:bg-neutral-50"
            >
              Browse Collection
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['EU-compliant', 'Low-MOQ', 'Global Shipping', 'ESG-ready'].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur px-4 py-3 text-sm"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
