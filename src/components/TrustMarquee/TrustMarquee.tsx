'use client';

import styles from './TrustMarquee.module.css';

const trustItems = [
  { text: 'Schengen Visa Code Compliant', icon: 'shield' },
  { text: '5,000+ Work Permits Issued', icon: 'check' },
  { text: 'Official Ministry Registration', icon: 'file' },
  { text: 'Fast-Track Apostille & Legalization', icon: 'zap' },
  { text: 'Lithuania, Slovakia & Serbia Specialist', icon: 'globe' },
  { text: '98% Consular Approval Rate', icon: 'star' },
  { text: 'Certified Immigration Legal Experts', icon: 'award' },
  { text: 'End-to-End Relocation Guidance', icon: 'compass' },
  { text: 'GDPR Data Secured & Confidential', icon: 'lock' },
];

function renderIcon(name: string) {
  switch (name) {
    case 'shield':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
    case 'check':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      );
    case 'file':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      );
    case 'zap':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      );
    case 'globe':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      );
    case 'star':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      );
    case 'award':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      );
    case 'compass':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      );
    case 'lock':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function TrustMarquee() {
  return (
    <div className={styles.marqueeWrapper} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {/* First copy */}
        <div className={styles.marqueeGroup}>
          {trustItems.map((item, idx) => (
            <div key={`group1-${idx}`} className={styles.marqueeItem}>
              <span className={styles.itemIcon}>{renderIcon(item.icon)}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {/* Second copy for seamless looping */}
        <div className={styles.marqueeGroup}>
          {trustItems.map((item, idx) => (
            <div key={`group2-${idx}`} className={styles.marqueeItem}>
              <span className={styles.itemIcon}>{renderIcon(item.icon)}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
