import localFont from "next/font/local";
import Footer from "../components/footer";
import "./globals.css";

const bahiana = localFont({
  src: "./fonts/Bahiana-Regular.woff2",
  variable: "--font-bahiana",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://autokempkokorin.cz"),
  title: {
    default: "Autokemp Kokořín",
    template: "%s | Autokemp Kokořín",
  },
  description:
    "Autokemp Kokořín ubytování v nádherném údolí Kokořínska. Odpočinek a aktivní dovolená v romantickém údolí Kokořínska.",
  keywords: [
    "kokořín",
    "ubytování v přírodě",
    "kempy",
    "kokořínsko",
    "škola v přírodě",
    "teambuilding",
    "srazy",
    "rodinná dovolená",
    "autokemp",
    "kemp",
  ],
  authors: [{ name: "Autokemp Kokořín" }],
  creator: "www.zbyneksvoboda.cz",
  publisher: "Autokemp Kokořín",
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
    locale: "cs_CZ",
    url: "https://autokempkokorin.cz",
    siteName: "Autokemp Kokořín",
    title: "Autokemp Kokořín",
    description:
      "Autokemp Kokořín ubytování v nádherném údolí Kokořínska. Odpočinek a aktivní dovolená v romantickém údolí Kokořínska.",
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685524449/autokemp/images/poster_gq3dtq.jpg",
        width: 1200,
        height: 630,
        alt: "Autokemp Kokořín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autokemp Kokořín",
    description:
      "Autokemp Kokořín ubytování v nádherném údolí Kokořínska. Odpočinek a aktivní dovolená v romantickém údolí Kokořínska.",
    images: [
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685524449/autokemp/images/poster_gq3dtq.jpg",
    ],
  },
  alternates: {
    canonical: "https://autokempkokorin.cz",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Autokemp Kokořín",
    image:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685524449/autokemp/images/poster_gq3dtq.jpg",
    "@id": "https://autokempkokorin.cz",
    url: "https://autokempkokorin.cz",
    telephone: "+420608869906",
    email: "info@autokempkokorin.cz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kokořínský důl 60",
      addressLocality: "Kokořín",
      postalCode: "277 23",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.4381561,
      longitude: 14.5874186,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  };

  return (
    <html lang="cs" className={bahiana.variable}>
      <head>
        <meta name="author" content="www.zbyneksvoboda.cz" />
        <meta name="copyright" content="2024 Autokemp Kokořín" />
        {/* Preconnect to Cloudinary for faster image loading */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
