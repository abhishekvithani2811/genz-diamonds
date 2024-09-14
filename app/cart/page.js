import Image from "next/image";

export default function CartPage() {
    return (
        <div class="p-4 bg-[#FAFAFA]">
            <div class="flex flex-col lg:flex-row md:my-6 md:px-6 ">
                <div class="w-full lg:w-2/3 md:p-1 mb-10">
                    <div class="w-full px-6 pt-6 pb-3 mb-5 bg-white">
                        <div class="mb-6 ">
                            <div class="flex justify-between">
                                <h2 class="md:text-2xl md:font-semibold mb-4 text-lg font-normalmb-4" style={{ fontFamily: 'Futura PT', lineHeight: '24px', textAlign: 'left' }}>Contact Information</h2>
                                <div class="flex justify-end mb-6">
                                    <a href="#" class=" underline underline-offset-2 text-futuraPT font-normal text-nowrap	 text-xs md:text-base">Sign In / Register</a>
                                </div>
                            </div>
                            <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Email Address (for sending the order confirmation) *</label>
                            <input type="email" class="md:w-[50%] w-full p-2 border border-[#D9D9D9] mt-1" />
                        </div>
                    </div>
                    <div class="w-full mb-4">
                        <div class="w-full  bg-white p-6 ">
                            <div>
                                <h2 class="md:text-2xl md:font-semibold mb-4 text-lg font-normalmb-4" style={{ fontFamily: 'Futura PT', lineHeight: '24px', textAlign: 'left' }}>Delivery Address</h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">First Name *</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9] mt-1" />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-normal font-futura-thin text-[#AAAAAA] ">Last Name *</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9] mt-1" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Address *</label>
                                    <input type="text" class="w-full p-2 border border-[#D9D9D9] mt-1" />
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Street Address *</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9]  mt-1" />
                                    </div>
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Apartment, Suite, Floor (optional)</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9]  mt-1" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Town / City *</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9]  mt-1" />
                                    </div>
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">State</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9]   mt-1" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Zip Code *</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9]  mt-1" />
                                    </div>
                                    <div>
                                        <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Phone (optional)</label>
                                        <input type="text" class="w-full p-2 border border-[#D9D9D9]  mt-1" />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox" />
                                        <span class="ml-2   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Text me with news and offers</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="w-full p-6 mb-10 bg-white">
                            <h2 class="md:text-2xl md:font-semibold mb-4 text-lg font-normalmb-4" style={{ fontFamily: 'Futura PT', lineHeight: '24px', textAlign: 'left' }}>Payment</h2>

                            <div class="mb-4 border border-[#D9D9D9]">
                                <div class="flex flex-col md:flex-row lg:items-center justify-between mt-2 px-4 pt-2 pb-3">
                                    <div class="mb-2 flex items-center lg:mb-0">
                                        <input type="radio" name="payment" class="form-radio w-4 h-4" />
                                        <span class="ml-2 text-sm font-normal font-futura-thin">Credit Card</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Image src="/assets/checkout/1.png" alt="Logo" width={35} height={25} />
                                        <Image src="/assets/checkout/2.png" alt="Logo" width={35} height={25} />
                                        <Image src="/assets/checkout/3.png" alt="Logo" width={35} height={25} />
                                        <Image src="/assets/checkout/4.png" alt="Logo" width={35} height={25} />
                                    </div>
                                </div>
                                <div className="flex flex-col border-y border-[#D9D9D9] p-4 bg-[#F2F2F7]">
                                    <div className=" border-[#D9D9D9]">
                                        <div class="mt-4">
                                            <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Card Number</label>
                                            <input type="text" class="w-full p-2 border border-[#D9D9D9]  mt-1" placeholder="Enter card number here" />
                                        </div>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Expiry Date</label>
                                                <input type="text" class="w-full p-2 border border-[#D9D9D9]   mt-1" placeholder="MM/YY" />
                                            </div>
                                            <div>
                                                <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Security Code</label>
                                                <input type="text" class="w-full p-2 border border-[#D9D9D9]   mt-1" placeholder="XXX" />
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <label class="block   text-sm font-normal font-futura-thin text-[#AAAAAA] ">Cardholder Name</label>
                                            <input type="text" class="w-full p-2 border border-[#D9D9D9]   mt-1" placeholder="Cardholder Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center mt-2 px-4 pt-2 pb-3">
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" class="form-radio w-4 h-4" />
                                        <span class="ml-2   text-sm font-normal font-futura-thin  ">Credit Card</span>
                                    </div>
                                    <div>
                                        <Image src="/assets/checkout/5.png" alt="Logo" width={50} height={40} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-4">
                        <div class="w-full ">
                            <button class="w-full bg-black text-white p-3  ">Pay Now</button>
                        </div>
                    </div>
                </div>
                <div class=" lg:w-1/3  p-6 h-full mt-6 border-2 border-[#D9D9D9] lg:mt-0 lg:ml-6">
                    <h2 class="text-2xl leading-6 font-futura-thin font-normal mb-4">Order Summary</h2>
                    <div class="flex flex-col sm:flex-row mb-4 gap-4 bg-white px-3">
                        <div className="mt-4">
                            <Image src="/assets/checkout/6.png" alt="Product Image" width={100} height={100} />
                        </div>
                        <div className="flex flex-col sm:ml-4 mb-2 mt-3 w-full">
                            <div className="flex justify-between">
                                <h3 class="text-lg font-semibold">The Signature</h3>
                                <div class=" sm:ml-auto text-lg font-semibold">£1,031.00</div>
                            </div>
                            <div class=" ml-4 ">
                                <ul class="list-disc text-gray-600 font-normal font-futura-thin text-sm">
                                    <li class="text-base">18K Yellow Gold / 5</li>
                                    <li>Shape: Oval</li>
                                    <li>Metal: 18k Yellow Gold</li>
                                    <li>Band width: Standard</li>
                                    <li>Band: Plain</li>
                                    <li>Ring size: 5</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="border-b border-dashed border-[#D9D9D9] pt-4">
                        <div class="flex justify-between   text-sm font-normal font-futura-thin text-[#AAAAAA]  mb-2">
                            <span>Subtotal</span>
                            <span className="text-[#212121] font-bold">£1,031.00</span>
                        </div>
                        <div class="flex justify-between text-sm font-normal font-futura-thin text-[#AAAAAA]  mb-2">
                            <span>Shipping</span>
                            <span className="text-[#212121] font-bold">Enter shipping address</span>
                        </div>
                    </div>
                    <div class="flex justify-between text-lg font-semibold mt-2">
                        <span class="font-futura-thin font-normal text-xl ">Total</span>
                        <span class="font-futura-thin text-xm font-bold ">£1,031.00</span>
                    </div>
                    <div class=" text-sm mt-2 font-futura-thin text-[#AAAAAA]">Including £171.83 in taxes</div>
                </div>
            </div>
        </div >
    )
}