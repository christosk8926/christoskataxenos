'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();

  // Check if we are on a single blog post (starts with /blog/ but is not exactly /blog)
  const isBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';

  return (
    <header className="navbar">
      <Link href="/" className="logo">
        {/* Simple text logo or icon */}
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fffffe' }}>
            CK
        </span>
      </Link>

      {/* 
          Conditional rendering: 
          The user requested the navbar be minimalist and NEVER show the current page title.
          If we were to show a title elsewhere, we would gate it here. 
          Since we are strictly adhering to "never show", we just render the Logo.
      */}
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 1000;
          /* Optional: minimal background or blur if desired, keeping it transparent for now as requested "minimalist" */
          pointer-events: none; /* Let clicks pass through empty areas */
        }

        .logo {
          pointer-events: auto;
          text-decoration: none;
          /* Add backdrop filter if logo needs to pop over content */
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 0 1rem;
            }
        }
      `}</style>
    </header>
  );
}
