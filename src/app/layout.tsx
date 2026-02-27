import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "~/lib/utils";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "~/app/globals.css";
import { ThemeProvider } from "~/integrations/themes/provider";
import { TooltipProvider } from "~/shadcn/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Note Keeper",
  description: "A book readers companion."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
