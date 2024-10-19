"use client";

import { Gift, MapPin, Package, Phone, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../button";
import Link from "next/link";
import useCart from "@/hooks/use-cart";
import { LoginDialog } from "@/components/shared/login-dialog";

const NavbarActions = () => {
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
            <LoginDialog loginOption={true} />
        </div>
    );
};

export default NavbarActions;
