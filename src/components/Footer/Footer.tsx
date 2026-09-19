import Link from 'next/link';
import { siteData } from '@/lib/data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          {/* Brand Logo */}
          <Link href="/" className={styles.logoBadge}>
            <img
              src="/logo.png"
              alt="Human Power Service"
              className={styles.logoImg}
            />
          </Link>

          {/* Quick links */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/news" className={styles.navLink}>News</Link>
            <Link href="#consultation" className={styles.navLink}>Consultation</Link>
          </div>

          {/* Copyright */}
          <p className={styles.copyright}>
            Copyright © {siteData.company.copyright} — {siteData.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
