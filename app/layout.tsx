import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//Theme
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site de Clémence Fernandez",
  description: "Cours particuliers à Anglet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header /> {children} <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
