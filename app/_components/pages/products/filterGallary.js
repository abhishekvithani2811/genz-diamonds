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
    const colorSelection = () => {
        return (
            <>
                <div className="pr-6 mb-2 flex items-center space-x-2">
                    <span className="text-sm text-[#8E8E93] ">Metal</span>
                    <button className="sm:w-6 sm:h-6 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-xs">PT</span>
                    </button>
                    <span className="w-3 h-3 sm:w-6  sm:h-6 rounded-full bg-yellow-200"></span>
                    <span className="w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-yellow-300"></span>
                    <span className="w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-yellow-400"></span>
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
    return (

        <div className=" px-4 sm:px-6 lg:px-8 bg-white">
            <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product.id} className=" rounded overflow-hidden relative">
                        {heartIcon()}
                        <Image width={300} height={300} className="w-full" src={product.imageUrl} alt={product.alt} />
                        <div className="pr-6 sm:py-4 py-2">
                            <div className="font-normal text-sm sm:font-bold sm:text-xl sm:leading-7 mb-1 sm:mb-2" style={{
                                fontFamily: 'Futura PT',
                                fontWeight: '400',
                            }}>{product.name}</div>
                            <p className="text-[#8E8E93] text-sm sm:font-bold">
                                From {product.price}
                            </p>
                        </div>
                        {colorSelection()}
                    </div>
                ))}
            </div>
            <div className=" bg-white">
                <div className="mt-6 lg:grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                    <div className="lg:grid lg:grid-cols-4">
                        <div className="col-span-2 grid grid-cols-2 gap-6">
                            {products.map(product => (
                                <div key={product.id} className="">
                                    <div className="rounded overflow-hidden relative">
                                        {heartIcon()}
                                        <Image width={300} height={300} className="w-full" src={product.imageUrl} alt={product.alt} />
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
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2 relative flex justify-center pb-2 sm:px-3">
                            <Image src="/assets/filterDiamond/10.png" alt="Large Image" width={300} height={300} className="w-full h-auto" />
                            <button class="px-6 py-2 absolute text-nowrap text-white border border-white hover:bg-white hover:text-black  bottom-10">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product.id} className=" rounded overflow-hidden relative">
                        {heartIcon()}
                        <Image width={300} height={300} className="w-full" src={product.imageUrl} alt={product.alt} />
                        <div className="pr-6 sm:py-4 py-2">
                            <div className="font-normal  text-sm sm:font-bold sm:text-xl mb-1sm:mb-2 sm:leading-7" style={{
                                fontFamily: 'Futura PT',
                                fontWeight: '400',
                            }}>{product.name}</div>
                            <p className="text-[#8E8E93] text-sm sm:font-bold">
                                From {product.price}
                            </p>
                        </div>
                        {colorSelection()}
                    </div>
                ))}
            </div>
        </div>
    );
}