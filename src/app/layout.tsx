import type { Metadata } from "next";
import "./globals.css";
import { sansFont } from "./components/utilities";
import { Navbar } from "./Navbar";

export const metadata: Metadata = {
  title: "Scott Astatine - My Corner of the web ",
  description: "Scott Astatine's (aka Ayush Kumar) corner of the web.",
  authors: {
    url: "https://www.github.com/scott-astatine",
    name: "Scott Astatine",
  },
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sansFont.className} selection:bg-pink`}>
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
