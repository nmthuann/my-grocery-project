"use client";

import { Product } from "@/types/product.interface";
import Image from "next/image";
import IconButton from "@/components/ui/custom/icon-button";
import { Expand } from "lucide-react";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    // src={data.images?.[0]?.url}
                    src="/images/image3.png"
                    alt="Image"
                    fill
                    className="aspect-square object-cover rounded-md"
                />
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                        onClick={() => ({})}
                        icon={<Expand size={20} className="text-gray-600" />}
                    />
                </div>
            </div>
        </div>
        // Descripton
    );
};

export default ProductCard;
