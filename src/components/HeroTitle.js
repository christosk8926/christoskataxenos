'use client';

import styles from './HeroTitle.module.css';
import { useLanguage } from '../context/LanguageContext'; // Import useLanguage

/**
 * HeroTitle Component
 * 
 * Displays the main heading of the landing page with an "Identity Reveal" effect.
 * The reveal effect (English to Greek on hover) is active only when the site language is Greek.
 * When the site language is English, the name remains "Christos Kataxenos" (English) permanently.
 * 
 * Features:
 * - Typewriter entrance animation for the English text.
 * - Blinking cursor effect.
 * - Smooth English-to-Greek text transition on hover (conditional).
 * - Layout stability: Uses a stacking context where the English text reserves the space,
 *   and the Greek text overlays it absolutely, preventing layout shifts.
 * 
 * @returns {JSX.Element} The styled H1 element.
 */
export default function HeroTitle() {
  const { language } = useLanguage(); // Get current language from context

  // Apply a class to disable hover effect when language is English
  const containerClassName = language === 'en' 
    ? `${styles.container} ${styles.noHoverEffect}` 
    : styles.container;

  return (
    <h1 className={containerClassName} aria-label="Christos Kataxenos">
      
      {/* English Text - The layout anchor */}
      <span className={styles.englishLayer}>
        Christos Kataxenos
      </span>

      {/* Greek Text - The overlay (always present in DOM for absolute positioning) */}
      <span className={styles.greekLayer} aria-hidden="true">
        Χρήστος Καταξένος
      </span>
      
    </h1>
  );
}
