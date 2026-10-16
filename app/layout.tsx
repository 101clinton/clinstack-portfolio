import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinton — Portfolio",
  description: "Portfolio website of Clinton — developer. Built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
