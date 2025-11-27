'use client';

import { LanguageProvider } from '../context/LanguageContext';
import CustomCursor from './CustomCursor';
import ScrollProgressIndicator from './ScrollProgressIndicator';
import SocialLinks from './SocialLinks';

export function Providers({ children }) {
  return (
    <LanguageProvider>
      <CustomCursor />
      <ScrollProgressIndicator />
      <SocialLinks />
      {children}
    </LanguageProvider>
  );
}
