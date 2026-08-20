import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function Section02() {
    const features = [
        {
            icon: <TbTruckDelivery />,
            title: "Delivered by Flipkart",
            subtitle: "Fast & Reliable",
        },
        {
            icon: <IoShieldCheckmark />,
            title: "Secure Payments",
            subtitle: "100% Safe & Secure",
        },
        {
            icon: <MdOutlineCancel />,
            title: "No Returns",
            subtitle: "Shop with confidence",
        },
        {
            icon: <FaStar />,
            title: "Top Rated Products",
            subtitle: "Loved by Customers",
        },
    ];

    return (
        <section className="mx-4 sm:mx-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-2 rounded-2xl overflow-hidden">

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`
                            flex items-center gap-3 p-4
                            lg:px-5 lg:py-5
                            ${index < 2 ? "border-b-2 lg:border-b-0" : ""}
                            ${index % 2 === 0 ? "border-r-2 lg:border-r-2" : ""}
                            ${index === 1 ? "lg:border-r-2" : ""}
                            ${index === 2 ? "lg:border-r-2" : ""}
                            border-gray-200
                        `}
                    >
                        <span className="shrink-0 text-2xl sm:text-3xl lg:text-4xl bg-amber-200 p-2 rounded-xl">
                            {feature.icon}
                        </span>

                        <div>
                            <h3 className="font-bold text-xl leading-tight">
                                {feature.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                {feature.subtitle}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}