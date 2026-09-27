import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baliproperty8833.com"),
  title: "Bali Property 8833 | Jual Beli Properti & Villa di Bali",
  description:
    "Bali Property 8833 membantu Anda menemukan villa, rumah, tanah, dan properti investasi di Bali dengan informasi lengkap, legalitas terpercaya, dan konsultasi langsung via WhatsApp.",
  keywords: [
    "Bali Property",
    "Bali Real Estate",
    "Canggu Villa",
    "Bali Property 8833",
    "Villas for sale Bali",
    "Bali Land Investment",
  ],
  authors: [{ name: "Bali Property 8833" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Bali Property 8833 | Selected Properties Across Bali",
    description:
      "Find a property that feels like Bali. Selected villas, houses, land, and commercial spaces in Bali.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Bali Property 8833",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#3178A1]/20 selection:text-[#3178A1] flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
