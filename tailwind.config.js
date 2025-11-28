/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Αν τα έχεις στο src φάκελο
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Αν τα έχεις ΧΥΜΑ στο root (εκτός src) - ΓΙΑ ΣΙΓΟΥΡΙΑ
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Εδώ συνδέουμε το font-sans με τη μεταβλητή που έφτιαξες στο layout.js
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};