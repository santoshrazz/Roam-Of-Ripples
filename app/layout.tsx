import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoamRipples - Discover Amazing Destinations",
  description:
    "We are a B2B travel agency built for organizations that need reliability, scale, and precision—not guesswork. Our role is simple: we handle the complexity of travel so your business can focus on what actually matters.From corporate travel management to customized itineraries, negotiated rates, and 24/7 operational support, we act as an extension of your team. We combine industry expertise, strong supplier relationships, and efficient systems to deliver travel solutions that are cost-effective, compliant, and frictionless.Whether you’re managing frequent business travel, large groups, or specialized requirements, we bring clarity to logistics,transparency to pricing, and consistency to service. No fluff, no surprises—just travel that works as hard as your business does.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
