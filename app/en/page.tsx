// app/en/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/home.module.css';

export default function EnHome() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Gifts & Packaging, <span>from concept to delivery</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Custom gifts, premium boxes, and curated gift sets — fast, reliable, and ESG-minded.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/en/products/gifts" className={styles.btnPrimary}>
                Explore Gifts
              </Link>
              <Link href="/en/products/boxes" className={styles.btnGhost}>
                Custom Boxes
              </Link>
            </div>
          </div>

          {/* Hero Aside Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <Image
                src="/images/tiles/gifts.jpg"
                alt="Curated corporate gifts"
                width={560}
                height={380}
                className={styles.heroImg}
                priority
              />
              <div className={styles.heroCardCaption}>Curated Corporate Gifts</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY TILES（整合你原本的三卡） */}
      <section className={styles.section}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gifts & Packaging</h2>
            <p className={styles.sectionLead}>Explore our categories:</p>
          </header>

          <ul className={styles.tileGrid}>
            <li>
              <Link href="/en/products/gifts" className={styles.tileCard}>
                <Image
                  src="/images/tiles/gifts.jpg"
                  alt="Gifts"
                  width={640}
                  height={480}
                  className={styles.tileImg}
                />
                <div className={styles.tileBody}>
                  <h3>Gifts</h3>
                  <p>Company swag, seasonal sets, event giveaways</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/en/products/boxes" className={styles.tileCard}>
                <Image
                  src="/images/tiles/boxes.jpg"
                  alt="Boxes"
                  width={640}
                  height={480}
                  className={styles.tileImg}
                />
                <div className={styles.tileBody}>
                  <h3>Boxes</h3>
                  <p>Rigid, foldable, magnet, slide, FSC / rPET options</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/en/products/sets" className={styles.tileCard}>
                <Image
                  src="/images/tiles/sets.jpg"
                  alt="Gift Sets"
                  width={640}
                  height={480}
                  className={styles.tileImg}
                />
                <div className={styles.tileBody}>
                  <h3>Gift Sets</h3>
                  <p>Curated combos with kitting & fulfillment</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className={styles.badges}>
        <div className={styles.container}>
          <ul className={styles.badgeGrid}>
            {[
              ['Fast Sampling', 'UV direct print & multi-material'],
              ['ESG Ready', 'rPET / FSC / PCR options'],
              ['On-Time', '98.7% orders shipped as scheduled'],
              ['One-Stop', 'Design • Production • Fulfillment'],
            ].map(([title, desc]) => (
              <li key={title} className={styles.badgeItem}>
                <div className={styles.badgeTitle}>{title}</div>
                <div className={styles.badgeDesc}>{desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <ul className={styles.statsGrid}>
            {[
              ['3–10d', 'Sampling Lead Time'],
              ['15–35d', 'Mass Production'],
              ['120+', 'Skilled Staff'],
              ['15,000㎡', 'Factory Floor'],
            ].map(([num, label]) => (
              <li key={label} className={styles.statCard}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RFQ Drawer（可沿用你已建立的元件；若尚未建立，可暫用下方簡版） */}
      <RFQButton />
    </main>
  );
}

/** 簡版浮動 RFQ 按鈕（若你已經有 components/RFQDrawer.tsx，可移除此區塊改為 <RFQDrawer/>） */
function RFQButton() {
  return (
    <Link href="/en/products/gifts" aria-label="Get a quote" className={styles.rfqFab}>
      Get a Quote
    </Link>
  );
}
