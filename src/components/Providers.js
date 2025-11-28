import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import ScrollProgressIndicator from './ScrollProgressIndicator';

export function Providers({ children }) {
  return (
    <LanguageProvider>
      <ScrollProgressIndicator />
      {children}
    </LanguageProvider>
  );
}
