import { useEffect, useState } from "react";

export default function Banners() {
    const banners = ["1.png", "2.png", "3.png", "4.png"];

    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => {
                return (prev + 1) % banners.length;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentBanner * 100}%)`,
                }}
            >
                {banners.map((banner, index) => (
                    <img
                        key={index}
                        src={banner}
                        alt={`Kuber banner ${index + 1}`}
                        className="w-full shrink-0"
                    />
                ))}
            </div>
        </div>
    );
}