import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiMessageCircle,
} from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* Top */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* About */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            Kuber Grains &amp; Spices Pvt. Ltd.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            Kuber Grains &amp; Spices Pvt. Ltd. is a trusted manufacturer
                            of premium incense products, including incense sticks,
                            cones, sambrani cups, camphor, bhimseni, dhoop, and aromatic
                            blends, delivering authentic fragrances and spiritual
                            experiences for homes, temples, and wellness spaces.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4">

                            <a
                                href="tel:+917065002003"
                                className="flex items-center gap-3 text-gray-600 transition hover:text-black"
                            >
                                <FiPhone className="text-lg" />
                                <span>+91 7065002003</span>
                            </a>

                            <a
                                href="https://wa.me/917065002003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 transition hover:text-green-600"
                            >
                                <FiMessageCircle className="text-lg" />
                                <span>WhatsApp Us</span>
                            </a>

                            <a
                                href="mailto:customercare@kubergrains.com"
                                className="flex items-center gap-3 text-gray-600 transition hover:text-black"
                            >
                                <FiMail className="text-lg" />
                                <span>customercare@kubergrains.com</span>
                            </a>

                            <a
                                href="mailto:sales@kubergrains.com"
                                className="flex items-center gap-3 text-gray-600 transition hover:text-black"
                            >
                                <FiMail className="text-lg" />
                                <span>sales@kubergrains.com</span>
                            </a>

                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Our Address
                        </h3>
                        <a
                            href="https://maps.google.com/?q=52-B+Rama+Road+Industrial+Area+Kirti+Nagar+New+Delhi+110015"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 flex items-start gap-3 text-gray-600 transition hover:text-black"
                        >
                            <FiMapPin className="mt-1 text-lg flex-shrink-0" />

                            <p className="leading-7">
                                52-B, Rama Road,
                                <br />
                                Industrial Area,
                                <br />
                                Kirti Nagar,
                                <br />
                                New Delhi, Delhi 110015
                            </p>
                        </a>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-gray-200 pt-6 text-center">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Kuber Grains &amp; Spices Pvt. Ltd.
                        All Rights Reserved.
                    </p>

                    <p className="mt-2 text-xs text-gray-400">
                        Crafted with ❤️ to help customers discover products featured in
                        our Instagram reels.
                    </p>

                </div>
            </div>
        </footer>
    );
}