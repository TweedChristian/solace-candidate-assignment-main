import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solace Candidate Assignment",
  description: "Show us what you got",
};

const Header = () => {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4 bg-primary text-primary-foreground">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Solace Advocates
      </h1>
    </header>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          <div className="p-6">
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
