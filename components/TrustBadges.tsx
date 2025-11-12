function Badge({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
      <svg width="22" height="22" viewBox="0 0 24 24" className="shrink-0">
        <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" fill="currentColor" />
        <path d="M9.5 12.5l1.8 1.8 3.7-3.8" stroke="white" strokeWidth="2" fill="none" />
      </svg>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-neutral-600">{subtitle}</div>
      </div>
    </div>
  );
}

export default function TrustBadges() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid gap-4 md:grid-cols-4">
        <Badge title="Factory-backed" subtitle="In-house print & finishing" />
        <Badge title="Global-ready" subtitle="Docs, labeling, export know-how" />
        <Badge title="Quality-first" subtitle="AQL checks & color control" />
        <Badge title="Sustainable" subtitle="rPET, FSC paper, soy inks" />
      </div>
    </section>
  );
}
