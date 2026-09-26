'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteData } from '@/lib/data';
import { useTheme } from '@/hooks/useTheme';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            {/* Official Logo — clean transparent, switches based on theme */}
            <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
              <img
                src={theme === 'dark' ? '/logo-transparent-dark.png' : '/logo-transparent-light.png'}
                alt="Human Power Service"
                className={styles.logoImg}
              />
            </Link>

            {/* Desktop Nav — center */}
            <div className={styles.desktopNav}>
              {siteData.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop right icons (theme toggles) */}
            <div className={styles.desktopActions}>
              <button
                className={`${styles.iconBtn} ${theme === 'light' ? styles.activeThemeBtn : ''}`}
                onClick={() => toggleTheme('light')}
                aria-label="Light mode"
                title="Switch to Light mode"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-12.37c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"/>
                </svg>
              </button>
              <button
                className={`${styles.iconBtn} ${theme === 'dark' ? styles.activeThemeBtn : ''}`}
                onClick={() => toggleTheme('dark')}
                aria-label="Dark mode"
                title="Switch to Dark mode"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              </button>
            </div>

            {/* Mobile hamburger — right on mobile */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {siteData.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          {/* Mobile Theme Selector */}
          <div className={styles.mobileThemeBox}>
            <span className={styles.mobileThemeLabel}>Appearance</span>
            <div className={styles.mobileThemeBtns}>
              <button
                onClick={() => toggleTheme('light')}
                className={`${styles.mobileThemeBtn} ${theme === 'light' ? styles.mobileThemeBtnActive : ''}`}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => toggleTheme('dark')}
                className={`${styles.mobileThemeBtn} ${theme === 'dark' ? styles.mobileThemeBtnActive : ''}`}
              >
                🌙 Dark
              </button>
            </div>
          </div>
          <div className={styles.mobileDivider} />
          <a href={`tel:${siteData.company.phone}`} className={styles.mobileLink} style={{ animationDelay: '0.3s' }}>
            {siteData.company.phone}
          </a>
        </div>
      )}
    </>
  );
}
