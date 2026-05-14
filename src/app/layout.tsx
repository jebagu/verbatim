import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Verbatim | For messages too important to hand to a chatbot",
  description:
    "A guided writing workflow for high-stakes professional communication, built around context, strategy, recipient fit, critique, and voice.",
  openGraph: {
    title: "Verbatim | For messages too important to hand to a chatbot",
    description:
      "A guided workflow for important professional messages, with context intake, recipient modeling, strategic options, critique loops, and final polish.",
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
    title: "Verbatim | For messages too important to hand to a chatbot",
    description:
      "Write the important message better with context, strategy, recipient fit, critique, and voice.",
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
