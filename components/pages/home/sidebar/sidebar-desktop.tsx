"use client";

import { SidebarButton } from "./sidebar-button";

import Link from "next/link";

import {
    Facebook,
    Github,
    Linkedin,
    LogOut,
    LucideIcon,
    Mail,
    MoreHorizontal,
    Settings,
    TwitchIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export interface SidebarItems {
    links: Array<{
        label: string;
        href: string;
        icon?: LucideIcon;
    }>;
    extras?: ReactNode;
}

interface SidebarDesktopProps {
    sidebarItems: SidebarItems;
}

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `# hash tag ${a.length - i}`
);

export function SidebarDesktop(props: SidebarDesktopProps) {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <>
            {/* <ScrollArea className=" h-auto w-72 rounded-2xl border"> */}
            {/* // w-[270px] fixed h-screen fixed top-20  z-40 */}
            <aside className="h-auto w-72 max-w-xs left-0 rounded-2xl border border-r">
                <div className="h-full px-3 ">
                    {/* <h3 className="mx-3 text-lg font-semibold text-foreground">
                    Twitter
                </h3> */}
                    <div className="mt-5">
                        <div className="flex flex-col gap-1 w-full">
                            {props.sidebarItems.links.map((link, index) => (
                                <Link key={index} href={link.href}>
                                    <SidebarButton
                                        variant={
                                            pathname === link.href
                                                ? "secondary"
                                                : "ghost"
                                        }
                                        icon={link.icon}
                                        className=" w-full text-indigo-500 hover:text-yellow-400 hover:dark:text-yellow-500 "
                                    >
                                        {link.label}
                                    </SidebarButton>
                                </Link>
                            ))}
                            {props.sidebarItems.extras}
                        </div>
                        {/* hash tag */}
                        {/* <div className="p-4">
                            <Separator className="absolute -top-3 left-0 w-full" />
                            <ScrollArea className=" h-72 w-56 rounded-md border">
                                <div className="p-4">
                                    <h4 className="mb-4 text-sm font-medium leading-none text-indigo-500">
                                        Tags
                                    </h4>
                                    {tags.map((tag) => (
                                        <div key={tag}>
                                            <Button
                                                variant="link"
                                                className="text-sm h2 text-indigo-500"
                                                onClick={() =>
                                                    router.push("/about-me")
                                                }
                                            >
                                                {tag}
                                            </Button>
                                            <Separator className="my-2" />
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div> */}

                        <div className="flex flex-wrap justify-center gap-2 mt-5 mb-10">
                            <Button variant="outline" size="icon">
                                <Linkedin className="h-4 w-4 text-indigo-500" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Mail className="h-4 w-4 text-indigo-500" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Facebook className="h-4 w-4 text-indigo-500" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Github className="h-4 w-4 text-indigo-500" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <TwitchIcon className="h-4 w-4 text-indigo-500" />
                            </Button>
                        </div>
                    </div>
                </div>
            </aside>
            {/* </ScrollArea> */}
        </>
    );
}
