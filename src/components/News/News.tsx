'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import styles from './News.module.css';

export default function News() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [modalArticle, setModalArticle] = useState<typeof siteData.news[0] | null>(null);

  return (
    <div id="news" className={styles.wrapper}>
      <div className="container">
        {/* Section title & subtitle */}
        <div className={styles.headerArea}>
          <h2 className="section-title reveal">Latest Migration Updates</h2>
          <p className={`${styles.subTitle} reveal`}>
            Official legal notifications, embassy policy changes, and consular statistics.
          </p>
        </div>

        {/* News cards */}
        <div className={styles.cardRow}>
          {siteData.news.map((article, i) => (
            <div
              key={article.id}
              className={styles.cardLink}
              onMouseEnter={() => setHoveredId(article.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <article
                className={`${styles.card} ${hoveredId === article.id ? styles.cardHover : ''} reveal`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Thumbnail with category tag */}
                <div
                  className={styles.thumbWrap}
                  onClick={() => setModalArticle(article)}
                  style={{ cursor: 'pointer' }}
                >
                  {article.category && (
                    <span className={styles.categoryTag}>{article.category}</span>
                  )}
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`${styles.thumb} ${hoveredId === article.id ? styles.thumbZoom : ''}`}
                  />
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <span className={styles.date}>{article.date}</span>
                  <h3 className={styles.cardTitle}>
                    <Link
                      href={`/news/${article.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
                    <button
                      onClick={() => setModalArticle(article)}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgb(83, 171, 218)',
                        color: 'rgb(58, 119, 152)',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Quick Read
                    </button>

                    <Link
                      href={`/news/${article.slug}`}
                      className={styles.readMore}
                      style={{ borderTop: 'none', padding: 0 }}
                    >
                      <span>Full Article</span>
                      <span className={styles.readMoreArrow}>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* See all news button */}
        <div className={`${styles.ctaWrap} reveal`}>
          <Link href="/news" className={styles.seeAllBtn}>
            <span>See all news</span>
            <span className="arrow-icon">↗</span>
          </Link>
        </div>
      </div>

      {/* Interactive Quick Read Modal */}
      {modalArticle && (
        <div className={styles.modalOverlay} onClick={() => setModalArticle(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>{modalArticle.title}</h3>
                <p className={styles.modalMeta}>📅 {modalArticle.date} • {modalArticle.category} • {modalArticle.readTime || '3 min read'}</p>
              </div>
              <button
                className={styles.modalClose}
                onClick={() => setModalArticle(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <img
                src={modalArticle.image}
                alt={modalArticle.title}
                className={styles.modalImage}
              />
              <p style={{ fontWeight: 600, color: '#334155', lineHeight: 1.6 }}>
                {modalArticle.excerpt}
              </p>
              {(modalArticle.content || []).map((p, idx) => (
                <p key={idx} className={styles.modalParagraph}>{p}</p>
              ))}
            </div>

            <div className={styles.modalActions}>
              <Link
                href={`/news/${modalArticle.slug}`}
                className={styles.modalPageBtn}
                onClick={() => setModalArticle(null)}
              >
                <span>Read Full Article Page</span>
                <span>↗</span>
              </Link>
              <button
                className={styles.modalCloseTextBtn}
                onClick={() => setModalArticle(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
