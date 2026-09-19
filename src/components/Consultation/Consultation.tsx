'use client';

import { siteData } from '@/lib/data';
import styles from './Consultation.module.css';

export default function Consultation() {
  return (
    <div id="consultation" className={styles.wrapper}>
      <div className="container">
        {/* Blue CTA banner — exactly like original */}
        <div className={`${styles.ctaBanner} reveal-scale`}>
          <p className={styles.needHelp}>Need help?</p>
          <p className={styles.title}>Get Your Free Consultation Now!</p>
          <p className={styles.subtitle}>
            Book a Consultation or Contact Us Today — Let's Make Your Move to Work Easy and Stress-Free!
          </p>

          {/* Contact row */}
          <div className={styles.contactRow}>
            {/* Phone */}
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"/>
                </svg>
              </div>
              <div>
                <a href={`tel:${siteData.company.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p className={styles.contactLabel}>Call Us!</p>
                  <p className={styles.contactValue}>{siteData.company.phone}</p>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"/>
                </svg>
              </div>
              <div>
                <a href={`mailto:${siteData.company.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p className={styles.contactLabel}>Write Us!</p>
                  <p className={styles.contactValue}>{siteData.company.email}</p>
                </a>
              </div>
            </div>
          </div>

          {/* Book button — white on blue, like original with arrow */}
          <div>
            <a href={`tel:${siteData.company.phone}`} className={styles.bookBtn}>
              <span>Book free consultation</span>
              <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
