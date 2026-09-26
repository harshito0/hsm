'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';
import { siteData } from '@/lib/data';
import styles from './offices.module.css';

const officesList = [
  {
    city: 'Warsaw',
    country: 'Poland 🇵🇱',
    address: 'Al. Jerozolimskie 81, 02-001 Warsaw',
    phone: siteData.company.phone,
    email: siteData.company.email,
    hours: 'Mon - Fri: 09:00 - 18:00 (CET)',
    role: 'Central European Operations & Legal Team',
    flag: 'PL',
  },
  {
    city: 'Vilnius',
    country: 'Lithuania 🇱🇹',
    address: 'Gedimino pr. 20, LT-01103 Vilnius',
    phone: siteData.company.phone,
    email: siteData.company.email,
    hours: 'Mon - Fri: 09:00 - 17:30 (EET)',
    role: 'Baltic Employment & MIGRIS Processing Office',
    flag: 'LT',
  },
  {
    city: 'Bratislava',
    country: 'Slovakia 🇸🇰',
    address: 'Štúrova 4, 811 02 Bratislava',
    phone: siteData.company.phone,
    email: siteData.company.email,
    hours: 'Mon - Fri: 09:00 - 17:00 (CET)',
    role: 'Slovak Ministry & Labor Office Liaison',
    flag: 'SK',
  },
  {
    city: 'Belgrade',
    country: 'Serbia 🇷🇸',
    address: 'Kneza Miloša 12, 11000 Belgrade',
    phone: siteData.company.phone,
    email: siteData.company.email,
    hours: 'Mon - Fri: 09:00 - 17:00 (CET)',
    role: 'Balkan Work Permit & Single Permit Bureau',
    flag: 'RS',
  },
];

export default function OfficesPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Global Offices</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <div style={{ maxWidth: '750px' }}>
            <div className={styles.badge}>
              <span>📍 Global Presence</span>
            </div>
            <h1 className={styles.title}>
              Our International Offices
            </h1>
            <p className={styles.heroSub}>
              Visit our licensed immigration bureaus across Central and Eastern Europe for in-person document legalization, case consultations, and biometric appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <div className={styles.gridSection}>
        <div className="container">
          <div className={styles.officesGrid}>
            {officesList.map((office) => (
              <div
                key={office.city}
                className={styles.officeCard}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 className={styles.cityName}>
                      {office.city}
                    </h3>
                    <p className={styles.countryName}>
                      {office.country}
                    </p>
                  </div>
                  <img
                    src={`https://flagcdn.com/w80/${office.flag.toLowerCase()}.png`}
                    alt={office.country}
                    className={styles.flagImg}
                  />
                </div>

                <div className={styles.roleBadge}>
                  {office.role}
                </div>

                <div className={styles.infoList}>
                  <div>
                    <strong>Address:</strong> {office.address}
                  </div>
                  <div>
                    <strong>Working Hours:</strong> {office.hours}
                  </div>
                  <div>
                    <strong>Direct Hotline:</strong> <a href={`tel:${office.phone}`} className={styles.infoLink}>{office.phone}</a>
                  </div>
                  <div>
                    <strong>Email:</strong> <a href={`mailto:${office.email}`} className={styles.infoLink}>{office.email}</a>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Link
                    href="/#consultation"
                    className={styles.footerLink}
                  >
                    <span>Schedule in-person appointment</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}

