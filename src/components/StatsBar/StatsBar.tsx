'use client';

import { useCounter } from '@/hooks/useCounter';
import styles from './StatsBar.module.css';

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay?: number;
}

function StatItem({ target, suffix, label, sublabel }: StatItemProps) {
  const { count, ref } = useCounter({ end: target, duration: 1800 });

  return (
    <div ref={ref} className={`${styles.statCard} reveal-scale`}>
      <div className={styles.numberRow}>
        <span className={styles.number}>{count.toLocaleString()}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <p className={styles.label}>{label}</p>
      <p className={styles.sublabel}>{sublabel}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.statsGrid}>
          <StatItem
            target={5000}
            suffix="+"
            label="Work Permits Processed"
            sublabel="Across Lithuania, Slovakia & Serbia"
          />
          <StatItem
            target={98}
            suffix="%"
            label="Consular Approval Rate"
            sublabel="Meticulous pre-submission audit"
          />
          <StatItem
            target={12}
            suffix="+"
            label="European Destinations"
            sublabel="Direct employer & ministry channels"
          />
          <StatItem
            target={24}
            suffix="/7"
            label="Client Support"
            sublabel="Dedicated case manager support"
          />
        </div>
      </div>
    </section>
  );
}
