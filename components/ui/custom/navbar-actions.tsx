"use client";

import { Heart, ShoppingBag, ShoppingCart, Sun, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../button";
import axios from "axios";
import { UserNav } from "@/components/pages/home/user-nav";
import Link from "next/link";

const NavbarActions = () => {
    const router = useRouter();

    //const [login, setLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Simulate an API request to get user data
    //             const response = await axios.post("/api/auth/login", {}); // Replace with your API endpoint
    //             if (response.status === 200) {
    //                 // const userData = await response.json();
    //                 console.log("check if");
    //                 //router.push("/");
    //                 setLogin(true);
    //             } else {
    //                 //router.push("/auth/login");
    //                 console.log("check else");
    //                 setLogin(false);
    //             }
    //         } catch (error) {
    //             //console.log("check error");
    //             //router.push("/auth/login");
    //             setLogin(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     setIsMounted(true);
    // }, []);

    // if (!isMounted) {
    //     return null;
    // }
    // Sử dụng useEffect để theo dõi trạng thái loggedIn
    useEffect(() => {
        // Đây chính là nơi để xử lý các thay đổi khi loggedIn thay đổi
        // Ví dụ: bạn có thể render lại component hoặc thực hiện các thay đổi tương ứng

        // Ở đây, chúng ta có thể in ra console để kiểm tra khi loggedIn thay đổi
        console.log("Trạng thái loggedIn đã thay đổi:", loggedIn);

        // Bạn có thể thực hiện các hành động khác tùy theo cần
    }, [loggedIn]);

    // Trong ví dụ này, chúng ta có một nút để thay đổi trạng thái loggedIn
    // Chỉ để minh họa cách nó hoạt động
    const toggleLoginStatus = () => {
        setLoggedIn((prevLoggedIn) => !prevLoggedIn);
    };

    return (
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

            {/* {loggedIn ? (
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
            )} */}

            <Button variant="ghost" onClick={toggleLoginStatus}>
                {loggedIn ? (
                    <Link href="/">Đăng Xuất</Link>
                ) : (
                    <Link href="/auth/login">Đăng Nhập</Link>
                )}
                <User2 color="white" />
            </Button>

            {/* <NavbarActions /> */}
            {/* <button onClick={toggleLoginStatus}>
                {loggedIn ? "Đăng Xuất" : "Đăng Nhập"}
            </button> */}

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
    );
};

export default NavbarActions;
