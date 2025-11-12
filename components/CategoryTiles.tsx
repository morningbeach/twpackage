const tiles = [
  { href:'/en/products/gifts', title:'Gifts', img:'https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&w=1600&auto=format&fit=crop' },
  { href:'/en/products/boxes', title:'Packaging Boxes', img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1600&auto=format&fit=crop' },
  { href:'/en/products/sets',  title:'Gift Sets', img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' }
]
export default function CategoryTiles(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-3 gap-6">
        {tiles.map((t)=> (
          <a key={t.title} href={t.href} className="group card overflow-hidden card-hover">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={t.img} alt={t.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition"/>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="text-sm text-ink-600 mt-1">Curated selections ready for customization</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
