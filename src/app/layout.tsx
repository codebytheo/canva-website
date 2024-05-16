import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inknut_antiqua = Inknut_Antiqua({ 
  subsets: ["latin"],
  weight:['400','600','700','900'],
  variable:"--font-inknut-antiqua"
});

export const metadata: Metadata = {
  title: "Canva",
  description: "canva is a website for selling and show off painting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inknut_antiqua.variable} font-sans px-2 md:px-32 bg-shwhite text-shblack overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
