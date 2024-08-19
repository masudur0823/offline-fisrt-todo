import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offline-first-todo",
  description: "Offline first todo app",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*  */}
        <Navigation />
        <div className="container mx-auto px-2">{children}</div>
      </body>
    </html>
  );
}
