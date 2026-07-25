import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {

    console.log(product.flipkartUrl)
    const regularPrice = Number(product.regularPrice);
    const sellingPrice = Number(product.sellingPrice);

    const discount = Math.round(
        ((regularPrice - sellingPrice) / regularPrice) * 100
    );

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Product Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain object-center p-4 transition duration-300"
                    loading="lazy"
                />

                {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
                )}
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                    {product.category}
                </p>

                <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
                    {product.name}
                </h2>

                <p className="text-sm text-gray-500">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 text-sm">
                    <FaStar className="text-yellow-500" />

                    <span className="font-semibold">
            {product.rating}
          </span>

                    <span className="text-gray-400">
            ({product.ratingCount} reviews)
          </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ₹{sellingPrice}
          </span>

                    <span className="text-gray-400 line-through">
            ₹{regularPrice}
          </span>

                    <span className="rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            {discount}% OFF
          </span>
                </div>

                {/* Buy Button */}
                <a
                    href={product.flipkartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-black py-3 text-center font-semibold text-white transition hover:bg-gray-800"
                >
                    Buy on Flipkart
                </a>
            </div>
        </div>
    );
}

