import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page for portfolio",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
