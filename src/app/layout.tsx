import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Verbatim | Write extraordinary emails",
  description:
    "Verbatim turns messy thoughts, voice notes, email threads, and workspace context into extraordinary professional messages through a guided workflow.",
  openGraph: {
    title: "Verbatim | Write extraordinary emails",
    description:
      "A guided workflow for professional email, with context intake, critique loops, and recipient personas.",
    url: siteUrl,
    siteName: "Verbatim",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Verbatim landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verbatim | Write extraordinary emails",
    description:
      "Verbatim starts with intent, context, audience, structure, and the response you are trying to earn.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
