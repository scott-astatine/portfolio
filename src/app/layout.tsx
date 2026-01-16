import type { Metadata } from "next";
import "./globals.css";
import { sansFont } from "./components/utilities";
import { Navbar } from "./Navbar";

export const metadata: Metadata = {
  title: "Scott Astatine | AI Engineer & Architect",
  description: "Portfolio of Scott Astatine (Ayush Kumar) - Machine Learning Practitioner and AI Engineer.",
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
      <body className={`${sansFont.className} selection:bg-neon-purple selection:text-white`}>
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
