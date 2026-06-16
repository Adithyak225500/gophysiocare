import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoPhysioCare | Home Physiotherapy in Bangalore",

  description:
    "Premium Home Physiotherapy, Orthopedic Rehabilitation, Neuro Rehabilitation, Sports Injury Recovery, Dry Needling, Cupping Therapy and Home Visit Physiotherapy Services Across Bangalore.",

  keywords: [
    "Home Physiotherapy Bangalore",
    "Physiotherapist at Home Bangalore",
    "Home Visit Physiotherapy Bangalore",
    "Orthopedic Physiotherapy Bangalore",
    "Neuro Rehabilitation Bangalore",
    "Sports Physiotherapy Bangalore",
    "Dry Needling Bangalore",
    "Cupping Therapy Bangalore",
    "Strength and Conditioning Bangalore",
    "Post Surgery Rehabilitation Bangalore",
    "Home Rehab Bangalore",
    "GoPhysioCare",
  ],

  authors: [
    {
      name: "GoPhysioCare",
    },
  ],

  creator: "GoPhysioCare",

  metadataBase: new URL("https://gophysiocare.in"),

  openGraph: {
    title: "GoPhysioCare | Premium Home Physiotherapy in Bangalore",

    description:
      "Expert Physiotherapy and Rehabilitation Services Delivered Directly To Your Doorstep Across Bangalore.",

    url: "https://gophysiocare.in",

    siteName: "GoPhysioCare",

    locale: "en_IN",

    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",

    name: "GoPhysioCare",

    url: "https://gophysiocare.in",

    telephone: "+918747912575",

    description:
      "Premium Home Physiotherapy Services Across Bangalore.",

    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },

    founder: {
      "@type": "Person",
      name: "Dr. Gowri",
    },

    medicalSpecialty: [
      "Orthopedic Physiotherapy",
      "Neuro Rehabilitation",
      "Sports Physiotherapy",
      "Stroke Rehabilitation",
      "Home Physiotherapy",
    ],

    sameAs: [
      "https://www.instagram.com/gophysiocare",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}