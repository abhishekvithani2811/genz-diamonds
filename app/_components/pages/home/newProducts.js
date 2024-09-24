"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const images = [
    "/assets/new-arrival/image.png",
    "/assets/new-arrival/image-1.png",
    "/assets/new-arrival/image.png",
    "/assets/new-arrival/image-1.png",
    "/assets/new-arrival/image.png",
    "/assets/new-arrival/image-1.png",
]

export default function NewArrivalProducts() {
    return (
        <div className="lg:py-16 py-12 px-4 sm:px-6 lg:px-8 lg:border">
            <div className="flex flex-col-reverse md:flex-row items-center bg-[#EFF2F7] overflow-hidden">
                <div className="md:w-1/2 p-8">
                    <h2 data-aos="fade-right" className="text-[#212121] text-3xl font-medium mb-4 font-freight-medium">New Arrival Products</h2>
                    <p data-aos="fade-right" className="text-[#212121] mb-6 max-w-[500px] font-futura-thin">
                        Explore the latest arrivals and discover our most popular categories, handpicked for trendsetters like you. From timeless classics to cutting-edge designs, find the perfect pieces to elevate your style and make a statement.
                    </p>
                    <button data-aos="fade-right" className="px-6 py-2 text-black border border-black hover:bg-gray-200">Shop Now</button>
                </div>
                <div data-aos="fade-left" className="md:w-1/2 w-full px-4 pt-8 sm:pb-8 md:pr-0">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1.5}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2.5,
                            },
                            1920: {
                                slidesPerView: 3,
                            },
                        }}
                        loop
                        className="mySwiper"
                    >
                        {
                            images?.map((item, i) => <SwiperSlide key={i} className='overflow-hidden bg-black'>
                                <Image draggable={false} width={400} height={400} src={item} alt={"Product " + i} className="md:w-full h-72 object-cover overflow-hidden" />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
