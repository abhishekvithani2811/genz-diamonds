import Image from "next/image";
import Link from "next/link";

export default function FineJewelry({ data }) {
    const underline = () => {
        return (
            <div className="w-[95%] flex justify-center mb-5 items-center h-[1px] bg-[#F8F6F4] ml-auto mr-auto"></div>
        )
    }
    return (
        <>
            <div className="text-xl md:px-10 md:my-4 flex items-center font-futuraPT font-normal text-black">
                <div>
                    Browse all jewelry
                </div>
                <Image src={'/assets/megaMenu/ring/21.svg'} width={24} height={24} />
            </div>
            {underline()}
            <div className="flex justify-between md:px-10 mb-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {data.map((subMenu, subIndex) => (
                        <div key={subIndex}>
                            <h3 className="font-medium mb-2 Futura PT medium">{subMenu.category}</h3>
                            <ul>
                                {subMenu.items.map((subItem, subItemIndex) => {
                                    console.log('Item', subItem);
                                    return (
                                        <li key={subItemIndex} className="flex items-center py-1 hover:text-gray-700">
                                            {subItem.icon &&
                                                <Image src={subItem.icon} alt={subItem.name} width={24} height={24} className="mr-2" />
                                            }
                                            <Link href="#" className="text-gray-700 text-sm font-futuraPT font-normal text-">{subItem.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-2">
                    <Image src={'/assets/megaMenu/study/study.png'} width={200} height={200} alt="study" />
                </div>
            </div>
        </>
    )
}