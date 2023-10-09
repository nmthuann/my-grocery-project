import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingCart, Sun, User2 } from "lucide-react";
import Link from "next/link";
import Container from "../ui/custom/container";
import { cookies } from "next/headers";
import { UserNav } from "../pages/home/user-nav";

const TopNavbar = () => {
    const cookieStore = cookies();
    const auth = cookieStore.get("user");

    return (
        // <Container>
        // <div className="bg-teal-500 px-20 flex flex-wrap justify-between items-center">
        //     {/* <div className="transform scale-50">
        //         <a href="/">
        //             <img src="/logo.png" alt="Picture of the author" />
        //         </a>
        //     </div> */}
        //     <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 text-amber-50">
        //         <p className="font-bold text-xl">TẠP HÓA</p>
        //     </Link>
        //     <div className="flex space-x-4">
        //         <Input
        //             type="search "
        //             placeholder="Bạn muốn mua gì hôm nay?"
        //             className="text-base text-teal-900 md:w-[100px] lg:w-[700px] "
        //         ></Input>
        //         <Button
        //             className="bg-teal-500 border border-teal-500"
        //             variant="secondary"
        //             size="icon"
        //         >
        //             <Search color="white" />
        //         </Button>
        //     </div>

        //     <div className="flex items-center lg:order-2">
        //         <div className="flex items-center">
        //             <User2 color="white" />
        //             <a
        //                 className="text-white dark:text-green-800 hover:text-green-800 hover:bg-amber-200 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 font-medium rounded-xl text-base  px-2 lg:px-5 py-2 lg:py-3 mr-2 "
        //                 href="#"
        //             >
        //                 Đăng Nhập
        //             </a>
        //         </div>

        //         <div className="space-x-1 flex items-center text-teal-500 bg-amber-200 font-medium rounded-xl text-base px-2 lg:px-5 py-2 mr-2">
        //             <ShoppingCart color="#14b8a6" />
        //             <a href="#">Giỏ Hàng</a>
        //         </div>

        //         <Button
        //             className="bg-teal-500 border border-teal-500"
        //             variant="secondary"
        //             size="icon"
        //         >
        //             <Sun color="white" />
        //         </Button>
        //     </div>
        //     {/* Top Navbar */}
        // </div>
        <div className="bg-slate-50 px-4 lg:px-20 flex flex-wrap justify-between items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 text-slate-900">
                <p className="font-bold text-xl">STORE</p>
            </Link>
            <div className="flex space-x-2 lg:space-x-4 items-center">
                <Input
                    type="search "
                    placeholder="Bạn muốn mua gì hôm nay?"
                    className="text-base text-slate-900 md:w-[100px] lg:w-[300px] xl:w-[700px]"
                ></Input>
                <Button
                    className="bg-slate-50 border border-slate-50"
                    variant="ghost"
                    size="icon"
                >
                    <Search color="gray" />
                </Button>
            </div>
            <div className="flex items-center lg:order-2">
                {/* <div className="flex items-center">
                    <Link
                        href="/auth/login"
                        className="text-slate-900 dark:text-slate-800 hover:text-white hover:bg-slate-500 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 font-medium rounded-xl text-base px-2 lg:px-3 xl:px-5 py-2 lg:py-3"
                    >
                        {auth ? "Tài Khoản" : "Đăng Nhập"}
                    </Link>
                    <User2 color="gray" />
                </div> */}

                {auth ? (
                    <>
                        <div className="flex items-center">
                            Thuận
                            <UserNav />
                        </div>
                    </>
                ) : (
                    <>
                        <Button variant="ghost">
                            <Link href="/auth/login">Đăng Nhập</Link>
                            <User2 color="white" />
                        </Button>
                    </>
                )}

                <Button
                    className="space-x-1 bg-slate-50  py-2 mr-2 relative"
                    variant="ghost"
                    size="icon"
                >
                    <ShoppingCart color="black" />
                    <div className="bg-red-600 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                        0
                    </div>
                </Button>

                <Button
                    className="space-x-1 bg-slate-50  relative"
                    variant="secondary"
                    size="icon"
                >
                    <Heart color="black" />
                    <div className="bg-red-600 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                        0
                    </div>
                </Button>
                <Button
                    className="space-x-5 bg-slate-50"
                    variant="secondary"
                    size="icon"
                >
                    <Sun color="black" />
                </Button>
            </div>
        </div>

        // {/* </Container> */}
    );
};

export default TopNavbar;
