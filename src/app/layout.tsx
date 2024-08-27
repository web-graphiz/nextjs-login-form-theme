import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ToggleTheme from "@/components/toggleTheme";

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-lightBg dark:bg-darkBg`}>
        <ToggleTheme />
        {children}
      </body>
    </html>
  );
}
