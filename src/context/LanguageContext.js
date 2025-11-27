'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    heroDescription: "From network management to software design. Based in Stuttgart as a Computer Science student, I am evolving my technical background into creative knowledge. My goal is to combine infrastructure experience with code, building strong foundations for a modern career in Software Development.",
    bioTitle: "Biography",
    bioCaption: "// Powered by caffeine and console.log",
    blogTitle: "Dev Blog",
    blogCaption: "// My brain dump. Mostly bugs, sometimes features.",
    photoTitle: "Photography",
    photoCaption: "// High resolution. Low stress."
  },
  el: {
    heroDescription: "Από τη διαχείριση δικτύων, στον σχεδιασμό λογισμικού. Με έδρα τη Στουτγκάρδη και ως φοιτητής Computer Science, εξελίσσω το τεχνικό μου υπόβαθρο σε δημιουργική γνώση. Στόχος μου είναι να συνδυάσω την εμπειρία των υποδομών με τον κώδικα, χτίζοντας γερές βάσεις για μια σύγχρονη καριέρα στο Software Development.",
    bioTitle: "Βιογραφικό",
    bioCaption: "// Με καύσιμο καφεΐνη και console.log",
    blogTitle: "Dev Blog",
    blogCaption: "// Οι σκέψεις μου. Κυρίως bugs, σπάνια features.",
    photoTitle: "Φωτογραφία",
    photoCaption: "// Υψηλή ανάλυση. Χαμηλό άγχος."
  }
};

export function LanguageProvider({ children }) {
  // Default to English
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'el' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
