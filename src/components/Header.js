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
          justify-content: center; /* Centering the wrapper for its max-width content */
        }

        .header-content {
          width: 100%;
          max-width: 768px; /* Align with blog content (max-w-3xl) */
          margin-left: auto; /* Center the content */
          margin-right: auto; /* Center the content */
          padding: 0 1rem; /* Adjust padding for better alignment with blog p-8 or p-6 */
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Keep LanguageSwitch on the right within this aligned container */
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
                padding: 0 1rem; /* Ensure safe padding on mobile edges */
            }
        }
      `}</style>
    </header>
  );
}
