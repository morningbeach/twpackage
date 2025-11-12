export default function Hero(){
  return (
    <section className="section">
      <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">TomorrowTW × MorningBeach</span>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-ink-900">
            Fashion‑grade Gift Packaging for Global Brands
          </h1>
          <p className="mt-5 text-lg text-ink-600">
            Premium gift sets, rigid boxes, and curated gifts — crafted with ESG materials,
            rapid sampling, and on‑time delivery.
          </p>
          <div className="mt-8 flex gap-3">
            <a className="btn-primary" href="/en/products/sets">Explore Gift Sets</a>
            <a className="btn-ghost" href="/en/contact">Get a Quote</a>
          </div>
          <ul className="mt-6 grid grid-cols-3 gap-3 text-sm text-ink-600">
            <li>FSC & ISO</li><li>7‑day prototyping</li><li>Global shipping</li>
          </ul>
        </div>
        <div className="card p-2 card-hover">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1600&auto=format&fit=crop" alt="Premium gift box"/>
        </div>
      </div>
    </section>
  )
}
