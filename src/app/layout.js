import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "../components/Providers";
import GridBackground from "../components/GridBackground";
import Header from "../components/Header";

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
      {/* ΠΡΟΣΟΧΗ: Πρόσθεσα το 'font-sans' και 'antialiased' εδώ! */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-white bg-[#0a0a0c]`}>
        <GridBackground />
        <Providers>
          <Header />
          <main className="min-h-screen relative z-10">
             {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
