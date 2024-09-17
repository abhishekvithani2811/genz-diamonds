function CheckOut() {
    return (
        <div>
            <h1>
                <div className="w-full lg:w-1/2 lg:pl-6">
                    <h1 className="text-3xl font-semibold mb-2">Bespoke Signet Ring (gold)</h1>
                    <p className="text-gray-500 mb-4">SKU: 123456789</p>
                    <div className="text-2xl font-bold mb-4">£2800.00 <span className="line-through text-gray-500">£3000.00</span></div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Metal</label>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 ">9K Gold</button>
                            <button className="px-4 py-2 border border-gray-300 ">18K Gold</button>
                            <button className="px-4 py-2 border border-gray-300 ">24K Gold</button>
                            <button className="px-4 py-2 border border-gray-300 ">Silver</button>
                            <button className="px-4 py-2 border border-gray-300 ">Platinum</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Tone</label>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 ">White Gold</button>
                            <button className="px-4 py-2 border border-gray-300 ">Yellow Gold</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Stone Selection</label>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 ">Find Specific Diamond</button>
                            <button className="px-4 py-2 border border-gray-300 ">Diamond Recommendations</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Total Carat</label>
                        <input type="text" className="w-full p-2 border border-gray-300 " placeholder="1.00" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Colour</label>
                        <input type="text" className="w-full p-2 border border-gray-300 " placeholder="G" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Clarity</label>
                        <input type="text" className="w-full p-2 border border-gray-300 " placeholder="SI1/SI2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Cut</label>
                        <input type="text" className="w-full p-2 border border-gray-300 " placeholder="Excellent" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Certificate</label>
                        <input type="text" className="w-full p-2 border border-gray-300 " placeholder="GIA" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Size</label>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 ">5</button>
                            <button className="px-4 py-2 border border-gray-300 ">6</button>
                            <button className="px-4 py-2 border border-gray-300 ">7</button>
                            <button className="px-4 py-2 border border-gray-300 ">8</button>
                            <button className="px-4 py-2 border border-gray-300 ">9</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Add Engraving (Optional)</label>
                        <input type="text" className="w-full p-2 border border-gray-300 " placeholder="Enter engraving text" />
                    </div>
                    <button className="w-full bg-black text-white p-3 ">Add to Cart</button>
                    <p className="text-gray-600 text-sm mt-2">Delivered in 2-4 weeks approx. Check your P.O. Box</p>
                    <p className="text-gray-600 text-sm">Please check again if STOCK is available for 2-3 day delivery.</p>
                </div>
            </h1>
        </div>
    )
}

export default CheckOut;