import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "THE VERITAS INSTITUTE",
  description: "Empowering Education with responsible AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex flex-col min-h-screen bg-white`}
      >
        <div className="bg-[#E6F0FB] rounded-[40px] overflow-hidden min-h-screen">
          <Header />
          <Hero />
          <Footer />
        </div>

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
