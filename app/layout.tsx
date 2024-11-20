import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased overflow-x-hidden overflow-y-hidden bg-gray-100",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "ligth" }}>
          <div className="light flex flex-col h-screen overflow-x-hidden">
            <main className="container mx-auto px-0 md:px-6 flex-grow">
              <section className="flex flex-col items-center justify-center gap-4 ">
                <div className="inline-block w-screen text-center justify-center max-w-[1500px] shadow-lg">
                  {children}
                </div>
              </section>
              <ToastContainer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
