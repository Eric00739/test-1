import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RF & Wi-Fi Control Solutions for OEMs | FastFun Remote (China OEM/ODM)",
  description: "15+ years, 500+ customers, 32+ countries. RF transmitters/receivers, Car Remote, Wi-Fi Switch, Wi-Fi Socket. 7-day prototyping, 98% on-time. Get samples & quotes in 24h.",
  keywords: ["RF control", "Wi-Fi solutions", "OEM", "ODM", "remote control", "smart home", "IoT", "RF transmitter", "RF receiver", "car remote", "Wi-Fi switch", "Wi-Fi socket", "China manufacturer", "FastFun Remote"],
  authors: [{ name: "FastFun Remote Team" }],
  creator: "FastFun Remote",
  publisher: "FastFun Remote",
  robots: "index, follow",
  openGraph: {
    title: "RF & Wi-Fi Control Solutions for OEMs | FastFun Remote",
    description: "15+ years, 500+ customers, 32+ countries. RF transmitters/receivers, Car Remote, Wi-Fi Switch, Wi-Fi Socket. 7-day prototyping, 98% on-time.",
    url: "https://fastfunremote.com",
    siteName: "FastFun Remote",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/factory-hero.jpg",
        width: 1440,
        height: 720,
        alt: "FastFun Remote Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RF & Wi-Fi Control Solutions for OEMs | FastFun Remote",
    description: "15+ years, 500+ customers, 32+ countries. 7-day prototyping, 98% on-time delivery.",
    images: ["/factory-hero.jpg"],
  },
  alternates: {
    canonical: "https://fastfunremote.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FastFun Remote",
              "url": "https://fastfunremote.com",
              "logo": "https://fastfunremote.com/logo.svg",
              "description": "Reliable RF & Wi-Fi control solutions for OEMs worldwide. 15+ years, 500+ customers, 32+ countries.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dongguan",
                "addressCountry": "CN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+86-xxx-xxxx",
                  "contactType": "sales",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/fastfun-remote",
                "https://www.youtube.com/@fastfunremote"
              ],
              "foundingDate": "2009",
              "employeeCount": "100-249",
              "areaServed": "Worldwide",
              "knowsAbout": [
                "RF Control Systems",
                "Wi-Fi Solutions",
                "OEM Manufacturing",
                "ODM Services",
                "IoT Development",
                "Smart Home Technology",
                "Remote Control Systems"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "RF & Wi-Fi Control Products",
                "itemListElement": [
                  {
                    "@type": "Product",
                    "name": "RF Transmitters",
                    "description": "315/433/868/915 MHz RF transmitters with rolling/fixed codes"
                  },
                  {
                    "@type": "Product",
                    "name": "RF Receivers",
                    "description": "High-sensitivity ASK/FSK RF receivers"
                  },
                  {
                    "@type": "Product",
                    "name": "Car Remote (Key Fob)",
                    "description": "Customizable rolling-code key fobs for automotive applications"
                  },
                  {
                    "@type": "Product",
                    "name": "Wi-Fi Switch",
                    "description": "2.4 GHz Wi-Fi wall switches with app control"
                  },
                  {
                    "@type": "Product",
                    "name": "Wi-Fi Socket",
                    "description": "Smart plugs with energy monitoring and OEM branding"
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
