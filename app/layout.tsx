import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import LenisProvider from "./components/LenisProvider";
import PageLoader from "./components/PageLoader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hyper Visuals — Timeless Euphoria",
  description: "Cinematic photography & videography. Sri Lanka & Worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KB5J9JRW');`}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${dmMono.variable} ${playfair.variable} antialiased`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB5J9JRW" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <div className="grain-overlay" aria-hidden="true" />
        <PageLoader />
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
