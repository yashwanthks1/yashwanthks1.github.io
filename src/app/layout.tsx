import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Yashwanth K S | Backend Developer Portfolio",
  description: "Portfolio of Yashwanth KS - Java Backend Developer specializing in Spring Boot, WebFlux, and microservices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
