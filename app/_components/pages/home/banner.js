import Image from "next/image";

export default function BannerSection() {
    return (
        <div className="flex flex-col relative">
            <Image src="/assets/bg-banner.jpg" alt="image" className="w-full h-full object-cover lg:min-h-min min-h-[300px] object-left" width={1920} height={600} />
            <div className="1xl:max-w-[886px] lg:max-w-[650px] w-full clip-shape lg:bg-[#b4a377] lg:min-h-[400px] flex lg:absolute top-0 right-0 bottom-0">
                <div className="lg:flex flex-col justify-center 1xl:max-w-[585px] 1xl:pl-0 lg:pl-[130px] lg:ml-auto 1xl:mr-14 pl-4 pt-10 pr-4">
                    <h1 className="1xl:text-4xl text-3xl font-serif font-normal lg:text-white text-[#b4a377]">Diamonds That Deserve You.</h1>
                    <p className="mt-4 1xl:text-lg text-base font-futura-light lg:text-white text-[#b4a377]">
                        Every diamond is a blend of modern style and enduring quality, crafted to stand out and last forever. Our designs are as unique and timeless as you, promising a sparkle that's meant to shine through every moment of your life.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex lg:px-10 px-4 py-4 bg-white 1xl:max-w-xl max-w-96">
                <button className="px-6 py-2 mr-4 text-white bg-black flex-1 h-fit">Contact Us</button>
                <button className="px-6 py-2 text-black border border-black flex-1 h-fit">About Us</button>
            </div>
        </div>
    )
}


{/* <div className="relative flex items-center justify-between bg-gray-100 h-screen">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex-1 h-full">
        <img
            src="https://via.placeholder.com/800x600" // Replace with your image URL
            alt="Banner"
            className="object-cover w-full h-full"
        />
    </div>
    <div className="relative z-10 flex-1 p-8 bg-[#c5b090]">
        <h1 className="text-4xl font-bold text-white">Diamonds That Deserve You.</h1>
        <p className="mt-4 text-white">
            Every diamond is a blend of modern style and enduring quality, crafted to stand out and last forever. Our designs are as unique and timeless as you, promising a sparkle that's meant to shine through every moment of your life.
        </p>
        <div className="mt-8">
            <button className="px-6 py-2 mr-4 text-white bg-black">Contact Us</button>
            <button className="px-6 py-2 text-black border border-black">About Us</button>
        </div>
    </div>
</div> */}