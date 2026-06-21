import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velora Technologies — Dream It. We Build It.",
  description: "React, Spring Boot, Django, MySQL — delivered clean, fast, affordable. Starting ₹500.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}