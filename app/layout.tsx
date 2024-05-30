import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Banner from "./_components/banner";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY SHRE",
  description: "NFC Cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        {children}
      </body>
    </html>
  );
}
