import { FiSearch } from "react-icons/fi";

export default function Hero({selectedCategory, setSelectedCategory, filteredProducts, }) {
    const categories = [
        "All",
        "Agarbatti",
        "Camphor",
        "Cones",
        "Dhoop",
        "Dhoop Stick",
        "Sambrani",
    ];

    return (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
                    Featured Products
                </p>

                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Shop Products from Our Instagram Reels
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                    Browse all products featured in our latest Instagram content and
                    purchase them directly from Flipkart.
                </p>
            </div>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-xl">
                <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                    <FiSearch className="mr-3 text-xl text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                            selectedCategory === category
                                ? "bg-black text-white shadow-lg"
                                : "border border-gray-200 bg-white text-gray-700 hover:border-black hover:text-black"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-center text-xs text-gray-500">
                Prices and availability may change. Please check Flipkart for the latest
                details before purchasing.
            </p>


            <div className="mx-auto mb-6 max-w-7xl px-4 text-center mt-10">
                <p className="text-sm text-gray-600">
                    Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
                    product{filteredProducts.length !== 1 ? "s" : ""}
                    {selectedCategory !== "All" && (
                        <>
                            {" "}
                            in <span className="font-semibold">{selectedCategory}</span>
                        </>
                    )}
                </p>
            </div>

        </section>
    );
}