"use client";
import Image from "next/image";
import img1 from "../../../public/billboard/iphone-14-plus-30929j.jpg";
import img2 from "../../../public/billboard/iphone-xs-max-30930j.jpg";
const BillboardSale = () => {
    return (
        <>
            <div className="flex justify-center items-center space-x-4">
                <Image
                    src={img1}
                    alt="Image 1"
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
                <Image
                    src={img2}
                    alt="Image 2"
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
            </div>
        </>
    );
};

export default BillboardSale;

//  <Image
//                     src={img1}
//                     alt="Image 1"
//                     className="w-full h-full max-w-sm" // Adjust width and height as necessary
//                 />
//                 <Image
//                     src={img2}
//                     alt="Image 2"
//                     width={384}
//                     height={80}
//                     className="w-auto h-auto max-w-sm" // Adjust width and height as necessary
//                 />
