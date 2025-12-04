import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/Announcement";
import "./globals.css";

const movatif = localFont({
  src: "./Fonts/Movatif W00 Light.ttf",
  variable: "--font-title",
  display: "swap",
});

const cascadia = localFont({
  src: "./Fonts/Cascadia.ttf",
  variable: "--font-heading",
  display: "swap",
})

const lemonMilk = localFont({
  src: "./Fonts/Weissenhof_Grotesk.ttf",
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IBA Computer Science Society",
  description: "A community for computer science enthusiasts at IBA.",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${movatif.variable}
          ${cascadia.variable}
          ${lemonMilk.variable}
          antialiased
        `}
      >
        <AnnouncementBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
