import Footer from "@/components/shared/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/shared/navbar";
import TopNavbar from "@/components/shared/top-navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            {/* <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                crossOrigin="anonymous"
            ></link> */}
            <body className={font.className}>
                <TopNavbar />
                <Navbar />
                {children}
                <Footer />
                {/* <div className="container">
                    <div className="row justify-content-md-center p-2">
                        <div className="col-md-auto">
                            <select
                                className="form-select form-select-sm mb-3"
                                id="city"
                                aria-label=".form-select-sm"
                            >
                                <option value="" selected>
                                    Chọn tỉnh thành
                                </option>
                            </select>

                            <select
                                className="form-select form-select-sm mb-3"
                                id="district"
                                aria-label=".form-select-sm"
                            >
                                <option value="" selected>
                                    Chọn quận huyện
                                </option>
                            </select>

                            <select
                                className="form-select form-select-sm"
                                id="ward"
                                aria-label=".form-select-sm"
                            >
                                <option value="" selected>
                                    Chọn phường xã
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                    crossOrigin="anonymous"
                ></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
                <script src="/app.jsx"></script> */}
            </body>
        </html>
    );
}
