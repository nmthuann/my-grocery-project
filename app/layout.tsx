import Footer from "@/components/shared/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/shared/navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastProvider } from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/shared/header";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cửa hàng điện thoại di động",
    description: "Cửa hàng điện thoại di động",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <ToastProvider />
                    <ModalProvider />
                    <AuthProvider>
                        <Header />
                        <Navbar />
                        {children}
                    </AuthProvider>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
