type Item={ slug:string; title:string; thumb:string; bullets:string[] }
export default function ProductsGrid({items}:{items:Item[]}){
  return (
    <section className="section">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p=> (
          <a key={p.slug} href={`/en/product/${p.slug}`} className="card overflow-hidden card-hover block">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition"/>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <ul className="mt-2 text-sm text-ink-600 space-y-1">
                {p.bullets.slice(0,3).map((b,i)=>(<li key={i}>• {b}</li>))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
