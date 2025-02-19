import type { Metadata } from "next";
import localFont from "next/font/local";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import Header from "components/Header/Header";

const aeonikFont = localFont({
  src: [
    {
      path: "../assets/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Predictus",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aeonikFont.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
