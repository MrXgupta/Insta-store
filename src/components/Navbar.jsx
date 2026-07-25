export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    {/* Replace with your SVG later */}
                    <img
                        src="./logo.png"
                        alt="Kuber"
                        className="h-10 w-auto"
                    />

                    <div>
                        <h1 className="text-lg font-bold tracking-wide text-gray-900">
                            Kuber
                        </h1>
                        <p className="text-xs text-gray-500">
                            Featured Products
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                    <span className="text-lg">🛍️</span>
                    <span className="text-sm font-medium text-gray-700">
            Shop Now
          </span>
                </div>
            </div>
        </header>
    );
}