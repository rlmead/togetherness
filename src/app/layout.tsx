import type { Metadata } from "next";
import { atkinson_hyperlegible } from "./ui/fonts";
import Nav from "./ui/navbar";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "gather here.",
  description:
    "A social network for forming local friendship groups based on shared interests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={atkinson_hyperlegible.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
