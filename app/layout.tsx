import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "UltraPay | Cashless taxi payments for South Africa",
  description:
    "UltraPay lets you pay minibus taxi fares in South Africa without cash. Owners, associations, drivers, vendors and commuters can all use it, and it's live now.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
