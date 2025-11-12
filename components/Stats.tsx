const stats = [
  { k: '120+', v: 'SKU templates' },
  { k: '15k㎡', v: 'gift box lines' },
  { k: '30d', v: 'global lead-time' },
  { k: '3', v: 'pricing tiers' }
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">{s.k}</div>
              <div className="mt-1 text-sm text-neutral-600">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
