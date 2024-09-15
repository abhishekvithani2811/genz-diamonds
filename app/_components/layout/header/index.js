"use client"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import CartSvg from "../../../../public/assets/cartSvg";
import Link from 'next/link';
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Stud from "./stud";

const STUD = [
    { category: 'By Style', items: ['Solitaire', 'Halo', 'Shoulder Set', 'Vintage', 'Side Stone', 'Promise', '2 Stone', '3 Stone', '4 Stone', '5 Stone', 'Bridal Set', 'Eternity Rings', 'Anniversary', 'Dress', 'Cluster', 'Wishbone', 'Cocktail', 'Cross Over', 'Designer'] },
    { category: 'By Diamonds', items: ['Round', 'Princess', 'Oval', 'Pear', 'Marquise', 'Emerald', 'Heart', 'Asscher'] },
    { category: 'By Metal', items: ['Platinum', 'Silver', '18k White Gold', '9k White Gold', '18k Yellow Gold', '9k Yellow Gold', '18k Rose Gold', '9k Rose Gold'] },
]

const navItems = [
    { href: '/stud', label: 'Stud' },
    { href: '#', label: 'Diamond' },
    { href: '#', label: 'Jewelry' },
    { href: '#', label: 'Made to Order' },
];

const subMenuItems = {
    "/stud": <Stud data={STUD} />
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navContent = <nav className={`flex lg:flex-row ${setIsOpen ? 'flex-col' : 'hidden'}`}>
        {navItems.map((item, index) => (
            <div className="group">
                <Link key={index} href={item.href} className={`hover:text-gray-700 flex justify-between items-center border-b ${index === 0 ? 'border-t' : ''} lg:border-transparent border-black/15 hover:underline text-[#212121] font-normal lg:py-4 py-2 px-4`}>
                    {item.label} <span className="lg:hidden"><MdOutlineKeyboardArrowRight fontSize={22} /></span>
                </Link>
                {
                    Boolean(subMenuItems[item.href]) ? (
                        <div className="z-[1] fixed left-0 right-0 hidden group-hover:block shadow-lg p-4 transition-all duration-300 ease-in-out bg-white max-h-[50vh] overflow-y-auto" >
                            {subMenuItems[item.href]}
                        </div>
                    ) : null
                }
            </div>
        ))}
    </nav >
    return (
        <header className="bg-white text-black lg:static sticky top-0 z-10">
            {isOpen ? <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30" onClick={() => setIsOpen(false)} /> : null}
            <div className="flex lg:flex-col flex-row lg:justify-center justify-between lg:px-0 px-4">
                <Link href="/" className="lg:mx-auto w-fit py-4 cursor-pointer">
                    <Image src="/assets/logo.png" alt="Logo" className="lg:max-w-[80%] md:max-w-[120px] max-w-[100px]" width={184.3} height={70.01} />
                </Link>
                <div className="flex justify-between items-center lg:border-2 border-[#f8f6f4a3]">
                    <div className="flex justify-between items-center max-w-[1760px] mx-auto w-full">
                        <div className="max-w-[120px] w-full lg:block hidden" />

                        <div className={`flex-col lg:flex-row lg:flex ${isOpen ? 'fixed top-0 bottom-0 left-0 bg-white max-w-[300px] w-full border flex-col duration-300 transition-transform z-10' : 'hidden'} lg:space-x-4`}>
                            <div className="lg:hidden flex justify-between items-center px-4">
                                <Link href="/" className="lg:mx-auto w-fit py-4 cursor-pointer">
                                    <Image src="/assets/logo.png" alt="Logo" className="lg:max-w-max md:max-w-[120px] max-w-[100px]" width={184.3} height={78.01} />
                                </Link>
                                <div className="w-fit ms-auto lg:hidden" onClick={() => setIsOpen(false)}>
                                    <IoCloseSharp fontSize={24} />
                                </div>
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