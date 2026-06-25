import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://theknowledgehutpatna.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Knowledge Hut | Coaching Institute in Tripolia, Patna",
    template: "%s | The Knowledge Hut",
  },
  description:
    "The Knowledge Hut in Tripolia, Patna offers CBSE, ICSE, and BSEB coaching for Classes 4 to 12, commerce tutoring, Java, Python, C++, DCA, and spoken English.",
  keywords: [
    "The Knowledge Hut Patna",
    "Coaching Institute Tripolia Patna",
    "CBSE Coaching Patna",
    "ICSE Coaching Patna",
    "BSEB Coaching Patna",
    "Class 4 to 12 Coaching Patna",
    "Commerce Coaching Patna",
    "Java Python C++ Training Patna",
    "DCA Course Patna",
    "Spoken English Tripolia Patna",
  ],
  authors: [{ name: "The Knowledge Hut" }],
  creator: "The Knowledge Hut",
  publisher: "The Knowledge Hut",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "The Knowledge Hut",
    title: "The Knowledge Hut | Holistic Coaching in Patna",
    description:
      "CBSE, ICSE, BSEB coaching, commerce tutoring, coding, DCA, and spoken English at The Knowledge Hut in Tripolia, Patna.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "The Knowledge Hut - Tripolia, Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Knowledge Hut | Holistic Coaching in Patna",
    description:
      "Academic coaching, commerce, coding, DCA, and spoken English in Tripolia, Patna.",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": `${SITE_URL}/#organization`,
  name: "The Knowledge Hut",
  alternateName: "Knowledge Hut Tripolia",
  description:
    "The Knowledge Hut in Tripolia, Patna offers CBSE, ICSE, and BSEB coaching for Classes 4 to 12, commerce tutoring, Java, Python, C++, DCA, and spoken English.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  telephone: "+919709095854",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Pathar Ki Masjid, Ashok Rajpath Road, New Khajoorbanna, Chaudhary Tola, Tripolia",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.6125,
    longitude: 85.1444,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "15:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "15:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.youtube.com/",
  ],
  areaServed: {
    "@type": "City",
    name: "Patna",
  },
  founder: {
    "@type": "Person",
    name: "Santosh Sir",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} font-body antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
