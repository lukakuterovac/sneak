import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sneak",
  description: "Sneak sneaker store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          font.className,
          "flex min-h-screen flex-col items-center",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={true}
        >
          <Header className="flex w-full items-center border-b border-secondary px-6 py-4 md:px-8" />
          <main className="mx-auto my-4 min-w-[300px] max-w-screen-2xl sm:my-8">
            {children}
          </main>
          <Footer className="mt-auto flex w-full flex-col items-center border border-secondary py-10" />
        </ThemeProvider>
      </body>
    </html>
  );
}
