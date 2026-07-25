import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import useProducts from "./hooks/useProducts";
import { useMemo, useState } from "react";

function App() {
    const { products, loading } = useProducts();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Category filter
            const categoryMatch =
                selectedCategory === "All" ||
                product.category === selectedCategory;

            // Search filter
            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                product.sku
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                product.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

            return categoryMatch && searchMatch;
        });
    }, [products, selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <Hero
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                filteredProducts={filteredProducts}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <section className="mx-auto max-w-7xl px-4 pb-10">
                {loading ? (
                    <div className="py-20 text-center">
                        <p className="text-lg text-gray-500">Loading products...</p>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="mb-4 text-6xl">🔍</div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            No products found
                        </h2>

                        <p className="mt-2 max-w-md text-center text-gray-500">
                            We couldn't find any products matching your search or selected category.
                        </p>

                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("All");
                            }}
                            className="mt-6 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
                        >
                            View All Products
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.sku}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
}

export default App;