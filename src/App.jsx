import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

import useProducts from "./hooks/useProducts";

function App() {
    const { products, loading } = useProducts();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <Hero />

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    products.map((product) => (
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