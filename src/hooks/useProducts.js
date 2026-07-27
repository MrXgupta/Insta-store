import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Papa.parse("/products.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result) => {

                const parsed = result.data
                    .filter(item => item.active?.trim().toUpperCase() === "TRUE")
                    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));


                setProducts(parsed);
                setLoading(false);
            },
        });
    }, []);

    return { products, loading };
}