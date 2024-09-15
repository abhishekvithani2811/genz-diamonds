import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiDiamondRing } from 'react-icons/gi';
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai';

const ComparisonHeader = ({ selected, setIsComparison }) => {
    return (
        <div className="flex items-center justify-between p-4 gap-x-4 bg-gray-100 border-b border-dashed border-gray-300">
            <div className="flex items-center space-x-2 relative">
                <FiSearch color="#8E8E93" fontSize={18} className="text-gray-500 absolute top-50 left-5" />
                <input
                    type="text"
                    placeholder="Certi. No. / Stock ID"
                    className="p-2 md:pl-9 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 md:placeholder:text-[#8E8E93] placeholder:text-transparent md:w-fit w-10"
                />
            </div>
            <button onClick={setIsComparison} className="flex items-center justify-center space-x-1 flex-1 p-2 rounded-md">
                <GiDiamondRing className="text-purple-500" />
                <span>Compare Diamonds ({selected.length})</span>
            </button>
            <div className="flex items-center space-x-2">
                <button className="p-2 bg-white border border-gray-300 rounded-md">
                    <AiOutlineAppstore className="text-gray-500" />
                </button>
                <button className="p-2 bg-white border border-gray-300 rounded-md">
                    <AiOutlineMenu className="text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default ComparisonHeader;