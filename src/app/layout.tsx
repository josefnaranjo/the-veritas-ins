import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StoriesProvider } from "./providers/StoriesProvider";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex flex-col min-h-screen bg-white`}
      >
        <StoriesProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </StoriesProvider>
      </body>
    </html>
  );
}
