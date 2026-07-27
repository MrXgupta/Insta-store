import { FiSearch } from "react-icons/fi";

export default function Hero({
                                 selectedCategory,
                                 setSelectedCategory,
                                 filteredProducts,
                                 searchQuery,
                                 setSearchQuery,
                             }) {
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
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Featured Products
                </p>

                <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl">
                    Shop Products
                    <br className="sm:hidden" />
                    {" "}from Our Instagram Reels
                </h1>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                    Browse all products featured in our latest Instagram content and buy
                    them directly from Flipkart.
                </p>
            </div>

            {/* Search */}
            <div className="mx-auto mt-6 max-w-xl">
                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                    <FiSearch className="mr-3 text-lg text-gray-400" />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                            selectedCategory === category
                                ? "bg-black text-white"
                                : "border border-gray-200 bg-white text-gray-700 hover:border-black hover:text-black"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Count */}
            <div className="mt-5 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    Showing{" "}
                    <span className="font-semibold">
            {filteredProducts.length}
          </span>{" "}
                    product{filteredProducts.length !== 1 ? "s" : ""}
                </p>

                {selectedCategory !== "All" && (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            {selectedCategory}
          </span>
                )}
            </div>

            {/* Divider */}
            <div className="mt-5 border-b border-gray-200" />
        </section>
    );
}