"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Filter, Heart, Search, ShoppingCart, Sun, User2 } from "lucide-react";
import Link from "next/link";
import Container from "../ui/custom/container";
import { cookies } from "next/headers";
import { UserNav } from "../pages/home/user-nav";
import NavbarActions from "../ui/custom/navbar-actions";
import { AuthProvider, useAuth } from "@/providers/auth-provider";
import { Typeahead } from "react-bootstrap-typeahead";
import { useEffect, useState } from "react";
import AutocompleteSearchBar from "../ui/custom/search-products/autocomplete-search-bar";
// import Autocomplete from "../ui/custom/search-bar";
// import SearchBar from "../ui/custom/search-bar";
// import NavbarActions from "../ui/custom/navbar-actions";

interface suggestionList {
    product_id: number;
    model_name: string;
}

const TopNavbar = () => {
    // const cookieStore = cookies();
    // const auth = cookieStore.get("user");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [options, setOptions] = useState<suggestionList[]>([]);

    useEffect(() => {
        // Gọi API ở đây và lấy dữ liệu
        // Ví dụ sử dụng fetch:
        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/product/get-model-name`
            // {
            //     next: { revalidate: 0 },
            // }
        )
            .then((response) => response.json())
            .then((data) => {
                // Gán dữ liệu từ API cho biến options
                console.log(data);
                setOptions(data);
            })
            .catch((error) => {
                console.error("Error fetching data from API", error);
            });
    }, []);

    return (
        <div className="bg-slate-50 px-4 lg:px-20 flex flex-wrap justify-between items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 text-slate-900">
                <p className="font-bold text-xl">STORE</p>
            </Link>
            {/* <div className="flex space-x-2 lg:space-x-4 items-center"> */}
            {/* <Button
                className=" bg-slate-50 border border-slate-50"
                variant="ghost"
                size="icon"
            >
                <Search color="gray" />
            </Button> */}
            <div className="relative flex space-x-2 lg:space-x-4 items-center">
                <AutocompleteSearchBar />

                <Button
                    className="bg-slate-50 border border-slate-50"
                    variant="ghost"
                    size="icon"
                >
                    <Filter color="gray" />
                </Button>
            </div>

            <NavbarActions />
        </div>
    );
};

export default TopNavbar;
// <div className="flex items-center lg:order-2">
//     {/* <div className="flex items-center">
//         <Link
//             href="/auth/login"
//             className="text-slate-900 dark:text-slate-800 hover:text-white hover:bg-slate-500 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 font-medium rounded-xl text-base px-2 lg:px-3 xl:px-5 py-2 lg:py-3"
//         >
//             {auth ? "Tài Khoản" : "Đăng Nhập"}
//         </Link>
//         <User2 color="gray" />
//     </div> */}

//     {auth ? (
//         <>
//             <div className="flex items-center">
//                 Thuận
//                 <UserNav />
//             </div>
//         </>
//     ) : (
//         <>
//             <Button variant="ghost">
//                 <Link href="/auth/login">Đăng Nhập</Link>
//                 <User2 color="white" />
//             </Button>
//         </>
//     )}

//     {/* <NavbarActions /> */}

//     <Button
//         className="space-x-1 bg-slate-50  py-2 mr-2 relative"
//         variant="ghost"
//         size="icon"
//     >
//         <ShoppingCart color="black" />
//         <div className="bg-red-600 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
//             0
//         </div>
//     </Button>

//     <Button
//         className="space-x-1 bg-slate-50  relative"
//         variant="secondary"
//         size="icon"
//     >
//         <Heart color="black" />
//         <div className="bg-red-600 rounded-full absolute top-1 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
//             0
//         </div>
//     </Button>
//     <Button
//         className="space-x-5 bg-slate-50"
//         variant="secondary"
//         size="icon"
//     >
//         <Sun color="black" />
//     </Button>
// </div>;
