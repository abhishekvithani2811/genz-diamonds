// src/components/DiamondCard.js
import React from 'react';

const DiamondCardCompare = ({ diamond }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <img src={diamond.image} alt={diamond.type} className="w-20 h-20 object-cover rounded-lg" />
                <button className="text-red-500">X</button>
            </div>
            <div className="mb-2">
                <span className="font-semibold">Diamond Type:</span> {diamond.type}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Diamond Id:</span> {diamond.id}
            </div>
            <div className="text-xl font-bold mb-2">£{diamond.price}</div>
            <div className="mb-2">
                <span className="font-semibold">Shape:</span> {diamond.shape}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Carat:</span> {diamond.carat}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Clarity:</span> {diamond.clarity}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Colour:</span> {diamond.colour}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Cut:</span> {diamond.cut}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Certificate:</span> {diamond.certificate}
            </div>
            <div className="flex justify-between mt-4">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">View Details</button>
                <button className="px-4 py-2 bg-black text-white rounded-lg">Add to Ring</button>
            </div>
        </div>
    );
};

export default DiamondCardCompare;