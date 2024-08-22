"use client";

// import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ModeProvider } from "@/context/ModeProvider";
import { useEffect } from "react";
// import ReactQueryProvider from "@/context/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Offline-first-todo",
//   description: "Offline first todo app",
//   // manifest: "/manifest.json",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);
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
