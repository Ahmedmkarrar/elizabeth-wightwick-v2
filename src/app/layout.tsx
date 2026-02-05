import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ListingPopup from "@/components/layout/ListingPopup";

export const metadata: Metadata = {
  title: {
    default: "Elizabeth Wightwick | Estate Agents Wimbledon Village",
    template: "%s | Elizabeth Wightwick",
  },
  description:
    "Independent, family-run estate agency in Wimbledon Village specialising in residential sales, lettings and property management. 30+ years combined experience in SW19.",
  keywords: [
    "estate agents Wimbledon",
    "Wimbledon Village estate agents",
    "property for sale Wimbledon",
    "lettings Wimbledon",
    "Wimbledon property management",
    "SW19 estate agents",
    "Elizabeth Wightwick",
  ],
  openGraph: {
    title: "Elizabeth Wightwick | Estate Agents Wimbledon Village",
    description:
      "Independent, family-run estate agency in Wimbledon Village. Residential sales, lettings and property management.",
    url: "https://elizabeth-wightwick.co.uk",
    siteName: "Elizabeth Wightwick",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ListingPopup />
      </body>
    </html>
  );
}
