import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Verbatim | Write the email you meant to send",
  description:
    "Verbatim is a local-first professional email writing workflow that turns context, voice notes, and recipient personas into sharper messages.",
  openGraph: {
    title: "Verbatim | Write the email you meant to send",
    description:
      "A writing laboratory for high-stakes professional email, with workflows, critique loops, and recipient personas.",
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
    title: "Verbatim | Write the email you meant to send",
    description:
      "More than proofreading. Verbatim helps you structure, draft, critique, and finalize professional emails.",
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
