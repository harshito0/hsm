'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';
import { siteData } from '@/lib/data';

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
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f8', paddingTop: '64px' }}>
      <Navbar />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'rgba(0,0,0,0.6)' }}>
            <Link href="/" style={{ color: 'rgb(83, 171, 218)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(0,0,0,0.85)', fontWeight: 500 }}>Global Offices</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '56px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: '750px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'rgba(83, 171, 218, 0.25)', border: '1px solid rgba(83, 171, 218, 0.5)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: '#cbe9f9', marginBottom: '16px' }}>
              <span>📍 Global Presence</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.2 }}>
              Our International Offices
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
              Visit our licensed immigration bureaus across Central and Eastern Europe for in-person document legalization, case consultations, and biometric appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <div style={{ padding: '56px 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {officesList.map((office) => (
              <div
                key={office.city}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '32px 28px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>
                      {office.city}
                    </h3>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgb(83, 171, 218)', margin: 0 }}>
                      {office.country}
                    </p>
                  </div>
                  <img
                    src={`https://flagcdn.com/w80/${office.flag.toLowerCase()}.png`}
                    alt={office.country}
                    style={{ width: '36px', height: '24px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.1)' }}
                  />
                </div>

                <div style={{ fontSize: '0.8125rem', color: '#64748b', background: '#f8fafc', padding: '10px 14px', borderRadius: '6px' }}>
                  {office.role}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'rgba(0,0,0,0.75)' }}>
                  <div>
                    <strong>Address:</strong> {office.address}
                  </div>
                  <div>
                    <strong>Working Hours:</strong> {office.hours}
                  </div>
                  <div>
                    <strong>Direct Hotline:</strong> <a href={`tel:${office.phone}`} style={{ color: 'rgb(83, 171, 218)', textDecoration: 'none' }}>{office.phone}</a>
                  </div>
                  <div>
                    <strong>Email:</strong> <a href={`mailto:${office.email}`} style={{ color: 'rgb(83, 171, 218)', textDecoration: 'none' }}>{office.email}</a>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <Link
                    href="/#consultation"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'rgb(58, 119, 152)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                    }}
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
