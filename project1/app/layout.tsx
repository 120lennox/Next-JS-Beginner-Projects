import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



export default function RootLayout({children,}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body>
        <div className="w-full bg-blue-950">
          <h1>layout</h1>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
