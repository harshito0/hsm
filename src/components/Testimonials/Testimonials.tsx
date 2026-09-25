'use client';

import { useState } from 'react';
import { siteData } from '@/lib/data';
import styles from './Testimonials.module.css';

function Stars({ n }: { n: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill={i <= n ? '#F5A623' : '#e0e0e0'} width="18" height="18">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.headerArea}>
          <h2 className="section-title reveal">What Our Clients Say</h2>
          <p className={`${styles.subTitle} reveal`}>
            Real experiences from professionals who secured their European work permits through our support.
          </p>
        </div>

        <div className={styles.grid}>
          {siteData.testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.card} ${i === active ? styles.cardActive : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setActive(i)}
            >
              <Stars n={t.rating} />
              <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role} · {t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
