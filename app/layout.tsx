import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omraan Shibani | AI Engineer",
  description: "AI Engineer & Automation Architect. Building AI systems that book calls, reduce busywork, and scale delivery.",
  keywords: ["AI", "Automation", "Python", "TypeScript", "n8n", "LLMs"],
  authors: [{ name: "Omraan Shibani" }],
  openGraph: {
    title: "Omraan Shibani | AI Engineer",
    description: "AI Engineer & Automation Architect",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0b0b" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
