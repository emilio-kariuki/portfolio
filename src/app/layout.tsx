import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/shared/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Emilio Portfolio",
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
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
