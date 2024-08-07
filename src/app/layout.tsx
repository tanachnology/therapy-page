import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header/Header";
import { Footer } from "@/components/shared/Footer/Footer";
import { useRouter } from 'next/router';
import { ContactHeader } from "@/components/shared/Header/ContactHeader";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esmeralda Therapy",
  description: "Therapy services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 /*  const router = useRouter();
  const isHomePage = router.pathname === '/'; */

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {!isHomePage && <ContactHeader />} */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
