'use client';

import { useState } from 'react';
import { siteData } from '@/lib/data';
import styles from './Process.module.css';

const stepBadges = [
  'Initial Stage',
  'Compliance Check',
  'Official Filing',
  'Tracking & Liaison',
  'Success & Delivery',
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.headerArea}>
          <h2 className="section-title reveal">How It Works</h2>
          <p className={`${styles.subTitle} reveal`}>
            A structured, 5-stage legal journey that removes complexity and guarantees full compliance.
          </p>
        </div>

        <div className={styles.steps}>
          {siteData.process.map((step, i) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              className={`${styles.stepCard} ${activeStep === step.step ? styles.activeCard : ''} reveal`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.stepNumWrap}>
                <div className={styles.stepNum}>{step.step}</div>
              </div>

              <div className={styles.stepBody}>
                <div className={styles.stepHeader}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <span className={styles.stepBadge}>{stepBadges[i] || `Stage ${step.step}`}</span>
                </div>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
