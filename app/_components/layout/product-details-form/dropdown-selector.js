import React from 'react';

const DropdownSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    return (
        <div className={`${variant === 'second' ? 'grid grid-cols-3 items-center' : 'w-full'}`}>
            <label className="block text-gray-700 mb-2">{label}</label>
            <select className={`${variant === 'second' ? 'col-span-2' : 'w-full'} p-2 border border-gray-300 rounded`} value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
                {options?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownSelector;