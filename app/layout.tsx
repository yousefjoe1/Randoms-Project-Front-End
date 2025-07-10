import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Randoms",
  description: "Randoms is a web application that generates random advice, quotes, and jokes.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  themeColor: "#ffffff",
  openGraph: {
    title: "Randoms",
    description: "Randoms is a web application that generates random advice, quotes, and jokes.",
    url: "https://randoms.vercel.app",
    siteName: "Randoms",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NavBar />
        {children}
      </body>
    </html>
        </ClerkProvider>
  );
}
