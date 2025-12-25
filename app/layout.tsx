import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "RoamRipples - Discover Amazing Destinations",
  description:
    "We are a B2B travel agency built for organizations that need reliability, scale, and precision—not guesswork. Our role is simple: we handle the complexity of travel so your business can focus on what actually matters.From corporate travel management to customized itineraries, negotiated rates, and 24/7 operational support, we act as an extension of your team. We combine industry expertise, strong supplier relationships, and efficient systems to deliver travel solutions that are cost-effective, compliant, and frictionless.Whether you’re managing frequent business travel, large groups, or specialized requirements, we bring clarity to logistics,transparency to pricing, and consistency to service. No fluff, no surprises—just travel that works as hard as your business does.",
  generator: "",
  icons: {
    icon: [
      {
        url: "ror.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "ror.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "ror.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/ror.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: ["Tours", "About", "Contact"],
              url: [
                "https://roamripples.com/tours",
                "https://roamripples.com/about",
                "https://roamripples.com/contact",
              ],
            }),
          }}
        />
      </Head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
