import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "José Américo Antunes | Finance Researcher & Central Bank Analyst",
  description:
    "Academic portfolio of José Américo Antunes — Finance researcher, Central Bank of Brazil analyst, and professor specializing in financial intermediation, credit markets, and risk management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
