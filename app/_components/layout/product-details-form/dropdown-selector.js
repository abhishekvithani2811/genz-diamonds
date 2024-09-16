import React from 'react';
import { FaCaretDown } from "react-icons/fa";

const DropdownSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    return (
        <div className={`${variant === 'second' ? 'grid grid-cols-3 items-center ' : 'w-full'}`}>
            <label className="block mb-2 text-nowrap text-sm text-[#8E8E93]">{label}</label>
            <div className={`${variant === 'second' ? 'col-span-2' : 'w-full'} relative flex border border-gray-300 items-center pr-2`}>
                <select className={`w-full p-2 focus:outline-0 text-ellipsis appearance-none sm:text-base text-xs `} value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
                    {options?.map((option, index) => (
                        <option key={index} value={option} className='px-3 text-sm'>{option}</option>
                    ))}
                </select>
                <FaCaretDown fontSize={18} className='' />
            </div>
        </div>
    );
};

export default DropdownSelector;