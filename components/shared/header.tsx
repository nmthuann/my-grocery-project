"use client";
import { Button } from "@/components/ui/button";

import {
    BookmarkIcon,
    Boxes,
    Database,
    Filter,
    Home,
    LucideIcon,
    Network,
    LibraryIcon,
    HeartHandshake,
    HelpCircle,
    MoreHorizontal,
    CoffeeIcon,
} from "lucide-react";
import Link from "next/link";

import { UserNav } from "../pages/home/user-nav";
import NavbarActions from "../ui/custom/navbar-actions";
import { ReactNode, useEffect, useState } from "react";
import AutocompleteSearchBar from "../ui/custom/search-products/autocomplete-search-bar";
import InsightRoll from "./insight-roll";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { SidebarButton } from "../pages/home/sidebar/sidebar-button";
import { MobileNavbar } from "./mobile-navbar";
import DesktopNavbar from "./deskstop-navbar";

export interface NavbarItems {
    links: Array<{
        label: string;
        href: string;
        icon?: LucideIcon;
    }>;
    extras?: ReactNode;
}

const navbarItems: NavbarItems = {
    links: [
        { label: "Home", href: "/", icon: Home },
        { label: "Reading List", href: "/blog/all", icon: LibraryIcon },
        {
            href: "/backend",
            icon: Network,
            label: "Back End",
        },
        {
            href: "/databases",
            icon: Database,
            label: "Databases",
        },

        {
            href: "/service",
            icon: Boxes,
            label: "System Design",
        },
        {
            href: "/bookmark",
            icon: BookmarkIcon,
            label: "Saved",
        },
        {
            href: "/about",
            icon: HeartHandshake,
            label: "About",
        },
        {
            href: "/help",
            icon: HelpCircle,
            label: "Help",
        },
    ],

    extras: (
        <div className="flex flex-col gap-2">
            <SidebarButton
                icon={MoreHorizontal}
                className="w-full text-indigo-500 hover:text-yellow-500"
            >
                More
            </SidebarButton>
            <SidebarButton
                className="
                w-full justify-center 
                bg-gradient-to-r from-sky-500 to-indigo-500 dark:text-white
                hover:from-yellow-500 hover:to-orange-500
                "
                icon={CoffeeIcon}
                variant="default"
            >
                Buy Me a Coffee
            </SidebarButton>
        </div>
    ),
};

interface suggestionList {
    product_id: number;
    model_name: string;
}

const insights: string[] = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
];

const Header = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [options, setOptions] = useState<suggestionList[]>([]);

    useEffect(() => {
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
        <header>
            <InsightRoll insights={insights} />
            <div className="py-6 xl:py-8">
                <div className="flex flex-wrap items-center justify-center ">
                    <div className="px-4 lg:px-10">
                        <Link href="/">
                            <h1 className="text-4xl font-semibold dark:text-red-500 text-red-700">
                                MY PHONE
                                <span className="dark:text-yellow-400 text-yellow-400">
                                    .
                                </span>
                            </h1>
                        </Link>
                    </div>

                    <div className=" hidden xl:block">
                        <DesktopNavbar />
                    </div>

                    <div className="xl:hidden">
                        <MobileNavbar navbarItems={navbarItems} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
