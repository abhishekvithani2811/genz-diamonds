// src/components/ProductDetails.js
import React from 'react';
import ProductList from '../_components/pages/product-list';

const ProductDetails = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row">
                {/* Left Column */}
                <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col lg:flex-row">
                        {/* Product Images */}
                        <div className="w-full lg:w-1/2">
                            <img src="https://via.placeholder.com/400" alt="Product Image" className="w-full h-auto object-cover rounded-lg mb-4" />
                            <div className="flex space-x-2">
                                <img src="https://via.placeholder.com/100" alt="Thumbnail" className="w-20 h-20 object-cover rounded-lg" />
                                <img src="https://via.placeholder.com/100" alt="Thumbnail" className="w-20 h-20 object-cover rounded-lg" />
                                <img src="https://via.placeholder.com/100" alt="Thumbnail" className="w-20 h-20 object-cover rounded-lg" />
                                <img src="https://via.placeholder.com/100" alt="Thumbnail" className="w-20 h-20 object-cover rounded-lg" />
                            </div>
                        </div>
                        {/* Product Details */}
                        <div className="w-full lg:w-1/2 lg:pl-6">
                            <h1 className="text-3xl font-semibold mb-2">Bespoke Signet Ring (gold)</h1>
                            <p className="text-gray-500 mb-4">SKU: 123456789</p>
                            <div className="text-2xl font-bold mb-4">£2800.00 <span className="line-through text-gray-500">£3000.00</span></div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Metal</label>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded">9K Gold</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">18K Gold</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">24K Gold</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">Silver</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">Platinum</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Tone</label>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded">White Gold</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">Yellow Gold</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Stone Selection</label>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded">Find Specific Diamond</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">Diamond Recommendations</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Total Carat</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="1.00" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Colour</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="G" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Clarity</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="SI1/SI2" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Cut</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Excellent" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Certificate</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="GIA" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Size</label>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded">5</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">6</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">7</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">8</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded">9</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Add Engraving (Optional)</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter engraving text" />
                            </div>
                            <button className="w-full bg-black text-white p-3 rounded-lg">Add to Cart</button>
                            <p className="text-gray-600 text-sm mt-2">Delivered in 2-4 weeks approx. Check your P.O. Box</p>
                            <p className="text-gray-600 text-sm">Please check again if STOCK is available for 2-3 day delivery.</p>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 lg:mt-0 lg:ml-6">
                    <h2 className="text-2xl font-semibold mb-4">Ask Query</h2>
                    <div className="mb-4">
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Customer</button>
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Return & Policy</button>
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Order</button>
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Mail</button>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
                    <div className="mb-4">
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Recently Viewed</button>
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Similar Items</button>
                        <button className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg mb-2">Matching Sets</button>
                    </div>
                </div>
            </div>
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-sm font-nomal text-[#B4A377]">Store Jewelry</h2>
                        <h1 class="mt-1 text-3xl font-freight-medium text-[#212121]">Ready Stock for Quick Delivery</h1>
                    </div>
                </div>
                <ProductList />
            </div>
        </div>
    );
};

export default ProductDetails;