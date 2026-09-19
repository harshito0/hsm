'use client';

import { use } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';
import styles from './newsDetail.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const article = siteData.news.find((n) => n.slug === slug) || siteData.news[0];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Breadcrumb bar */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>
              <span>Home</span>
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/news" className={styles.breadcrumbLink}>
              <span>News</span>
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{article.title}</span>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="container">
        <article className={styles.articleContainer}>
          {/* Banner image */}
          <div className={styles.bannerWrap}>
            <img
              src={article.image}
              alt={article.title}
              className={styles.bannerImg}
            />
            {article.category && (
              <span className={styles.categoryOverlay}>{article.category}</span>
            )}
          </div>

          <div className={styles.contentPadding}>
            {/* Metadata row */}
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{article.date}</span>
              </div>
              <span>•</span>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{article.readTime || '3 min read'}</span>
              </div>
              <span>•</span>
              <div className={styles.metaItem}>
                <span>By {article.author || 'Legal Editorial Team'}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className={styles.title}>{article.title}</h1>

            {/* Excerpt Lead */}
            <p className={styles.leadText}>{article.excerpt}</p>

            {/* Article Content Paragraphs */}
            <div>
              {(article.content || [article.excerpt]).map((paragraph, idx) => (
                <p key={idx} className={styles.bodyParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom Consultation CTA */}
            <div className={styles.ctaBox}>
              <div>
                <h3 className={styles.ctaHeading}>Have questions about European work visas?</h3>
                <p className={styles.ctaSub}>Our legal immigration team is ready to evaluate your eligibility today.</p>
              </div>
              <Link href="/#consultation" className={styles.ctaBtn}>
                <span>Book Free Consultation</span>
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
        </article>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}
