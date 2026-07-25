import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

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

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.sku}
                            product={product}
                        />
                    ))
                )}
            </section>
        </div>
    );
}

export default App;