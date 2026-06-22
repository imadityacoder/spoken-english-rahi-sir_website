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

const SITE_URL = "https://spokenenglishbyrahisir.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spoken English by Rahi Sir | Best Spoken English Classes in Patna",
    template: "%s | Spoken English by Rahi Sir",
  },
  description:
    "Join Patna's trusted spoken English academy. Master fluent English, communication skills, grammar, public speaking, and interview confidence under the guidance of Rahi Sir. Book a Free Trial Class today.",
  keywords: [
    "Best Spoken English Classes in Patna",
    "Spoken English Coaching Patna",
    "English Speaking Course Patna",
    "Interview Preparation Patna",
    "Personality Development Classes Patna",
    "Communication Skills Training Patna",
    "Rahi Sir Spoken English",
    "English Fluency Course Patna",
    "Public Speaking Patna",
    "English Grammar Classes Patna",
  ],
  authors: [{ name: "Rahi Sir" }],
  creator: "Spoken English by Rahi Sir",
  publisher: "Spoken English by Rahi Sir",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Spoken English by Rahi Sir",
    title: "Spoken English by Rahi Sir | From Hesitation to Confidence",
    description:
      "Join Patna's trusted spoken English academy. Master fluent English, communication skills, grammar, public speaking, and interview confidence with Rahi Sir.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Spoken English by Rahi Sir - Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spoken English by Rahi Sir | From Hesitation to Confidence",
    description:
      "Join Patna's trusted spoken English academy. Master fluent English and communication skills with Rahi Sir.",
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
  name: "Spoken English by Rahi Sir",
  alternateName: "Rahi Sir Spoken English",
  description:
    "Patna's trusted spoken English academy. Master fluent English, communication skills, grammar, public speaking, and interview confidence with Rahi Sir.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  telephone: "+919015341661",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Patthar Ki Masjid, Opposite Milan Studio, Tripolia, Ashok Rajpath",
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
      opens: "08:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "247",
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
    name: "Rahi Sir",
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
