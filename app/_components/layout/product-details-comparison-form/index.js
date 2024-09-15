"use client"
import React, { useState } from 'react';
import Button from '../button';
import OptionSelector from '../product-details-form/option-selector';

const ProductDetailsComparisonForm = ({
    stoneSelections,
    certificate,
}) => {
    const [selectedValues, setSelectedValues] = useState({
        stoneSelection: stoneSelections[0] ?? '',
        certificate: certificate[0] ?? '',
    });

    return <div className="w-full h-fit lg:sticky static top-0">
        <OptionSelector
            label="Stone Selection"
            options={stoneSelections}
            selectedOption={selectedValues.stoneSelection}
            onSelect={(stoneSelection) => setSelectedValues({ ...selectedValues, stoneSelection })}
        />
        <div className="space-y-6 grid grid-cols-1 mb-4 w-full">
            <div>
                <label className="block text-[#8E8E93] mb-2">Carat</label>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Min. 1.5ct</span>
                    <span>10.00</span>
                </div>
                <input type="range" min="1.5" max="10" step="0.1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input" />
            </div>
            <div>
                <label className="block text-[#8E8E93] mb-2">Colour</label>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>J</span>
                    <span>I</span>
                    <span>H</span>
                    <span>G</span>
                    <span>F</span>
                    <span>E</span>
                    <span>D</span>
                </div>
                <input type="range" min="1" max="7" step="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input" />
            </div>
            <div>
                <label className="block text-[#8E8E93] mb-2">Clarity</label>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>SI2</span>
                    <span>SI1</span>
                    <span>VS2</span>
                    <span>VS1</span>
                    <span>VVS2</span>
                    <span>VVS1</span>
                    <span>IF</span>
                    <span>FL</span>
                </div>
                <input type="range" min="1" max="8" step="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input" />
            </div>
            <div>
                <label className="block text-[#8E8E93] mb-2">Cut</label>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Good</span>
                    <span>Very Good</span>
                    <span>Excellent</span>
                    <span>Ideal</span>
                </div>
                <input type="range" min="1" max="4" step="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input" />
            </div>
        </div>
        <OptionSelector
            label="Certificate"
            options={certificate}
            selectedOption={selectedValues.certificate}
            onSelect={(certificate) => setSelectedValues({ ...selectedValues, certificate })}
        />
        <div className="mb-4">
            <label className="block text-[#8E8E93] mb-2"><span className="font-futura-medium underline text-lg text-[#B4A377] font-medium">Advanced Options</span> (Optional)</label>
        </div>
        <Button variant="primary" className="flex-1 block w-full">Close</Button>
    </div>;
};

export default ProductDetailsComparisonForm;