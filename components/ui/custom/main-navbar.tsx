"use client";

import * as React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const drinks: { title: string; href: string; description: string }[] = [
    {
        title: "Nước giải khát",
        href: "/nuoc-giai-khat",
        description: "Đánh tan cái nóng ngày hè với các loại nước giải khát.",
    },
    {
        title: "Bia",
        href: "/bia",
        description: "Không sử dụng bia khi lái xe.",
    },
    {
        title: "Nước lọc",
        href: "/nuoc-loc",
        description: "Bù nước bù khoáng.",
    },
    {
        title: "Trà trái cây",
        href: "/tra-trai-cay",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that displays information...",
    },
    // {
    //     title: "Tooltip 2",
    //     href: "/docs/primitives/tooltip",
    //     description: "A popup that displays information...",
    // },
];

export function MainNavbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Mới về</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Mì ăn liền
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Giảm cơn đói với mì ăn liền
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/mi-xao" title="Mì Xào">
                                Đổi vị với mì xào tiểu nhị ...
                            </ListItem>
                            <ListItem href="/pho-bun" title="Phở Bún">
                                Chán mì thèm phở ...
                            </ListItem>
                            <ListItem href="/bun-gao" title="Bún gạo">
                                Bún Gạo ...
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Apple</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {drinks.map((drink) => (
                                <ListItem
                                    key={drink.title}
                                    title={drink.title}
                                    href={drink.href}
                                >
                                    {drink.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Samsung</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px]  gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[900px]">
                            {drinks.map((drink) => (
                                <ListItem
                                    key={drink.title}
                                    title={drink.title}
                                    href={drink.href}
                                >
                                    {drink.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Xiaomi</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {drinks.map((drink) => (
                                <ListItem
                                    key={drink.title}
                                    title={drink.title}
                                    href={drink.href}
                                >
                                    {drink.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sonny</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {drinks.map((drink) => (
                                <ListItem
                                    key={drink.title}
                                    title={drink.title}
                                    href={drink.href}
                                >
                                    {drink.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Oppo</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {drinks.map((drink) => (
                                <ListItem
                                    key={drink.title}
                                    title={drink.title}
                                    href={drink.href}
                                >
                                    {drink.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Phụ kiện</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {drinks.map((drink) => (
                                <ListItem
                                    key={drink.title}
                                    title={drink.title}
                                    href={drink.href}
                                >
                                    {drink.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/khuyen-mai" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Khuyến mãi
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
