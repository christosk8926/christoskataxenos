'use client';

import { useLanguage } from '../context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    // If we are on a blog page, handle URL routing
    if (pathname.includes('/blog')) {
      if (pathname.startsWith('/en/blog')) {
        // Switch to Greek: Remove '/en' from URL
        const newPath = pathname.replace('/en', '');
        router.push(newPath);
      } else {
        // Switch to English: Add '/en' to URL
        const newPath = `/en${pathname}`;
        router.push(newPath);
      }
      // Sync context state if needed (optional, as URL drives content here)
      if (language === 'en') toggleLanguage(); // if currently en, toggle to el (logic might differ depending on initial state)
      else if (language === 'el') toggleLanguage();

    } else {
      // For non-blog pages (Home), just toggle context state
      toggleLanguage();
    }
  };

  // Determine active language for display
  // If on blog, URL truth. Else, Context truth.
  const isEn = mounted ? (pathname.startsWith('/en') || (language === 'en' && !pathname.startsWith('/blog'))) : false;

  if (!mounted) return null;

  return (
    <button 
      onClick={handleToggle}
      className="lang-switch"
      aria-label="Switch Language"
    >
      <div className="toggle-track">
        <span className={`lang-label ${!isEn ? 'active' : ''}`}>GR</span>
        <span className={`lang-label ${isEn ? 'active' : ''}`}>EN</span>
        <div className={`toggle-thumb ${isEn ? 'right' : 'left'}`} />
      </div>

      <style jsx>{`
        .lang-switch {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1000;
        }

        .toggle-track {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80px;
          height: 36px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          padding: 0 6px;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        
        .lang-switch:hover .toggle-track {
          border-color: rgba(127, 90, 240, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        .lang-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a1b2;
          z-index: 2;
          transition: color 0.3s ease;
          width: 50%;
          text-align: center;
        }

        .lang-label.active {
          color: #fffffe;
        }

        .toggle-thumb {
          position: absolute;
          top: 3px;
          width: 34px;
          height: 28px;
          background: #7f5af0;
          border-radius: 999px;
          z-index: 1;
          transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .toggle-thumb.left {
          transform: translateX(0);
        }

        .toggle-thumb.right {
          transform: translateX(38px);
        }
      `}</style>
    </button>
  );
}