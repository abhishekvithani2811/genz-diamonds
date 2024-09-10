export default function FavoriteCollection() {
    return (
        <div class="relative bg-cover grid lg:grid-cols-2 bg-center bg-[url('https://via.placeholder.com/1200x600')]">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="lg:block hidden"></div>
            <div class="relative z-10 flex items-center justify-center h-full">
                <div class="text-white max-w-2xl lg:py-36 md:py-20 py-10 lg:px-0 px-4">
                    <h1 class="lg:text-4xl md:text-3xl text-2xl font-medium">Forever Favorites Collection</h1>
                    <p class="mt-4 md:text-lg font-normal">
                        A celebration of timeless elegance and classic design. Each piece is thoughtfully crafted to be a cherished staple, combining enduring style with exceptional quality.
                    </p>
                    <button class="mt-8 px-6 py-2 text-white border border-white hover:bg-gray-300/50">Shop Now</button>
                </div>
            </div>
        </div>
    )
}