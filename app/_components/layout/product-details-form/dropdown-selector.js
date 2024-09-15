import React from 'react';

const DropdownSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    return (
        <div className={`${variant === 'second' ? 'grid grid-cols-3 items-center ' : 'w-full'}`}>
            <label className="block mb-2 text-nowrap text-sm text-[#8E8E93]">{label}</label>
            <select className={`${variant === 'second' ? 'col-span-2' : 'w-full'} p-2 sm:text-base text-xs border border-gray-300 `} value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
                {options?.map((option, index) => (
                    <option key={index} value={option} className='px-3 text-sm'>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownSelector;