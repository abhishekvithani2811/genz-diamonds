import React from 'react';

const OptionSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    return (
        <div className="mb-2">
            <label className="block text-gray-500 mb-2">{label} {selectedOption ? <span className="text-black">: {selectedOption}</span> : null}</label>
            {variant === 'default' ? <div className="flex space-x-2">
                {options.map((option, index) => (
                    <button key={index} onClick={() => onSelect(option)} className={"px-4 py-1 border " + (selectedOption === option ? 'bg-[#EBEBEB] text-black border-[#333333]' : 'border-gray-300')}>{option}</button>
                ))}
            </div> : null}
        </div>
    );
};

export default OptionSelector;