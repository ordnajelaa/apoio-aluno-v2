import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import type React from "react"; // Added import for React
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apoio Aluno",
  description: "Organize your study materials efficiently",
  icons: {
    icon: "/logo-unifesp.png", // Caminho para o ícone na pasta public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex`}>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6">
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </SidebarProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}