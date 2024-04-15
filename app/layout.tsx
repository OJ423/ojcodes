import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ojcodes.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/en-GB',
    },
  },
  title: "Oliver Smith Software Engineer",
  description: "I'm Oliver and I'm a full-stack software engineer and available for work.",
  openGraph: {
    images:'/opengraph-image.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
