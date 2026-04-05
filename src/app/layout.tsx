import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "LinkedIn Engagement Copilot",
  description: "Human-in-the-loop review app for LinkedIn engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
