import {useEffect, useState} from "react";
import Papa from 'papaparse';
import {track} from "@vercel/analytics";
import {Link} from "react-router-dom"


export default function Featured() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Papa.parse("/products.csv", {
            header: true,
            download: true,
            complete: (results) => {
                const featuredProducts = results.data.filter(
                    product => product.Featured === "Yes"
                );

                setProducts(featuredProducts);
            }
        });
    }, []);

    return (
        <>
            <div className="relative flex items-center justify-center py-2 px-10">
                <h1 className="text-4xl font-bold py-5 font-cinzel">
                    Best Selling Products
                </h1>

                <Link to="/allProducts" className="absolute right-10 bg-amber-100 py-3 px-7 text-2xl rounded-2xl">
                    View All
                </Link>
            </div>

            <div className="flex w-full gap-10 p-10 overflow-x-auto">
                {products.map(product => (
                    <div
                        key={product.sku}
                        className="w-1/2 shrink-0 flex flex-col justify-between border-2 border-gray-200 rounded-2xl py-2 px-5 overflow-hidden gap-3"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-120 object-contain"
                        />

                        <h1 className="text-2xl line-clamp-2">
                            {product.name}
                        </h1>

                        <p className="text-2xl">
                            ⭐{product.rating}/5
                        </p>

                        <div className="flex gap-4 text-3xl my-3 items-center">
                            <p className="font-bold">
                                ₹{product.sellingPrice}
                            </p>

                            <p className="text-red-700 line-through">
                                ₹{product.regularPrice}
                            </p>

                            <p className="py-2 px-5 bg-green-200 rounded-2xl text-xl">
                                {Math.round(
                                    ((product.regularPrice - product.sellingPrice) /
                                        product.regularPrice) *
                                    100
                                )}%
                            </p>
                        </div>

                        <a
                            href={product.flipkartUrl}
                            className="bg-black rounded-2xl text-white py-5 text-2xl text-center"
                            rel="noopener noreferrer"
                            onClick={() =>
                                track("Buy on Flipkart", {
                                    sku: product.sku,
                                    product: product.name,
                                    category: product.category,
                                })
                            }
                        >
                            Buy on Flipkart
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}