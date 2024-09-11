import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function SelectedGallary() {
    const categories = [
        { name: 'Statement', image: '/assets/products/1.png' },
        { name: 'Engagement', image: '/assets/products/2.png' },
        { name: 'Eternity', image: '/assets/products/3.png' },
        { name: 'Stacking', image: '/assets/products/4.png' },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <>
            <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white">

                <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <div key={category.name} className="group relative cursor-pointer">
                            <div className="w-full  bg-gray-200 overflow-hidden group-hover:opacity-75 relative">

                                <div className="w-full h-full bg-gray-200 overflow-hidden group-hover:opacity-75">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                {index === 0 && (
                                    <div className="absolute top-0 right-0 p-2">
                                        <Image src='/assets/products/5.png' width={30} height={30} className='h-full w-full' />
                                    </div>
                                )}
                            </div>

                            <h3 className="mt-1 text-xl font-semibold text-gray-900" style={{ fontFamily: 'Futura PT', fontWeight: '400', lineHeight: '36px', textDecoration: index === 0 ? 'underline' : 'none' }}>{category.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}