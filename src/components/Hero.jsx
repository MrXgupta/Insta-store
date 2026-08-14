import {useEffect, useState} from "react";
import Category from "./Category.jsx";
import Papa from 'papaparse';
import ProductCards from "./ProductCards.jsx";

export default function Hero() {
    const categories = ["All", "Agarbatti", "Camphor", "Cones", "Dhoop", "Dhoop Stick", "Sambrani"]
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [products, setProducts] = useState([])

    useEffect(() => {
    Papa.parse("/products.csv", {
        header: true,
        download: true,
        complete: (results) => {
            setProducts(results.data);
            console.log(products);
        }
    });
    },[])

    const filteredProducts = products.filter(
        product =>
            categoryFilter === "All" ||
            product.category === categoryFilter
    )

    return (
        <>
        <Category
            categoryFilter={categoryFilter}
            categories={categories}
            setCategoryFilter={setCategoryFilter}
        />
            {filteredProducts.length > 0 ?
            <ProductCards filteredProducts={filteredProducts} />
            : <p className="text-center text-5xl animate-pulse  font-bold py-50">Loading...</p>
            }
        </>
    )
}