import Image from "next/image";
import Link from "next/link";

export default function Ring({ data }) {
    return (
        <div className="flex justify-between md:px-10 mb-14">
            <div className="grid grid-cols-4 gap-4">
                {data.map((subMenu, subIndex) => (
                    <div key={subIndex}>
                        {subMenu.category ? (<h3 className="font-medium mb-2 Futura PT medium">{subMenu.category}</h3>) : (
                            <div className="mt-9"></div>
                        )}
                        {/* <h3 className="font-medium mb-2 Futura PT medium">{subMenu.category}</h3> */}
                        <ul>
                            {subMenu.items.map((subItem, subItemIndex) => {
                                console.log('Item', subItem);
                                return (
                                    <li key={subItemIndex} className="flex items-center py-1 hover:text-gray-700">
                                        <Image src={subItem.icon} alt={subItem.name} width={24} height={24} className="mr-2" />
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