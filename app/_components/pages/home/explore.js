import React from 'react';

const categories = [
    { name: 'Rings', image: '/assets/explore/image.png' }, // Replace with your image URL
    { name: 'Earrings', image: '/assets/explore/image-1.png' }, // Replace with your image URL
    { name: 'Necklaces', image: '/assets/explore/image-2.png' }, // Replace with your image URL
    { name: 'Bracelets', image: '/assets/explore/image-3.png' }, // Replace with your image URL
];

export default function ExploreSection() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-sm font-nomal text-[#c5b090]">SHOP BY CATEGORY</h2>
                    <h1 class="mt-1 text-3xl font-bold text-gray-900">Explore The Range</h1>
                </div>
                <div>
                    <button class="px-6 py-2 text-black border border-black hover:bg-gray-200">View More</button>
                </div>
            </div>
            <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category) => (
                    <div key={category.name} className="group relative cursor-pointer">
                        <div className="w-full h-80 bg-gray-200 overflow-hidden group-hover:opacity-75">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <button className="px-6 py-2 text-black border border-black hover:bg-gray-200">View More</button>
            </div>
        </div>
    )
}