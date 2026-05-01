import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "Katia Burgun | Hypnose Ericksonienne & Communication Animale",
  description: "Katia Burgun, praticienne en hypnose ericksonienne et communication animale en Normandie. Retrouvez équilibre et bien-être.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <div className="bg-site text-site transition-colors duration-500 min-h-screen selection:bg-[#8ba394]/30">
            <Navigation />
            <main className="relative z-10">{children}</main>
            <ContactSection />
            <Footer />
            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
