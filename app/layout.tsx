import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { gitlabmono, incognito } from "./assets/font/font";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "onlyVishesh | Software Developer",
  description:
    "onlyVishesh is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://onlyvishesh.vercel.app",
  ogImage:
    "https://res.cloudinary.com/dklos8vki/image/upload/v1747638225/OnlyVishesh_zngciq.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "onlyvishesh.vercel.app",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
