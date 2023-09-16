// const Carousel = () => {
//     return (
//         // <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
//         //     <div
//         //         style={{
//         //             backgroundImage: `url(./images/sale-3.png)`,
//         //         }}
//         //         className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover duration-700 ease-in-out"
//         //     ></div>
//         //     <div
//         //         style={{ backgroundImage: `url(./images/sale-1.jpg)` }}
//         //         className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
//         //     ></div>
//         // </div>
//         <div
//             id="indicators-carousel"
//             className="relative w-full"
//             data-carousel="static"
//         >
//             {/* Carousel wrapper */}
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 {/* Item 1 */}
//                 <div
//                     className="duration-700 ease-in-out"
//                     data-carousel-item="active"
//                 >
//                     <img
//                         src="./images/sale-3.png"
//                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         alt="..."
//                     />
//                 </div>
//                 {/* Item 2 */}
//                 <div className=" duration-700 ease-in-out" data-carousel-item>
//                     <img
//                         src="./images/sale-4.jpg"
//                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         alt="..."
//                     />
//                 </div>
//                 {/* Item 3 */}
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img
//                         src="./images/sale-1.jpg"
//                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         alt="..."
//                     />
//                 </div>
//                 {/* Item 4 */}
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img
//                         src="./images/sale-5.png"
//                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         alt="..."
//                     />
//                 </div>
//                 {/* Item 5 */}
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img
//                         src="./images/sale-2.png"
//                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         alt="..."
//                     />
//                 </div>
//             </div>
//             {/* Slider indicators */}
//             <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="true"
//                     aria-label="Slide 1"
//                     data-carousel-slide-to="0"
//                 ></button>
//                 <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="false"
//                     aria-label="Slide 2"
//                     data-carousel-slide-to="1"
//                 ></button>
//                 <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="false"
//                     aria-label="Slide 3"
//                     data-carousel-slide-to="2"
//                 ></button>
//                 <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="false"
//                     aria-label="Slide 4"
//                     data-carousel-slide-to="3"
//                 ></button>
//                 <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="false"
//                     aria-label="Slide 5"
//                     data-carousel-slide-to="4"
//                 ></button>
//             </div>
//             {/* Slider controls */}
//             <button
//                 type="button"
//                 className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                 data-carousel-prev
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                         className="w-4 h-4 text-white dark:text-gray-800"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 6 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 1 1 5l4 4"
//                         />
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button
//                 type="button"
//                 className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                 data-carousel-next
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                         className="w-4 h-4 text-white dark:text-gray-800"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 6 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="m1 9 4-4-4-4"
//                         />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//     );
// };

// export default Carousel;
// "use client";

// import { Carousel } from "flowbite-react";

// export default function CarouselSlider() {
//     return (
//         <Carousel>
//             <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//                 Slide 1
//             </div>
//             <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//                 Slide 2
//             </div>
//             <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//                 Slide 3
//             </div>
//         </Carousel>
//     );
// }

"use client";
import React from "react";

import Slide from "./slide";
import Slider from "react-slick";

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/images/sale-2.png",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/images/sale-3.png",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/images/sale-5.png",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30",
        },
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={""}
                            mainTitle={""}
                            price={""} // title={item.title}
                            // mainTitle={item.mainTitle}
                            // price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
