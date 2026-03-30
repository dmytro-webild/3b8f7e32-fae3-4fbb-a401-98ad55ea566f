import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Osteria Alla Ghiacciaia | Cucina Friulana a Udine',
  description: 'Scopri l\'Osteria Alla Ghiacciaia: cucina tipica friulana nel cuore di Udine. Frico, cjarsons e piatti storici in un\'atmosfera unica sul canale.',
  openGraph: {
    "title": "Osteria Alla Ghiacciaia",
    "description": "Cucina tradizionale friulana nel centro storico di Udine.",
    "type": "website",
    "siteName": "Osteria Alla Ghiacciaia"
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
