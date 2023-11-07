import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { AlertTriangle } from "lucide-react";
import { Product } from "@/types/product.interface";
import { CartError } from "@/constants/errors/errors";
import { CartNotification } from "@/constants/notifications/notification";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find(
                    (item) => item.product_id === data.product_id
                );

                if (existingItem) {
                    return toast.error(CartError.PRODUCT_EXIST); // msg
                }

                set({ items: [...get().items, data] });
                toast.success(CartNotification.ADD_SUCCESS);
            },
            removeItem: (id: string) => {
                set({
                    items: [
                        ...get().items.filter(
                            (item) => item.product_id.toString() !== id
                        ),
                    ],
                });
                toast.success(CartNotification.REMOVE_SCUCCESS);
            },
            removeAll: () => set({ items: [] }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCart;
