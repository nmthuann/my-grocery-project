"use client";
import React from "react";

import Slide from "./slide";
import Slider from "react-slick";

// function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 1000,
        // nextArrow: (
        //     <SampleNextArrow
        //         className={undefined}
        //         style={undefined}
        //         onClick={undefined}
        //     />
        // ),
        // prevArrow: (
        //     <SamplePrevArrow
        //         className={undefined}
        //         style={undefined}
        //         onClick={undefined}
        //     />
        // ),
    };

    const slideData = [
        {
            id: 0,
            img: "/images/image1.png",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/images/image6.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/images/image5.jpg",
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
