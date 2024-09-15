import Link from "next/link";

export default function Stud({ data }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((subMenu, subIndex) => (
                <div key={subIndex}>
                    <h3 className="font-bold mb-2">{subMenu.category}</h3>
                    <ul>
                        {subMenu.items.map((subItem, subItemIndex) => (
                            <li key={subItemIndex} className="py-1 hover:text-gray-700">
                                <Link href="#">{subItem}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}