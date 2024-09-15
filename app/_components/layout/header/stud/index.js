import Image from "next/image";
import Link from "next/link";

export default function Stud({ data }) {
    return (
        <div className="flex justify-between md:px-10 mb-14 overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((subMenu, subIndex) => (
                    <div key={subIndex}>
                        <h3 className="font-medium mb-2 Futura PT medium">{subMenu.category}</h3>
                        <ul>
                            {subMenu.items.map((subItem, subItemIndex) => {
                                console.log('Item', subItem);
                                return (
                                    <li key={subItemIndex} className="flex items-center py-1 hover:text-gray-700">
                                        <Image src={subItem.icon} alt={subItem.name} width={20} height={24} className="mr-2" />
                                        <Link href="#" className="text-gray-700 text-sm font-futuraPT font-normal text-">{subItem.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="">
                <Image src={'/assets/megaMenu/study/study.png'} width={200} height={200} alt="study" />
            </div>
        </div>
    )
}