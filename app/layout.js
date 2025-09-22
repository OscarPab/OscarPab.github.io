import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FinalNavbar from "../components/FinalNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio profesional con Next.js y Three.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FinalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}