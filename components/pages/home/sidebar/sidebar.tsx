"use client";

import {
    Bell,
    Bookmark,
    BookmarkIcon,
    Boxes,
    CoffeeIcon,
    Database,
    Gem,
    HandMetal,
    HelpCircle,
    Home,
    Library,
    List,
    LucideIcon,
    Mail,
    MessageCircle,
    MoreHorizontal,
    Network,
    User,
    Users,
    Users2,
} from "lucide-react";

import { useMediaQuery } from "usehooks-ts";

import { ReactNode } from "react";
import { SidebarButton } from "./sidebar-button";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarMobile } from "./sidebar-mobile";

export interface SidebarItems {
    links: Array<{
        label: string;
        href: string;
        icon?: LucideIcon;
    }>;
    extras?: ReactNode;
}

const sidebarItems: SidebarItems = {
    links: [
        { label: "Home", href: "/", icon: Home },
        { label: "Reading List", href: "/blog/all", icon: Library },
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
            icon: HandMetal,
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

export function Sidebar() {
    const isDesktop = useMediaQuery("(min-width: 1280px)", {
        initializeWithValue: false,
    });

    if (isDesktop) {
        return <SidebarDesktop sidebarItems={sidebarItems} />;
    }

    return <SidebarMobile sidebarItems={sidebarItems} />;
}
