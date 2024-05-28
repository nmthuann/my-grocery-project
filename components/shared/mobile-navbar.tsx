"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Coffee,
    Facebook,
    Github,
    Linkedin,
    Mail,
    MailIcon,
    Menu,
    MoreHorizontal,
    TwitchIcon,
    UserCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarItems } from "./header";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SidebarButton } from "../pages/home/sidebar/sidebar-button";

interface MobileNavbarProps {
    navbarItems: NavbarItems;
}

export function MobileNavbar(props: MobileNavbarProps) {
    const pathname = usePathname();
    return (
        <div className="flex justify-between items-center space-x-4">
            {/* //fixed */}
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        size="icon"
                        variant="ghost"
                        className=" top-3 left-3 bg-indigo-500 rounded-full"
                    >
                        <Menu size={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-3 py-4">
                    {/* {" "}
                hideClose */}
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        {/* <span className="text-lg font-semibold text-foreground mx-3">
                        Twitter
                    </span> */}
                        <SheetClose asChild>
                            {/* <Button className="h-7 w-7 p-0" variant="ghost">
                            <X size={15} />
                        </Button> */}
                        </SheetClose>
                    </SheetHeader>
                    <div className="h-full">
                        <div className="mt-5 flex flex-col w-full gap-1">
                            {props.navbarItems.links.map((link, idx) => (
                                <Link key={idx} href={link.href}>
                                    <SidebarButton
                                        variant={
                                            pathname === link.href
                                                ? "secondary"
                                                : "ghost"
                                        }
                                        icon={link.icon}
                                        className="w-full text-indigo-500 hover:text-yellow-400 hover:dark:text-yellow-500"
                                    >
                                        {link.label}
                                    </SidebarButton>
                                </Link>
                            ))}
                            {props.navbarItems.extras}
                        </div>
                        <div className=" p-4 flex flex-wrap justify-center gap-2">
                            <Button variant="outline" size="icon">
                                <Linkedin className="h-4 w-4 text-indigo-500" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <MailIcon className="h-4 w-4 text-indigo-500" />
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
                        <div className="absolute w-full bottom-4 px-1 left-0">
                            <Separator className="absolute -top-3 left-0 w-full" />
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex gap-2">
                                                <Avatar className="h-5 w-5">
                                                    <AvatarImage src="https://firebasestorage.googleapis.com/v0/b/tttn-donghoonline.appspot.com/o/avatar%2Favatar.jpg?alt=media&token=1849d191-8530-42cc-b4bf-093f3aa1acc2" />
                                                    <AvatarFallback>
                                                        Thuan Nguyen
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span>Thuan Nguyen</span>
                                            </div>
                                            <MoreHorizontal size={20} />
                                        </div>
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent className="mb-2 p-2">
                                    <div className="flex flex-col space-y-2 mt-2">
                                        <Link href="/">
                                            <SidebarButton
                                                size="sm"
                                                icon={UserCheck}
                                                className="w-full"
                                            >
                                                Portfolio
                                            </SidebarButton>
                                            <SidebarButton
                                                size="sm"
                                                icon={Mail}
                                                className="w-full"
                                            >
                                                Contact with me
                                            </SidebarButton>
                                            <SidebarButton
                                                size="sm"
                                                icon={Coffee}
                                                className="w-full"
                                            >
                                                Buy me a coffee
                                            </SidebarButton>
                                        </Link>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
