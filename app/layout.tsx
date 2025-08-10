import type { Metadata } from "next";
import { Arvo, Varela_Round } from "next/font/google";
import { Bitcount_Grid_Double } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const bitcountPropDouble = Bitcount_Grid_Double({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400"],
});

const arvo = Arvo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const varelaRound = Varela_Round({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "IBA Computer Science Society",
  description: "A community for computer science enthusiasts at IBA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${bitcountPropDouble.variable} 
          ${arvo.variable} 
          ${varelaRound.variable} 
          antialiased
        `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}