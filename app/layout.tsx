import Footer from "@/components/shared/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/shared/navbar";
import TopNavbar from "@/components/shared/top-navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tạp Hóa Tân Hiệp",
    description: "Tạp Hóa Tân Hiệp",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <TopNavbar />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
