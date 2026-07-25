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
                console.log("CSV Result:", result);
                console.log("CSV Data:", result.data);
                console.log("CSV Errors:", result.errors);

                const parsed = result.data
                    .filter(item => item.active?.trim().toUpperCase() === "TRUE")
                    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

                console.log("Parsed:", parsed);

                setProducts(parsed);
                setLoading(false);
            },
        });
    }, []);

    return { products, loading };
}