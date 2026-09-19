'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import styles from './Services.module.css';

const filterCategories = [
  { id: 'all', label: 'All Programmes' },
  { id: 'lithuania', label: 'Lithuania 🇱🇹' },
  { id: 'slovakia', label: 'Slovakia 🇸🇰' },
  { id: 'serbia', label: 'Serbia 🇷🇸' },
  { id: 'fasttrack', label: 'Fast-Track ⚡' },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalService, setModalService] = useState<typeof siteData.services[0] | null>(null);

  const filteredServices = siteData.services.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fasttrack') return true;
    return service.id.toLowerCase().includes(activeFilter);
  });

  return (
    <div id="services" className={styles.wrapper}>
      <div className="container">
        {/* Header Area with Title & ELEKS-Style Filter Chips */}
        <div className={styles.headerArea}>
          <h2 className={`section-title reveal`}>Work Permit Programmes</h2>
          <p className={`${styles.subTitle} reveal`}>
            Government-accredited immigration pathways tailored to your qualifications and career goals.
          </p>

          {/* Interactive Filter Chips */}
          <div className={`${styles.filtersBar} reveal`} style={{ animationDelay: '0.1s' }}>
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`${styles.filterChip} ${activeFilter === cat.id ? styles.activeFilterChip : ''}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards row */}
        <div className={styles.cardRow}>
          {filteredServices.map((service, i) => (
            <div
              key={service.id}
              className={styles.cardLink}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`${styles.card} ${hoveredId === service.id ? styles.cardHover : ''} reveal paper`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Flag image area — shimmer effect + zoom on hover */}
                <div
                  className={`${styles.flagBox} ${hoveredId === service.id ? styles.flagBoxHover : ''}`}
                  onClick={() => setModalService(service)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={`https://flagcdn.com/w640/${service.flag.toLowerCase()}.png`}
                    alt={`Flag of ${service.country}`}
                    className={`${styles.flagImg} ${hoveredId === service.id ? styles.flagImgZoom : ''}`}
                  />
                </div>

                {/* Card content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    <Link
                      href={`/services/${service.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {service.title}
                    </Link>
                  </h3>

                  {service.tags && service.tags.length > 0 && (
                    <p className={styles.cardTags}>
                      {service.tags.join(' • ')}
                    </p>
                  )}

                  <p className={styles.cardDesc}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    {/* Quick View Interactive Button */}
                    <button
                      onClick={() => setModalService(service)}
                      className={styles.modalConsultBtn}
                      style={{ padding: '4px 12px', fontSize: '0.8125rem' }}
                    >
                      <span>Quick View</span>
                    </button>

                    {/* Dedicated Page Link */}
                    <Link href={`/services/${service.slug}`} className={styles.cardAction} style={{ borderTop: 'none', padding: 0 }}>
                      <span>Full Programme</span>
                      <span className={styles.cardActionArrow}>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See all services button with arrow */}
        <div className={`${styles.ctaWrap} reveal`}>
          <Link href="/services" className={styles.seeAllBtn}>
            <span>See all services</span>
            <span className="arrow-icon">↗</span>
          </Link>
        </div>
      </div>

      {/* Interactive Quick View Modal */}
      {modalService && (
        <div className={styles.modalOverlay} onClick={() => setModalService(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>{modalService.title}</h3>
                <p className={styles.modalSubtitle}>📍 {modalService.country} • {modalService.permitType || 'National Work Visa'}</p>
              </div>
              <button
                className={styles.modalClose}
                onClick={() => setModalService(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDesc}>{modalService.description}</p>

              <div className={styles.modalFactsGrid}>
                <div className={styles.modalFactItem}>
                  <span className={styles.modalFactLabel}>Processing Time</span>
                  <span className={styles.modalFactValue}>{modalService.processingTime || '4-6 Weeks'}</span>
                </div>
                <div className={styles.modalFactItem}>
                  <span className={styles.modalFactLabel}>Validity</span>
                  <span className={styles.modalFactValue}>{modalService.validity || '1-2 Years'}</span>
                </div>
                <div className={styles.modalFactItem}>
                  <span className={styles.modalFactLabel}>Estimated Salary</span>
                  <span className={styles.modalFactValue}>{modalService.salaryRange || 'Competitive EU Wage'}</span>
                </div>
                <div className={styles.modalFactItem}>
                  <span className={styles.modalFactLabel}>Immigration Status</span>
                  <span className={styles.modalFactValue}>Direct Work Authorization</span>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px' }}>
                  Core Requirements:
                </h4>
                <ul className={styles.modalReqsList}>
                  {(modalService.requirements || [
                    'Valid international passport with at least 18 months validity',
                    'Apostilled police clearance certificate',
                    'Documented professional experience or diploma'
                  ]).slice(0, 3).map((req, idx) => (
                    <li key={idx} className={styles.modalReqItem}>
                      <span style={{ color: 'rgb(83, 171, 218)' }}>✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.modalActions}>
              <Link
                href={`/services/${modalService.slug}`}
                className={styles.modalPageBtn}
                onClick={() => setModalService(null)}
              >
                <span>Open Full Programme Page</span>
                <span>↗</span>
              </Link>
              <Link
                href="#consultation"
                className={styles.modalConsultBtn}
                onClick={() => setModalService(null)}
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
