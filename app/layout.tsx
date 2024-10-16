import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google"
import Navbar from "./custom-components/Navbar";
import Footer from "./custom-components/Footer";
import ThemeWrapper from "./context/ThemeWrapper";
import LandingLayout from "./custom-components/LandingLayout";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeWrapper>
          <LandingLayout children={children} poppins={poppins} />
        </ThemeWrapper>
    </html>
  );
}
