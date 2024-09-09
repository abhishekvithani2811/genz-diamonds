import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import LocationSvg from "../../../../public/assets/locationSvg";

const services = [
    { href: '#', label: 'Manufacturing' },
    { href: '#', label: 'Grading' },
    { href: '#', label: 'Benefits' },
    { href: '#', label: 'Products' },
    { href: '#', label: 'GIA Certified Diamonds' },
];

const aboutUs = [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Media' },
    { href: '#', label: 'Events' },
    { href: '#', label: 'Gallery' },
    { href: '#', label: 'Privacy Policy' },
];

const aboutUs2 = [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Media' },
    { href: '#', label: 'Events' },
    { href: '#', label: 'Gallery' },
    { href: '#', label: 'Privacy Policy' },
];

const titleClass = "text-[22px] font-bold md:mb-[24px] mb-4 text-nowrap leading-[33px]";
const linkClass = "hover:underline text-nowrap font-light";
const sectionClass = "w-full flex-1 mb-6 md:mb-0";
const containerClass = "max-w-[1760px] w-full mx-auto px-4";
const footerClass = "bg-[#B4A377] text-white pt-12";
const textBaseClass = "text-base";
const ulClass = "text-base lg:space-y-[18px] md:space-y-4 sm:space-y-3 space-y-2";

export default function Footer() {
    return (
        <footer className={footerClass}>
            <div className={containerClass}>
                <div className="flex justify-between flex-wrap gap-4">
                    <div className="w-full max-w-[400px] mb-6 md:mb-0">
                        <Link href="/" className="mb-2 inline-block">
                            <Image src="/assets/logo-dark.png" alt="Logo" className="lg:max-w-full md:max-w-[180px] max-w-[130px]" width={161.42} height={78} />
                        </Link>
                        <p className={`${textBaseClass} font-medium mb-5 leading-[26px]`}>At GenZ Diamonds, we're redefining the diamond industry with our lab-grown gems. From crafting and wholesaling to retailing, our diamonds offer unmatched brilliance and a modern touch of sustainability.</p>
                        <p className={`${textBaseClass} font-semibold mb-3 tracking-[1%]`}>FOLLOW US</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white"><FaYoutube /></a>
                            <a href="#" className="text-white"><FaFacebookF /></a>
                            <a href="#" className="text-white"><FaTwitter /></a>
                            <a href="#" className="text-white"><FaInstagram /></a>
                            <a href="#" className="text-white"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className={sectionClass}>
                        <h2 className={titleClass}>Our Services</h2>
                        <ul className={ulClass}>
                            {services.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className={linkClass}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={sectionClass}>
                        <h2 className={titleClass}>About Us</h2>
                        <ul className={ulClass}>
                            {aboutUs.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className={linkClass}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={sectionClass}>
                        <h2 className={titleClass}>About Us</h2>
                        <ul className={ulClass}>
                            {aboutUs2.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className={linkClass}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full max-w-[304px]">
                        <h2 className={titleClass}>Contact Us</h2>
                        <p className={`${textBaseClass} mb-4 flex justify-center flex-1`}><span className="mr-2"><LocationSvg /></span>789 A, 12th Floor, Jewel Heights, 456 Ruby Lane, Crystal View, Grand City, 67890</p>
                        <p className={`${textBaseClass} font-semibold`}>ALEX XENDER</p>
                        <p className={`${textBaseClass} mb-4`}><i className="fas fa-phone-alt"></i> +66 89 125 0077</p>
                        <p className={`${textBaseClass} font-semibold`}>JOHN PARKER</p>
                        <p className={textBaseClass}><i className="fas fa-phone-alt"></i> +66 89 125 0077</p>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-8 md:py-9 py-6 text-center">
                    <p className="text-[14px] text-white font-[300]">&copy; 2024 GenZ Diamonds. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}