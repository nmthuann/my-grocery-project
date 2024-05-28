"use client";

import {
    Gift,
    Heart,
    MapPin,
    Package,
    Phone,
    ShoppingBag,
    ShoppingCart,
    Sun,
    User2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../button";
import axios from "axios";
import Link from "next/link";
import useCart from "@/hooks/use-cart";
import { useAuth } from "@/providers/auth-provider";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { UserNav } from "@/components/shared/user-nav";

const NavbarActions = () => {
    //const [login, setLogin] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(false);
    const { user, login, logout } = useAuth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4 lg:px-4 lg:py-2 lg:order-2 text-base">
            <Link href="/orders" className="hover:text-red-500 text-blue-900">
                <div className="flex flex-row items-center justify-center space-x-2">
                    <Phone />
                    <div className="grid grid-rows-2">
                        <strong>Đặt hàng</strong>
                        <strong>0974666555</strong>
                    </div>
                </div>
            </Link>

            <Link href="/map" className="hover:text-red-500 text-blue-900">
                <div className="flex flex-row items-center justify-center space-x-2">
                    <MapPin />
                    <div className="grid grid-rows-2">
                        <strong>Cửa hàng</strong>
                        <strong>gần bạn</strong>
                    </div>
                </div>
            </Link>

            <Link
                href="/search-order"
                className="hover:text-red-500 text-blue-900"
            >
                <div className="flex flex-row items-center justify-center space-x-2">
                    <Package />
                    <div className="grid grid-rows-2">
                        <strong>Tra cứu</strong>
                        <strong>đơn hàng</strong>
                    </div>
                </div>
            </Link>
            <Link
                href="/search-order"
                className="hover:text-red-500 text-blue-900"
            >
                <div className="flex flex-row items-center justify-center space-x-2">
                    <Gift />
                    <div className="grid grid-rows-2">
                        <strong>Chương trình</strong>
                        <strong>Khuyến mãi</strong>
                    </div>
                </div>
            </Link>

            <div className="flex flex-row space-x-2">
                <Button
                    onClick={() => router.push("/cart")}
                    className="py-2 relative rounded-full"
                    variant="ghost"
                    size="icon"
                >
                    <ShoppingCart className="text-blue-900" />
                    <div className="bg-red-700 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                        {cart.items.length}
                    </div>
                </Button>
            </div>

            {/* <ThemeToggle /> */}

            <UserNav />
        </div>
    );
};

export default NavbarActions;

{
    /* {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <Button
                    variant="link"
                    className="text-base hover:text-red-500 text-blue-900 font-semibold"
                >
                    Đăng nhập
                </Button>
            )} */
}

//  <div className="flex items-center lg:order-2 space-x-2 text-base">
//             {/* <div className="flex items-center">
//                     <Link
//                         href="/auth/login"
//                         className="text-slate-900 dark:text-slate-800 hover:text-white hover:bg-slate-500 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 font-medium rounded-xl text-base px-2 lg:px-3 xl:px-5 py-2 lg:py-3"
//                     >
//                         {auth ? "Tài Khoản" : "Đăng Nhập"}
//                     </Link>
//                     <User2 color="gray" />
//                 </div> */}

//             {/* <NavbarActions /> */}
//             <Link href="/orders" className="hover:text-red-500 text-blue-900">
//                 <div className="flex flex-row items-center justify-center space-x-2">
//                     <Phone />
//                     <div className="grid grid-row-2">
//                         <strong>đặt hàng</strong>
//                         <strong>0974666555</strong>
//                     </div>
//                 </div>
//             </Link>

//             <Link href="/map" className="hover:text-red-500 text-blue-900">
//                 <div className="flex flex-row items-center justify-center space-x-2">
//                     <MapPin />
//                     <div className="grid grid-row-2">
//                         <strong>cửa hàng</strong>
//                         <strong>gần bạn</strong>
//                     </div>
//                 </div>
//             </Link>

//             <Link
//                 href="/search-order"
//                 className="hover:text-red-500 text-blue-900"
//             >
//                 <div className="flex flex-row items-center justify-center space-x-2">
//                     <Package />
//                     <div className="grid grid-row-2">
//                         <strong>Tra cứu</strong>
//                         <strong>đơn hàng</strong>
//                     </div>
//                 </div>
//             </Link>

//             <Button
//                 onClick={() => router.push("/cart")}
//                 className="space-x-1 py-2 mr-2 relative rounded-full"
//                 variant="ghost"
//                 size="icon"
//             >
//                 <ShoppingCart className="text-blue-900" />
//                 <div className="bg-red-600 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
//                     {cart.items.length}
//                 </div>
//             </Button>

//             <Button
//                 className="space-x-1 rounded-full relative"
//                 variant="ghost"
//                 size="icon"
//             >
//                 <Heart className="text-blue-900" />
//                 <div className="bg-red-600 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
//                     9
//                 </div>
//             </Button>

//             <ThemeToggle />

//             {user ? (
//                 <div>
//                     <p>Welcome, {user.name}!</p>
//                     <button onClick={logout}>Logout</button>
//                 </div>
//             ) : (
//                 <Button
//                     variant="link"
//                     className="text-base hover:text-red-500 text-blue-900 font-bold"
//                 >
//                     Đăng nhập
//                 </Button>
//             )}
//         </div>
