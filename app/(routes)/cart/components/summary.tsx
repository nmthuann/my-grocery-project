"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Messages } from "@/constants/notifications/message";
import { SystemError, UnknownError } from "@/constants/errors/errors";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success(Messages.PAYMENT_COMPLETED);
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error(UnknownError.SOMETHING_WRONG);
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.SERVER_URL}/checkout`,
            {
                product_ids: items.map((item) => item.product_id),
            }
        );

        window.location = response.data.url;
    };

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">
                Đơn hàng đã chọn
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Tổng tiền
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button
                onClick={onCheckout}
                disabled={items.length === 0}
                className="w-full mt-6"
            >
                Thanh Toán
            </Button>
        </div>
    );
};

export default Summary;
