import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

import useProducts from "./hooks/useProducts";
import { useMemo, useState } from "react";

function App() {
    const { products, loading } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") {
            return products;
        }

        return products.filter(
            (product) => product.category === selectedCategory
        );
    }, [products, selectedCategory]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <Hero
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                filteredProducts={filteredProducts}
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