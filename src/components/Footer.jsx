export default function Footer() {
    return (
        <>
        <div className="p-10 mt-30 flex flex-col gap-8 border-t-10 border-gray-200 bottom-0">
            <div className="flex gap-4 flex-col ">
                <h1 className="text-4xl font-bold">Kuber Grains & Spices Pvt. Ltd.</h1>
                <p className="text-2xl">Kuber Grains & Spices Pvt. Ltd. is a trusted manufacturer of premium incense products, including incense sticks, cones, sambrani cups, camphor, bhimseni, dhoop, and aromatic blends, delivering authentic fragrances and spiritual experiences for homes, temples, and wellness spaces.</p>
            </div>
            <div className="flex gap-4 flex-col text-2xl" >
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <a href="tel:+917065465000"> +91 7065465000 </a>
                <a href="https://wa.me/917065002003"> WhatsApp Us</a>
                <a href="mailto:customercare@kubergrains.com"> customercare@kubergrains.com </a>
                <a href="mailto:sales@kubergrains.com"> sales@kubergrains.com </a>
            </div>
            <div className="flex gap-4 flex-col text-2xl" >
                <h1 className="text-4xl font-bold">Our Address</h1>
                <a href="https://maps.google.com/?q=Kuber+grains+Kirti+Nagar+New+Delhi+110015" className="text-2xl">52-B, Rama Road, Industrial Area, Kirti Nagar, New Delhi, Delhi 110015</a>
            </div>
            <p className="text-center text-2xl">© 2026 Kuber Grains & Spices Pvt. Ltd. All Rights Reserved. <br/>
                Crafted with ❤️ to help customers discover products featured in our Instagram reels.
            </p>
        </div>
        </>
    )
}