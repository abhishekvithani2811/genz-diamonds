import { IoMdClose } from "react-icons/io";
import Button from "../button";

export default function CompareTable({ data = [], handleRemove = () => { } }) {
    const headers = ["Diamond Type", "Diamond Id", "Price", "Shape", "Carat", "Clarity", "Colour", "Cut", "Polish", "Symmetry", "Fluorescence", "Measurement", "Certificate", "Cert No.", "Depth", "Table Percent", "Video"];
    const keys = ["diamondType", "diamondId", "price", "shape", "carat", "clarity", "color", "cut", "polish", "symmetry", "fluorescence", "measurement", "certificate", "certNo", "depth", "tablePercent", "videoLink"];

    return (
        <div className="overflow-x-auto col-span-3">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="sticky-header border p-4"></th>
                        {data.map((item, index) => (
                            <th key={index} className="sticky-header border text-center relative">
                                <img src={item.img} alt="Diamond" className="mx-auto mb-4 w-full" />
                                <button onClick={() => handleRemove(item)} className="absolute top-2 right-2 w-6 h-6 bg-[#E6E6E6] flex justify-center items-center"><IoMdClose /></button>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {headers.map((header, index) => (
                        <tr key={index}>
                            <td className="sticky-left border p-4 font-semibold">{header}</td>
                            {data.map((item, idx) => (
                                <td key={idx} className="border p-4 text-center group cursor-pointer">
                                    {header === "Video" ? (
                                        <a href={item[keys[index]]} className="block text-[#8E8E93] mb-2"><span className="font-futura-medium group-hover:underline text-lg text-[#B4A377] font-medium">Video</span></a>
                                    ) : (
                                        item[keys[index]]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td className="sticky-left border p-4"></td>
                        {data.map((item, index) => (
                            <td key={index} className="text-center group">
                                <a href='#' className="border p-4 block text-[#8E8E93] mb-2"><span className="font-futura-medium group-hover:underline text-lg text-[#B4A377] font-medium">Add to Ring</span></a>
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="sticky-left border p-4"></td>
                        {data.map((item, index) => (
                            <td key={index} className="border p-4 text-center">
                                <Button variant="primary" className="block w-full">View Details</Button>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};