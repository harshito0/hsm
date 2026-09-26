'use client';

import { useState, useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import styles from './Hero.module.css';

const iconMap: Record<string, ReactNode> = {
  clock: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"/>
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-6 0h-4V5h4z"/>
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-9.18-6.95L7.4 14.46 10.94 18l5.66-5.66-1.41-1.41-4.24 4.24z"/>
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"/>
    </svg>
  ),
};

const heroPanels = [
  {
    id: 'overview',
    label: 'Overview',
    tag: 'European Work Authorization',
    headline: 'Human Power Service — Expert support on obtaining work permit.',
    subtext: siteData.company.description,
    bgImage: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1600&q=80&auto=format',
    ctaText: 'Book free consultation',
    ctaLink: '#consultation',
  },
  {
    id: 'lithuania',
    label: 'Lithuania 🇱🇹',
    tag: 'National D Visa & Residence',
    headline: 'Employment Programme Republic of Lithuania',
    subtext: 'End-to-end guidance for skilled workers, employer registrations, and temporary residence permits (Leidimas laikinai gyventi).',
    bgImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1600&q=80&auto=format',
    ctaText: 'Explore Lithuania',
    ctaLink: '/services/employment-programme-republic-of-lithuania',
  },
  {
    id: 'slovakia',
    label: 'Slovakia 🇸🇰',
    tag: 'Official Work Authorization',
    headline: 'Work Visa Programme of Slovakia',
    subtext: 'Dedicated immigration support for consular interviews, Slovak labor office approvals, and fast-track permit clearance.',
    bgImage: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=1600&q=80&auto=format',
    ctaText: 'Explore Slovakia',
    ctaLink: '/services/work-visa-programme-of-slovakia',
  },
  {
    id: 'serbia',
    label: 'Serbia 🇷🇸',
    tag: 'Government-Backed Single Permit',
    headline: 'Republic of Serbia Work Visa Programme',
    subtext: 'Government-backed programme providing a single streamlined permit that covers both legal work and temporary residence.',
    bgImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1600&q=80&auto=format',
    ctaText: 'Explore Serbia',
    ctaLink: '/services/republic-of-serbia-work-visa-programme',
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 800) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentPanel = heroPanels.find((p) => p.id === activeTab) || heroPanels[0];

  return (
    <div className={styles.heroWrapper}>
      {/* Hero image box with parallax and split tabs */}
      <div className={styles.heroBox}>
        {/* Background image with parallax */}
        <img
          src={currentPanel.bgImage}
          alt="European Skyline"
          className={styles.bgImage}
          style={{
            transform: `translate3d(0, ${scrollY * 0.22}px, 0)`,
          }}
        />
        <div className={styles.overlay} />

        {/* Top & middle content row */}
        <div className={styles.heroMainRow}>
          {/* Main Headline & Details */}
          <div className={styles.heroContent}>
            <div className={styles.programTag}>
              <span className={styles.tagPulseDot} />
              <span>{currentPanel.tag}</span>
            </div>

            <h1 className={`${styles.headline} reveal`}>
              {currentPanel.headline}
            </h1>

            <p className={`${styles.subtext} reveal`} style={{ animationDelay: '0.1s' }}>
              {currentPanel.subtext}
            </p>

            <div className={`${styles.ctaGroup} reveal`} style={{ animationDelay: '0.2s' }}>
              <Link href={currentPanel.ctaLink} className={styles.ctaBtn}>
                <span>{currentPanel.ctaText}</span>
                <span className="arrow-icon">↗</span>
              </Link>
              <Link href="#consultation" className={styles.secondaryBtn}>
                <span>Quick Inquiry</span>
              </Link>
            </div>
          </div>

          {/* ELEKS-Style Floating Consultation Card */}
          <div className={`${styles.floatingBadge} reveal-scale`} style={{ animationDelay: '0.25s' }}>
            <div className={styles.badgeHeader}>
              <span className={styles.badgeHeaderDot} />
              <span>Free Evaluation</span>
            </div>
            <p className={styles.badgeTitle}>Receive a complimentary case assessment</p>
            <p className={styles.badgeDesc}>
              Our European immigration specialists assess your documents within 24 hours with zero upfront obligation.
            </p>
            <Link href="#consultation" className={styles.badgeLink}>
              <span>Speak to an expert</span>
              <span className="arrow-icon">↗</span>
            </Link>
          </div>
        </div>

        {/* ELEKS-Style Hero Switcher Tabs Bar */}
        <div className={styles.tabsBar}>
          {heroPanels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActiveTab(panel.id)}
              className={`${styles.tabBtn} ${activeTab === panel.id ? styles.activeTabBtn : ''}`}
            >
              <span>{panel.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Blue features bar with micro-interactions */}
      <div className={styles.featuresBar}>
        <div className="container">
          <div className={styles.featuresInner}>
            {siteData.features.map((feature, i) => (
              <div
                key={feature.id}
                className={`${styles.featureItem} reveal`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.featureIconWrap}>
                  {iconMap[feature.icon]}
                </div>
                <div>
                  <p className={styles.featureTitle}>{feature.title}</p>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
