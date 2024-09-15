import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { GiCutDiamond } from "react-icons/gi";

const SectionTitle = ({ title, subtitle, variant = 'default' }) => {
    return (
        <div className="mb-4">
            <div className='flex justify-between items-center mb-2'>
                <h1 className="text-3xl font-medium font-futura-medium">{title}</h1>
                <div className="flex space-x-2">
                    <button className="p-2 border rounded">
                        <AiOutlineHeart className="text-xl" />
                    </button>
                    <button className="p-2 border rounded">
                        <AiOutlineShareAlt className="text-xl" />
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-start mb-4'>
                <p className="text-gray-500 text-sm text-[#8E8E93]">{subtitle}</p>
                {variant === 'second' && (
                    <button className="flex items-center py-2 px-4 border rounded font-futura-medium text-sm">
                        <GiCutDiamond className="text-xl text-purple-500 mr-1" />
                        <span>Customize</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SectionTitle;