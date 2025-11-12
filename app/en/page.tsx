import Link from 'next/link';
import styles from '@/components/home.module.css';

export const metadata = {
  title: 'Gifts & Packaging — TW Package',
  description: 'Custom gifts, boxes and gift sets with factory-direct development and RFQ support.',
};

export default function EnHome() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* ---------- HERO ---------- */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <div className={styles.eyebrow}>
                <span>Factory-Grade Packaging</span>
              </div>
              <h1 className={styles.title}>
                Gifts &amp; Packaging for <span style={{color:'var(--accent)'}}>Brand-Ready</span> launches
              </h1>
              <p className={styles.subtitle}>
                Boxes, premium gifts and complete gift sets—engineered with durable materials,
                clean finishing and ESG-minded options. Built for marketers, buyers and designers.
              </p>
              <div className={styles.ctas}>
                <Link href="/en/products/gifts" className={styles.btnPrimary}>Browse Gifts</Link>
                <Link href="/en/products/boxes" className={styles.btnGhost}>Explore Boxes</Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroBadge}>Lead time: 12–25 days</div>
            </div>
          </div>
        </section>

        {/* ---------- CATEGORIES ---------- */}
        <section className={styles.section} aria-labelledby="cat-title">
          <div className={styles.sectionHead}>
            <h2 id="cat-title" className={styles.sectionTitle}>Categories</h2>
            <p className={styles.sectionHint}>Explore our product families</p>
          </div>

          <div className={styles.tilesGrid}>
            <Link href="/en/products/gifts" className={styles.tileCard}>
              <div className={styles.tileMedia} />
              <div className={styles.tileBody}>
                <div className={styles.tileTitle}>Gifts</div>
                <p className="text-sm text-gray-500">Mugs, tumblers, textiles, candle kits and more.</p>
              </div>
            </Link>

            <Link href="/en/products/boxes" className={styles.tileCard}>
              <div className={styles.tileMedia} />
              <div className={styles.tileBody}>
                <div className={styles.tileTitle}>Boxes</div>
                <p className="text-sm text-gray-500">Rigid boxes, mailers, sleeves, inserts and trays.</p>
              </div>
            </Link>

            <Link href="/en/products/sets" className={styles.tileCard}>
              <div className={styles.tileMedia} />
              <div className={styles.tileBody}>
                <div className={styles.tileTitle}>Gift Sets</div>
                <p className="text-sm text-gray-500">Curated bundles for corporate and seasonal gifting.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* ---------- TRUST BADGES ---------- */}
        <section className={styles.section} aria-labelledby="trust-title">
          <div className={styles.sectionHead}>
            <h2 id="trust-title" className={styles.sectionTitle}>Why brands choose us</h2>
          </div>
          <div className={styles.badges}>
            <div className={styles.badgeItem}>Rapid RFQ ≤ 24h</div>
            <div className={styles.badgeItem}>Free sampling support</div>
            <div className={styles.badgeItem}>ESG &amp; rPET options</div>
            <div className={styles.badgeItem}>Taiwan + PRC supply</div>
          </div>
        </section>

        {/* ---------- STATS ---------- */}
        <section className={styles.section} aria-labelledby="stats-title">
          <div className={styles.sectionHead}>
            <h2 id="stats-title" className={styles.sectionTitle}>Scale with reliability</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>120+</div>
              <div className={styles.statLabel}>Team & operators</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15,000㎡</div>
              <div className={styles.statLabel}>Gift-box lines</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>UV printers</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>30d</div>
              <div className={styles.statLabel}>Peak-season SLA</div>
            </div>
          </div>
        </section>

        {/* ---------- RFQ ---------- */}
        <section className={styles.rfq} aria-labelledby="rfq-title">
          <div className={styles.rfqCard}>
            <h2 id="rfq-title" className={styles.rfqTitle}>Request a Quote</h2>
            <p className={styles.rfqText}>
              Tell us the item, quantity and delivery window. We’ll get back within 24 hours with
              cost tiers and sampling options.
            </p>
          </div>

          {/* 非互動式、免 'use client' 的表單；之後可接 D1 或 API 路由 */}
          <form className={styles.rfqPanel} method="POST" action="/api/rfq">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="name" required placeholder="Your name" className={styles.input} />
              <input name="email" type="email" required placeholder="Work email" className={styles.input} />
              <input name="company" placeholder="Company (optional)" className={styles.input} />
              <select name="category" className={styles.select}>
                <option value="gifts">Gifts</option>
                <option value="boxes">Boxes</option>
                <option value="sets">Gift Sets</option>
              </select>
              <input name="qty" placeholder="Target qty (e.g. 1,000)" className={styles.input} />
              <input name="deadline" placeholder="Target ship date" className={styles.input} />
            </div>
            <div className="mt-3">
              <textarea name="notes" rows={4} placeholder="Specs, materials, size, finishing…"
                        className={styles.textarea} />
            </div>
            <button className={styles.submit} type="submit">Send RFQ</button>
          </form>
        </section>

      </div>
    </main>
  );
}
