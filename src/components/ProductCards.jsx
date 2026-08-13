import { track } from '@vercel/analytics';

export default function ProductCards({
    filteredProducts
                                     }) {
    return (
        <>
            <div className="grid grid-cols-2 gap-10 p-10">
                {filteredProducts.map(product => (
                    <div key={product.sku} className="flex flex-col justify-between border-2 border-gray-200 rounded-2xl py-2 px-5 overflow-hidden gap-3">
                        <img src={product.image} alt={product.name} className="w-full h-120 object-contain" />
                        <h1 className="text-2xl line-clamp-2">{product.name}</h1>
                        <p className="text-2xl">⭐{product.rating}/5</p>
                        <div className="flex gap-4 text-3xl my-3 items-center">
                            <p className="font-bold">₹{product.sellingPrice}</p>
                            <p className="text-red-700 line-through">₹ {product.regularPrice}</p>
                            <p className="py-2 px-5 bg-green-200 rounded-2xl text-xl "> {Math.round(
                                ((product.regularPrice - product.sellingPrice) / product.regularPrice) * 100
                            )}%</p>
                        </div>
                        <a href={product.flipkartUrl}
                           className="bg-black rounded-2xl text-white py-5 text-2xl text-center"
                           rel="noopener noreferrer"
                           onClick={() =>
                               track("Buy on Flipkart", {
                                   sku: product.sku,
                                   product: product.name,
                                   category: product.category,
                               })
                           }

                        >Buy on Flipkart</a>
                    </div>
                ))}
            </div>
        </>
    )
}