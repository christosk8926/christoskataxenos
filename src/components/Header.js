'use client';

import LanguageSwitch from './LanguageSwitch';

export default function Header() {
  return (
    <header className="navbar">
      <div className="header-content">
        <LanguageSwitch />
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 900;
          pointer-events: none;
          display: flex;
          justify-content: center; /* Centering the wrapper usually helps */
        }

        .header-content {
          width: 100%;
          max-width: 1200px; /* Constrain width to match typical content max-width */
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Keep it on the right */
          height: 100%;
        }

        .navbar :global(.lang-switch) {
          pointer-events: auto;
        }

        @media (max-width: 768px) {
            .navbar {
                height: 70px;
            }
            .header-content {
                padding: 0 1.5rem; /* Ensure safe padding on mobile edges */
            }
        }
      `}</style>
    </header>
  );
}