"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const colorSelection = () => {
    return (
        <>
            <div className="pr-6 mb-2 flex items-center space-x-2">
                <span className="text-sm text-[#8E8E93] ">Metal</span>
                <button className="sm:w-6 sm:h-6 w-5 h-5 -full border-2 border-gray-300 flex items-center justify-center rounded-full">
                    <span className="text-xs">PT</span>
                </button>
                <span className="w-3 h-3 sm:w-6  sm:h-6 -full bg-yellow-200 rounded-full"></span>
                <span className="w-3 h-3 sm:w-6 sm:h-6 -full bg-yellow-300 rounded-full"></span>
                <span className="w-3 h-3 sm:w-6 sm:h-6 -full bg-yellow-400 rounded-full"></span>
            </div>
        </>
    )
}
const heartIcon = () => {
    return (
        <div className="absolute top-0 right-1 p-2">
            <Image src='/assets/filterDiamond/9.png' className='sm:w-7 sm:h-7 w-5 h-5' width={30} height={30} />
        </div>
    )
}

export default function ProductCard({ product }) {
    const [swiper, setSwiper] = useState(null);

    const handleMouseEnter = () => {
        if (swiper) {
            swiper.autoplay.start();
        }
    };

    const handleMouseLeave = () => {
        if (swiper) {
            swiper.autoplay.stop();
        }
    };
    return (
        <Link data-aos="fade-up" href="/product-detail" key={product.id} className="product-diamond">
            <div className=" overflow-hidden relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {heartIcon()}
                <Swiper
                    onSwiper={setSwiper}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    modules={[Navigation, Autoplay]}
                    className="product-image"
                >
                    {product.imageUrl.map((url, index) => (
                        <SwiperSlide key={index}>
                            <Image width={300} height={300} className="w-full" src={url} alt={product.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="pr-6 sm:py-4 py-2">
                    <div className="font-normal text-sm sm:font-bold sm:text-xl mb-1 sm:mb-2 sm:leading-7" style={{
                        fontFamily: 'Futura PT',
                        fontWeight: '400',
                    }}>{product.name}</div>
                    <p className="text-[#8E8E93] text-sm sm:font-bold">
                        From {product.price}
                    </p>
                </div>
                {colorSelection()}
            </div>
        </Link>
    )
}
