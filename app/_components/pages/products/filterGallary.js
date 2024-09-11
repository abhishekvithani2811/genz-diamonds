import React from 'react';
import Image from 'next/image';

export default function FilterGallery() {
    const products = [
        {
            id: 1,
            name: "Five Stone with Side Round...",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/8.png",
            alt: "Five Stone Diamond Ring"
        },
        {
            id: 2,
            name: "Diamond Link Round Fashion Band",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/8.png",
            alt: "Diamond Link Round Fashion Band"
        },
        {
            id: 3,
            name: "Alternating Round Fashion Band",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/8.png",
            alt: "Alternating Round Fashion Band"
        },
        {
            id: 4,
            name: "Art Deco Round Fashion Band",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/8.png",
            alt: "Art Deco Round Fashion Band"
        }
    ];

    return (

        <div className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">

            <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product.id} className=" rounded overflow-hidden relative">
                        <div className="absolute top-0 right-1 p-2">
                            <Image src='/assets/filterDiamond/9.png' width={30} height={30} />
                        </div>
                        <Image width={300} height={300} className="w-full" src={product.imageUrl} alt={product.alt} />
                        <div className="pr-6 py-4">
                            <div className="font-bold text-xl mb-2" style={{
                                fontFamily: 'Futura PT',
                                fontWeight: '400',
                                lineHeight: '30px',
                            }}>{product.name}</div>
                            <p className="text-[#8E8E93] text-sm font-bold">
                                From {product.price}
                            </p>
                        </div>
                        <div className="pr-6 mb-2 flex items-center space-x-2">
                            <span className="text-sm text-[#8E8E93] ">Metal</span>
                            <button className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                <span className="text-xs">PT</span>
                            </button>
                            <span className="w-6 h-6 rounded-full bg-yellow-200"></span>
                            <span className="w-6 h-6 rounded-full bg-yellow-300"></span>
                            <span className="w-6 h-6 rounded-full bg-yellow-400"></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}