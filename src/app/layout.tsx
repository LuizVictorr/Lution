import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lution",
  description: "The best workspace for you",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/LU-light.png",
        href: "/LU-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/LU-dark.png",
        href: "/LU-dark.png",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="lution-theme-2"
        >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
