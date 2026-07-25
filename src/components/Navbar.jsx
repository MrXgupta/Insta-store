export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex flex-col items-center justify-center px-4 py-4">
                {/* Logo */}
                <img
                    src="/logo.png"
                    alt="Kuber"
                    className="h-14 w-auto sm:h-16"
                />

                {/* Brand Name */}
                <h1 className="mt-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
                    Kuber - Dhoop &amp; Agarbatti
                </h1>
            </div>
        </header>
    );
}