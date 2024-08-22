// import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ModeProvider } from "@/context/ModeProvider";
// import ReactQueryProvider from "@/context/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offline-first-todo",
  description: "Offline first todo app",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*  */}
        {/* <ReactQueryProvider> */}
        <ModeProvider>
          <Navigation />
          <div className="container mx-auto px-2">{children}</div>
        </ModeProvider>
        {/* </ReactQueryProvider> */}
      </body>
    </html>
  );
}
