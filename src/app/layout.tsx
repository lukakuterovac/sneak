import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { protectedRoutes, redirectToLogin } from "@/middleware";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sneak",
  description: "Sneak sneaker store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { user, isAuthenticated, handleLogout } = useAuth();

  if (!isAuthenticated && protectedRoutes.includes(router.usePathname()) {
    redirectToLogin(router);
    return null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          font.className,
          "flex min-h-screen flex-col items-center",
        )}
      >
        {/* <SessionProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={true}
        >
          <Header className="flex w-full items-center border-b border-secondary px-6 py-4 md:px-8" />
          <main className="flex w-full min-w-[300px] max-w-screen-2xl grow flex-col items-center p-4 sm:p-8">
            {children}
          </main>
          <Footer className="mt-auto flex w-full flex-col items-center border border-secondary py-10" />
        </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
