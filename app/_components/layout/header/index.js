"use client"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import CartSvg from "../../../../public/assets/cartSvg";
import Link from 'next/link';
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const navItems = [
    { href: '#', label: 'Stud' },
    { href: '#', label: 'Diamond' },
    { href: '#', label: 'Jewelry' },
    { href: '#', label: 'Made to Order' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navContent = <nav className={`flex lg:flex-row ${setIsOpen ? 'flex-col' : 'hidden'}`}>
        {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="hover:text-gray-700 hover:underline text-[#212121] font-normal lg:py-4 py-2 px-4">
                {item.label}
            </Link>
        ))}
    </nav>
    return (
        <header className="bg-white text-black">
            {isOpen ? <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30" onClick={() => setIsOpen(false)} /> : null}
            <div className="flex lg:flex-col flex-row lg:justify-center justify-between lg:px-0 px-4">
                <Link href="/" className="lg:mx-auto w-fit py-4 cursor-pointer">
                    <Image src="/assets/logo.png" alt="Logo" className="lg:max-w-max md:max-w-[120px] max-w-[100px]" width={184.3} height={78.01} />
                </Link>
                <div className="flex justify-between items-center lg:border-2 border-[#f8f6f4a3]">
                    <div className="flex justify-between items-center max-w-[1760px] mx-auto w-full">
                        <div className="max-w-[120px] w-full lg:block hidden" />

                        <div className={`flex-col lg:flex-row lg:flex ${isOpen ? 'fixed top-0 bottom-0 right-0 bg-white max-w-[300px] w-full border flex-col duration-300 transition-transform' : 'hidden'} lg:space-x-4`}>
                            <div className="w-fit ms-auto m-3 lg:hidden" onClick={() => setIsOpen(false)}>
                                <IoCloseSharp fontSize={24} />
                            </div>
                            {navContent}
                        </div>
                        <div className="flex items-center justify-center space-x-4 lg:max-w-[120px] lg:w-full">
                            <Link href="#" className="hover:text-gray-700"><FiSearch fontSize={24} /></Link>
                            <Link href="#" className="hover:text-gray-700"><AiOutlineUser fontSize={24} /></Link>
                            <Link href="#" className="hover:text-gray-700"><CartSvg /></Link>
                            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}