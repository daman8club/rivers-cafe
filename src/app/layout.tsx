import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Rivers Cafe USA - Premium El Salvador Coffee | Volcanic Soil Beans",
    template: "%s | Rivers Cafe USA"
  },
  description: "Experience premium coffee from El Salvador's volcanic soil. Order direct for faster service, exclusive rewards, and the finest artisan coffee blends. Skip delivery apps - order from Rivers Cafe USA.",
  keywords: ["premium coffee", "El Salvador coffee", "volcanic soil coffee", "artisan coffee", "coffee delivery", "specialty coffee", "Rivers Cafe", "coffee subscription", "loyalty rewards"],
  authors: [{ name: "Rivers Cafe USA" }],
  creator: "Rivers Cafe USA",
  publisher: "Rivers Cafe USA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riverscafe.com",
    siteName: "Rivers Cafe USA",
    title: "Rivers Cafe USA - Premium El Salvador Coffee",
    description: "Premium coffee from El Salvador's volcanic soil. Order direct for exclusive rewards and faster service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rivers Cafe USA - Premium Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivers Cafe USA - Premium El Salvador Coffee",
    description: "Premium coffee from El Salvador's volcanic soil. Order direct for exclusive rewards.",
    images: ["/og-image.jpg"],
    creator: "@riverscafeusa",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://riverscafe.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2B1B17" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-warm-cream`}
      >
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Rivers Cafe USA",
              description: "Premium coffee from El Salvador's volcanic soil with exclusive rewards and faster service.",
              url: "https://riverscafe.com",
              telephone: "+1-212-555-CAFE",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Broadway",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7589",
                longitude: "-73.9851",
              },
              openingHours: "Mo-Fr 06:00-20:00, Sa-Su 07:00-21:00",
              servesCuisine: "Coffee",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1250",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
