"use client";

import { Product } from "@/types/product.interface";
import Image from "next/image";
import IconButton from "@/components/ui/custom/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import { MouseEventHandler } from "react";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const previewModal = usePreviewModal();
    // const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.product_id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };
    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative"
        >
            {/* Image & actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    // src={data.images?.[0]?.url}
                    src={data.images?.[0]?.url}
                    alt="Image"
                    fill
                    className="aspect-square object-cover rounded-md"
                />
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                        onClick={onPreview}
                        // onPreview
                        icon={<Expand size={20} className="text-gray-600" />}
                        // className="absolute"
                    />
                    <IconButton
                        onClick={() => {}}
                        icon={
                            <ShoppingCart size={20} className="text-gray-600" />
                        }
                    />
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">{data.model_name}</p>
                <p className="text-sm text-gray-500">
                    {data.category?.category_name}
                </p>
            </div>
            {/* Price & Reiew */}
            <div className="flex items-center justify-between">
                <Currency value={(data?.price).toString()} />
            </div>
        </div>

        // Descripton
    );
};

export default ProductCard;
