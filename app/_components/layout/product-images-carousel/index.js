"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function ImageCarousel({ images }) {
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className="flex items-center space-x-2">
            <button onClick={() => swiperInstance?.slidePrev()} className="">
                <MdNavigateBefore fontSize={20} />
            </button>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                // navigation={true}
                modules={[Navigation]}
                loop
                onSwiper={setSwiperInstance}

            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={() => swiperInstance?.slideNext()} className="">
                <MdNavigateNext fontSize={20} />
            </button>
        </div>
    );
};