'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="lang-switch"
      aria-label="Switch Language"
    >
      <span className={language === 'en' ? 'active' : ''}>EN</span>
      <span className="separator">/</span>
      <span className={language === 'el' ? 'active' : ''}>EL</span>

      <style jsx>{`
        .lang-switch {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: transparent;
          border: 1px solid rgba(127, 90, 240, 0.3);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          color: #94a1b2;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 100;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          backdrop-filter: blur(5px);
        }

        .lang-switch:hover {
          border-color: #7f5af0;
          box-shadow: 0 0 15px rgba(127, 90, 240, 0.2);
          color: #fffffe;
        }

        .separator {
          opacity: 0.5;
        }

        .active {
          color: #7f5af0;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(127, 90, 240, 0.5);
        }

        @media (max-width: 768px) {
            .lang-switch {
                top: 1rem;
                right: 1rem;
                padding: 0.4rem 0.8rem;
            }
        }
      `}</style>
    </button>
  );
}
