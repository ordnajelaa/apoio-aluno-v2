import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Apoio Aluno",
  description: "Organize your study materials efficiently",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-2 py-16">{children}</main>
      </body>
    </html>
  )
}
