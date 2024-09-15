'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const OptionSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    const router = useRouter()
    const underLine = ({ width }) => {
        return (
            <hr className="pb-2" style={{ border: 'none', height: '2px', backgroundColor: 'transparent', borderTop: '2px dashed #F2F2F7', width: width, margin: 'auto' }} />
        )
    }

    const handleNavigation = () => {

         if (selectedOption === 'Diamond Recommendations') {
            router.push('/product-detail-compare');
        }
    };
    
    React.useEffect(() => {
        handleNavigation();
    }, [selectedOption]);

    useEffect(() => {
        if (!selectedOption && options.length > 0) {
            onSelect(options[0]);
        }
    }, [selectedOption, options, onSelect]);

    return (
        <div className="mb-4">
            <label className="mb-3 block text-nowrap text-sm text-[#8E8E93]">
                {label} {selectedOption ? <span className="text-black">: {selectedOption}</span> : null}
            </label>

            {/* <label className="mb-3 block  text-nowrap text-sm text-[#8E8E93] ">{label} {selectedOption ? <span className="text-black">: {selectedOption}</span> : null}</label> */}
            {/* {variant === 'default' ? <div className="flex gap-2 flex-wrap">
                {options.map((option, index) => (
                    <button key={index} onClick={() => onSelect(option)} className={"sm:px-4 px-4 py-2 md:px-2 sm:text-base text-xs md:py-1 border text-nowrap " + (selectedOption === option ? 'bg-[#EBEBEB] text-black border-[#333333]' : 'border-gray-300')}>{option}</button>
                ))}
            </div> : null} */}
            {label === 'Tone' && variant === 'default' ? (
                <div className="flex gap-2">
                    <div className={"cursor-pointer rounded-full border-2 p-3 w-10 h-10 flex items-center justify-center " + (selectedOption === 'WG' ? 'border-blue-500 bg-gray-200' : 'border-gray-300 bg-gray-200')} onClick={() => onSelect('White Gold')}>
                        WG
                    </div>
                    <div className={"cursor-pointer rounded-full border-2 p-3 w-10 h-10 flex items-center justify-center " + (selectedOption === 'RG' ? 'border-blue-500 bg-pink-200' : 'border-gray-300 bg-pink-200')} onClick={() => onSelect('Red Gold')}>
                        RG
                    </div>
                    <div className={"cursor-pointer rounded-full border-2 p-3 w-10 h-10 flex items-center justify-center " + (selectedOption === 'YG' ? 'border-blue-500 bg-yellow-200' : 'border-gray-300 bg-yellow-200')} onClick={() => onSelect('Yellow Gold')}>
                        YG
                    </div>
                </div>
            ) : variant === 'default' && label === 'Stone Selection' ? (
                <div className="flex gap-2 flex-col md:flex-row w-[70%] md:w-full flex-wrap ">
                    <div className="flex gap-2 flex-col md:flex-row w-[70%] md:w-full flex-wrap ">
                        {options.map((option, index) => (
                            <button key={index} onClick={() => onSelect(option)} className={"sm:px-4 px-4 py-2 md:px-2 sm:text-base text-xs md:py-1 border text-nowrap " + (selectedOption === option ? 'bg-[#EBEBEB] text-black border-[#333333]' : 'border-gray-300')}>{option}</button>
                        ))}
                    </div>
                </div>
            ) : variant === 'default' ? (
                <div className="flex gap-2 flex-wrap ">
                    {options.map((option, index) => (
                        <button key={index} onClick={() => onSelect(option)} className={"sm:px-4 px-4 py-2 md:px-2 sm:text-base text-xs md:py-1 border text-nowrap " + (selectedOption === option ? 'bg-[#EBEBEB] text-black border-[#333333]' : 'border-gray-300')}>{option}</button>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default OptionSelector;