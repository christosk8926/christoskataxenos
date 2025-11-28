'use client';

import LanguageSwitch from './LanguageSwitch'; // Import LanguageSwitch

export default function Header() {
  return (
    <header className="navbar">
      {/* Home icon (house SVG) REMOVED as requested */}
      {/* The left side is now empty, fulfilling the "almost empty" requirement */}

      {/* Language Switcher on the right side */}
      <LanguageSwitch />
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Push LanguageSwitch to the right */
          padding: 0 2rem;
          z-index: 900;
          pointer-events: none;
        }

        /* Override LanguageSwitch's internal padding for consistent header padding */
        .navbar :global(.lang-switch) {
          padding: 0.5rem 1rem;
          pointer-events: auto; /* Re-enable pointer events for the button */
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 0 1rem;
                height: 70px;
            }
        }
      `}</style>
    </header>
  );
}
