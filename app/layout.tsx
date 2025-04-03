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
  title:"Adam Hitzger's blog",
  icons: {
    icon: { url: "/favicon.ico"} 
    },
  applicationName: "Adam Hitzger's blog",
  generator: "Next.ts",
  authors: [{name: "Adam Hitzger"}],
  description: "Explore in-depth tutorials, projects, and insights on Next.js, React, Rust, Arduino, and more. Stay updated with the latest trends in web development, backend engineering, and embedded systems.",
  keywords: [
    "next.js",
    "react",
    "rust",
    "arduino",
    "web development",
    "full-stack development",
    "embedded systems",
    "typescript",
    "tailwindcss",
    "shadcn",
    "actix",
    "axum",
    "influxdb",
    "esp32",
    "programming tutorials",
    "coding projects",
    "software engineering"
  ],
  alternates: {
    canonical: "https://blog.adamhitzger.dev",
  },
  creator: "Adam Hitzger",
        publisher: "Adam Hitzger",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
          },
  openGraph: {
    title: "Adam Hitzger's blog",
    description: "Explore in-depth tutorials, projects, and insights on Next.js, React, Rust, Arduino, and more. Stay updated with the latest trends in web development, backend engineering, and embedded systems.",
    url: "https://blog.adamhitzger.dev",
    siteName: "Adam Hitzger's blog",
    images: [
      {
        url: "/realfotky/brana.jpg",
        width: 800,
        height: 600,
      }
    ],
    locale: "cs_CZ",
    type: "website",
  },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Adam Hitzger's blog",
      description: "Explore in-depth tutorials, projects, and insights on Next.js, React, Rust, Arduino, and more. Stay updated with the latest trends in web development, backend engineering, and embedded systems.",
      images: ["https://blog.adamhitzger.dev"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-8 space-y-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
