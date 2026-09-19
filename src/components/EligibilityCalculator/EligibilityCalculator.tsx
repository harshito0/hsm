'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './EligibilityCalculator.module.css';

const countries = [
  { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹', baseTime: '4 - 6 Weeks', fastTime: '3 - 4 Weeks', salary: '€1,200 - €2,800' },
  { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰', baseTime: '6 - 8 Weeks', fastTime: '4 - 5 Weeks', salary: '€1,100 - €2,400' },
  { id: 'serbia', name: 'Serbia', flag: '🇷🇸', baseTime: '3 - 5 Weeks', fastTime: '2 - 3 Weeks', salary: '€900 - €2,200' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱', baseTime: '4 - 6 Weeks', fastTime: '3 - 4 Weeks', salary: '€1,000 - €2,500' },
];

const domains = [
  { id: 'transport', label: 'Logistics & Heavy Transport', icon: '🚚' },
  { id: 'construction', label: 'Construction & Civil Trades', icon: '🏗️' },
  { id: 'manufacturing', label: 'Manufacturing & Warehouses', icon: '🏭' },
  { id: 'technical', label: 'Technical, IT & Engineering', icon: '💻' },
];

export default function EligibilityCalculator() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [isFastTrack, setIsFastTrack] = useState(true);

  const matchRate = isFastTrack ? 98 : 95;
  const timeline = isFastTrack ? selectedCountry.fastTime : selectedCountry.baseTime;

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <div className={styles.badge}>
            <span>⚡ Interactive Assessment</span>
          </div>
          <h2 className={styles.title}>Calculate Your Visa Eligibility</h2>
          <p className={styles.subtitle}>
            Select your preferred European destination and professional background to instantly verify processing timelines and success probability.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className={`${styles.calcCard} reveal-scale`}>
          <div className={styles.calcGrid}>
            {/* Left Controls */}
            <div className={styles.controlsCol}>
              {/* Step 1: Destination */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <span className={styles.stepDot}>1</span>
                  <span>Select Destination Country:</span>
                </label>
                <div className={styles.chipsGrid}>
                  {countries.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCountry(c)}
                      className={`${styles.chipBtn} ${selectedCountry.id === c.id ? styles.chipActive : ''}`}
                    >
                      <span className={styles.chipIcon}>{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Industry / Domain */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <span className={styles.stepDot}>2</span>
                  <span>Professional Background / Trade:</span>
                </label>
                <div className={styles.chipsGrid}>
                  {domains.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDomain(d)}
                      className={`${styles.chipBtn} ${selectedDomain.id === d.id ? styles.chipActive : ''}`}
                    >
                      <span className={styles.chipIcon}>{d.icon}</span>
                      <span>{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Priority Processing */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>
                  <span className={styles.stepDot}>3</span>
                  <span>Processing Priority:</span>
                </label>
                <div className={styles.chipsGrid}>
                  <button
                    onClick={() => setIsFastTrack(true)}
                    className={`${styles.chipBtn} ${isFastTrack ? styles.chipActive : ''}`}
                  >
                    <span className={styles.chipIcon}>⚡</span>
                    <span>Fast-Track Express</span>
                  </button>
                  <button
                    onClick={() => setIsFastTrack(false)}
                    className={`${styles.chipBtn} {!isFastTrack ? styles.chipActive : ''}`}
                  >
                    <span className={styles.chipIcon}>📅</span>
                    <span>Standard Processing</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Live Results Card */}
            <div className={styles.resultCol}>
              <div>
                <div className={styles.resultHeader}>
                  <span className={styles.resultTitle}>Eligibility Match</span>
                  <span className={styles.statusPill}>● Pre-Approved Category</span>
                </div>

                <div className={styles.scoreRow}>
                  <span className={styles.scoreNum}>{matchRate}%</span>
                  <span className={styles.scoreLabel}>High Match</span>
                </div>

                {/* Meter track */}
                <div className={styles.meterTrack}>
                  <div
                    className={styles.meterFill}
                    style={{ width: `${matchRate}%` }}
                  />
                </div>

                {/* Dynamic Stats Lines */}
                <div className={styles.statDetails}>
                  <div className={styles.statLine}>
                    <span className={styles.statLineLabel}>Selected Country</span>
                    <span className={styles.statLineValue}>{selectedCountry.flag} {selectedCountry.name}</span>
                  </div>
                  <div className={styles.statLine}>
                    <span className={styles.statLineLabel}>Estimated Timeline</span>
                    <span className={styles.statLineValue}>{timeline}</span>
                  </div>
                  <div className={styles.statLine}>
                    <span className={styles.statLineLabel}>Monthly Wage Estimate</span>
                    <span className={styles.statLineValue}>{selectedCountry.salary}</span>
                  </div>
                  <div className={styles.statLine}>
                    <span className={styles.statLineLabel}>Documents Required</span>
                    <span className={styles.statLineValue}>4 Core Documents</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="#consultation" className={styles.applyBtn}>
                <span>Claim Free Assessment</span>
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
