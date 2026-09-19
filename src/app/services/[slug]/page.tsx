'use client';

import { use } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';
import styles from './serviceDetail.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Find matching service or fallback to first service
  const service = siteData.services.find((s) => s.slug === slug) || siteData.services[0];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Breadcrumb navigation */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>
              <span>Home</span>
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/services" className={styles.breadcrumbLink}>
              <span>Services</span>
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badgeRow}>
              <div className={styles.countryBadge}>
                <img
                  src={`https://flagcdn.com/w80/${service.flag.toLowerCase()}.png`}
                  alt={service.country}
                  className={styles.flagIcon}
                />
                <span>{service.country}</span>
              </div>
              <div className={styles.fastTrackBadge}>
                <span>⚡ Fast-Track Processing</span>
              </div>
            </div>

            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.desc}>{service.description}</p>

            {/* Quick facts strip */}
            <div className={styles.factsBar}>
              <div className={styles.factItem}>
                <p className={styles.factLabel}>Processing Time</p>
                <p className={styles.factValue}>{service.processingTime || '4 - 6 Weeks'}</p>
              </div>
              <div className={styles.factItem}>
                <p className={styles.factLabel}>Permit Type</p>
                <p className={styles.factValue}>{service.permitType || 'National Work Permit'}</p>
              </div>
              <div className={styles.factItem}>
                <p className={styles.factLabel}>Validity</p>
                <p className={styles.factValue}>{service.validity || '1 - 2 Years'}</p>
              </div>
              <div className={styles.factItem}>
                <p className={styles.factLabel}>Salary Range</p>
                <p className={styles.factValue}>{service.salaryRange || 'Market Rate'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* Left Column */}
            <div>
              {/* Requirements & Document Checklist */}
              <div className={styles.mainCard}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.headingDot} />
                  <span>Required Documents & Criteria</span>
                </h2>
                <ul className={styles.checklist}>
                  {(service.requirements || [
                    'Valid International Passport with at least 18 months validity',
                    'Apostilled Police Clearance Certificate',
                    'Proof of Qualifications or minimum 1 year documented experience',
                    'Standard Biometric Passport Photos',
                    'Comprehensive International Health Insurance'
                  ]).map((req, idx) => (
                    <li key={idx} className={styles.checkItem}>
                      <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Priority Occupations */}
              <div className={styles.mainCard}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.headingDot} />
                  <span>Target Industry Sectors</span>
                </h2>
                <div className={styles.occupationsWrap}>
                  {(service.occupations || [
                    'Heavy Vehicle & Transport Drivers',
                    'Skilled Construction & Civil Works',
                    'Automotive & Mechanical Specialists',
                    'Manufacturing & Logistics',
                    'Hospitality & Culinary Professionals'
                  ]).map((occ, idx) => (
                    <div key={idx} className={styles.occTag}>
                      <span>💼</span>
                      <span>{occ}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-step Process */}
              <div className={styles.mainCard}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.headingDot} />
                  <span>Application Roadmap</span>
                </h2>
                <div className={styles.stepsList}>
                  {(service.processSteps || [
                    { step: 1, title: 'Document Verification', desc: 'Pre-audit of candidate diplomas, criminal record extract, and background check.' },
                    { step: 2, title: 'Employer Registration', desc: 'Filing with regional Ministry of Labor and obtaining official work mediation code.' },
                    { step: 3, title: 'Consular Visa Issuance', desc: 'Submission to the relevant Embassy / VFS Global center for entry visa stamping.' },
                    { step: 4, title: 'Arrival & Residence Card', desc: 'Registration in country of destination and receipt of official biometric residence card.' }
                  ]).map((st) => (
                    <div key={st.step} className={styles.stepRow}>
                      <div className={styles.stepNumber}>{st.step}</div>
                      <div>
                        <h3 className={styles.stepTitle}>{st.title}</h3>
                        <p className={styles.stepDesc}>{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Consultation Card */}
            <div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Start Your Application</h3>
                <p className={styles.sidebarSubtitle}>
                  Speak with our legal case managers today to verify your eligibility for the {service.country} programme.
                </p>

                <Link href="#consultation" className={styles.actionBtn}>
                  <span>Book Free Consultation</span>
                  <span className="arrow-icon">↗</span>
                </Link>

                <a href={`tel:${siteData.company.phone}`} className={styles.phoneCallBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{siteData.company.phone}</span>
                </a>

                <div className={styles.guaranteeBox}>
                  <span>🔒</span>
                  <span>100% compliant with Schengen immigration laws and EU directives.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}
