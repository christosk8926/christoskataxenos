import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "../components/Providers";
import LanguageSwitch from "../components/LanguageSwitch";
import GridBackground from "../components/GridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Christos Kataxenos | Developer & Photographer",
  description: "Personal portal of Christos Kataxenos. Exploring the intersection of Software Development, Network Infrastructure, and Photography. Based in Stuttgart.",
  keywords: ["Christos Kataxenos", "Software Developer", "Stuttgart", "Computer Science", "Photography", "Dev Blog"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GridBackground />
        <Providers>
          <LanguageSwitch />
          {children}
        </Providers>
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
          crossOrigin="anonymous"
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
