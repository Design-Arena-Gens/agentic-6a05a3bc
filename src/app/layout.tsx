import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

import { PlayerProvider } from "@/context/player-context";
import { Sidebar } from "@/components/sidebar";
import { PlayerBar } from "@/components/player-bar";
import { TopBar } from "@/components/top-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melofy — Stream the sound you love",
  description:
    "Melofy is a Spotify-inspired streaming experience featuring curated playlists, immersive visuals, and zero-paywall listening.",
  metadataBase: new URL("https://agentic-6a05a3bc.vercel.app"),
  openGraph: {
    title: "Melofy",
    description: "A vibrant Spotify-style streaming experience built with Next.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melofy",
    description: "Your new home for playlists and discoveries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-white antialiased`}
      >
        <PlayerProvider>
          <div className="flex min-h-screen w-full">
            <Sidebar />
            <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto">
                <TopBar />
                <main className="px-6 pb-32 pt-6 md:px-10 lg:px-14">{children}</main>
              </div>
              <PlayerBar />
            </div>
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
