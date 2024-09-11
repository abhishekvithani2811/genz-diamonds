export default function CartPage() {
    return <div class="container mx-auto p-4">
        <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
                <div class="mb-4">
                    <label class="block text-gray-700">Email Address (for sending the order confirmation)</label>
                    <input type="email" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Email Address" />
                </div>
                <div class="flex justify-between items-center mb-6">
                    <a href="#" class="text-blue-500">Sign In / Register</a>
                </div>
                <h2 class="text-2xl font-semibold mb-4">Delivery Address</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700">First Name *</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="First Name" />
                    </div>
                    <div>
                        <label class="block text-gray-700">Last Name *</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Last Name" />
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Address *</label>
                    <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your address here" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700">Street Address *</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Street Address" />
                    </div>
                    <div>
                        <label class="block text-gray-700">Apartment, Suite, Floor (optional)</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Apartment, Suite, Floor" />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700">Town / City *</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Town / City" />
                    </div>
                    <div>
                        <label class="block text-gray-700">State</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="State" />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700">Zip Code *</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Zip Code" />
                    </div>
                    <div>
                        <label class="block text-gray-700">Phone (optional)</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Phone" />
                    </div>
                </div>
                <div class="mb-6">
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox" />
                        <span class="ml-2 text-gray-700">Text me with news and offers</span>
                    </label>
                </div>
                <h2 class="text-2xl font-semibold mb-4">Payment</h2>
                <div class="mb-4">
                    <label class="block text-gray-700">First Name *</label>
                    <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="First Name" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Payment Method</label>
                    <div class="flex items-center mt-2">
                        <input type="radio" name="payment" class="form-radio" checked />
                        <span class="ml-2 text-gray-700">Credit Card</span>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700">Card Number</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter card number here" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label class="block text-gray-700">Expiry Date</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="MM/YY" />
                        </div>
                        <div>
                            <label class="block text-gray-700">Security Code</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="XXX" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700">Cardholder Name</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Cardholder Name" />
                    </div>
                </div>
                <div class="flex items-center mt-4">
                    <input type="radio" name="payment" class="form-radio" />
                    <span class="ml-2 text-gray-700">PayPal</span>
                </div>
                <div class="mt-6">
                    <button class="w-full bg-black text-white p-3 rounded-lg">Pay Now</button>
                </div>
            </div>
            <div class="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 lg:mt-0 lg:ml-6">
                <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
                <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/100" alt="Product Image" class="w-20 h-20 object-cover rounded" />
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">The Signature</h3>
                        <p class="text-gray-600">18K Yellow Gold / 5</p>
                        <ul class="text-gray-600 text-sm">
                            <li>Shape: Oval</li>
                            <li>Metal: 18k Yellow Gold</li>
                            <li>Band width: Standard</li>
                            <li>Band: Plain</li>
                            <li>Ring size: 5</li>
                        </ul>
                    </div>
                    <div class="ml-auto text-lg font-semibold">£1,031.00</div>
                </div>
                <div class="border-t border-gray-300 pt-4">
                    <div class="flex justify-between text-gray-700 mb-2">
                        <span>Subtotal</span>
                        <span>£1,031.00</span>
                    </div>
                    <div class="flex justify-between text-gray-700 mb-2">
                        <span>Shipping</span>
                        <span>Enter shipping address</span>
                    </div>
                    <div class="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>£1,031.00</span>
                    </div>
                    <div class="text-gray-600 text-sm mt-2">Including £171.83 in taxes</div>
                </div>
            </div>
        </div>
    </div>
}