import { track } from "@vercel/analytics";

export default function Category({
                                     categoryFilter, categories, setCategoryFilter,
                                 }) {
    return (
        <>
            <div className="p-6">
                <h1 className="mb-5 text-center text-4xl font-bold">
                    Categories
                </h1>

                <div className="flex flex-wrap justify-center gap-3 text-2xl">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setCategoryFilter(cat);

                                track("category_selected", {
                                    category: cat,
                                });
                            }}
                            className={`rounded-full border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-900 hover:text-white ${cat===categoryFilter ? "bg-red-200" : "bg-white"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}