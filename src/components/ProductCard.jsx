import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
    const regularPrice = Number(product.regularPrice);
    const sellingPrice = Number(product.sellingPrice);

    const discount = Math.round(
        ((regularPrice - sellingPrice) / regularPrice) * 100
    );

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-gray-50">

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain object-center p-2 sm:p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {product.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white shadow">
            {product.badge}
          </span>
                )}
            </div>

            {/* Content */}
            <div className="space-y-2 p-3 sm:p-4">

                {/* Category */}
                <div>
          <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-600">
            {product.category}
          </span>
                </div>

                {/* Name */}
                <h2 className="line-clamp-2 min-h-[42px] text-sm font-semibold leading-5 text-gray-900 sm:text-base">
                    {product.name}
                </h2>

                {/* Description */}
                <p className="line-clamp-1 text-xs text-gray-500">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-xs">

                    <FaStar className="text-yellow-500" />

                    <span className="font-semibold">
            {product.rating}
          </span>

                    <span className="text-gray-400">
            ({product.ratingCount})
          </span>

                </div>

                {/* Price */}
                <div className="flex flex-wrap items-center gap-2">

          <span className="text-xl font-bold text-gray-900">
            ₹{sellingPrice}
          </span>

                    <span className="text-sm text-gray-400 line-through">
            ₹{regularPrice}
          </span>

                    <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
            {discount}% OFF
          </span>

                </div>

                {/* Button */}
                <a
                    href={product.flipkartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block rounded-lg bg-black py-2.5 text-center text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
                >
                    Buy on Flipkart
                </a>

            </div>
        </div>
    );
}