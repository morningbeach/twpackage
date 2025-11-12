export default function ProductPage({product}:{product:any}){
  return (
    <div className="section">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div className="card overflow-hidden">
          <img src={product.thumb} alt={product.title} className="w-full h-auto"/>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-ink-900">{product.title}</h1>
          <p className="mt-3 text-ink-600 max-w-prose">
            Premium customization with fast lead time and multiple finishing options.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="card p-4"><div className="text-xs text-ink-500">MOQ</div><div className="text-lg font-semibold">{product.moq}</div></div>
            <div className="card p-4"><div className="text-xs text-ink-500">Lead Time</div><div className="text-lg font-semibold">{product.leadTime}</div></div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">Key Features</h3>
            <ul className="mt-2 text-ink-700 list-disc pl-5 space-y-1">
              {product.bullets.map((b:string,i:number)=>(<li key={i}>{b}</li>))}
            </ul>
          </div>
          <div className="mt-8 flex gap-3">
            <a className="btn-primary" href="#rfq">Request a Quote</a>
            <a className="btn-ghost" href="/en/contact">Contact Sales</a>
          </div>
        </div>
      </div>
    </div>
  )
}
