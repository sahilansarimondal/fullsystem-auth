import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
import Container from "react-bootstrap/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KinVault",
  description: "This is a proof of concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
          <div className=" border-b">
            <Navbar />
          </div>
          <div>
            <Container className="d-flex justify-content-center ">{children}</Container>
          </div>
        </body>
      </SessionWrapper>
    </html>
  );
}
