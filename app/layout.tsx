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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}