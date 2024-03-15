import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/shared/header";
import { Providers } from "~/lib/providers";
import { SpeedInsights } from "@vercel/speed-insights/next"




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Emilio's Portfolio",
  description:
    "This is Emilio Kariuki's portfolio that highlights everything about him and his doings",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <SpeedInsights />
      <body className={`overscroll-none font-sans ${inter.variable} `}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>

      </body>
    </html>
  );
}
