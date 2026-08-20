import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center p-7 text-3xl gap-10 border-b-2 border-gray-200 bg-gray-1090 bg-white/95 backdrop-blur sticky top-0 z-50">
                <FaBars  className="m-10 text-5xl" />

                <a href="/" className="flex flex-col items-center gap-4">
                <img src="/logo.png" alt="Kuber Dhoop & Agarbatti" className="w-30 h-30" />
                </a>

                <img src="./Flipkart Logo.png" alt="" className="w-30 h-30 rounded-[50%]"  />

                {/*<div className="flex justify-between w-full px-10">*/}
                {/*    <Link to="/collection"> Collection </Link>*/}
                {/*    <Link to="/shop-now"> Shop Now </Link>*/}
                {/*    <Link to="/contact-us"> Contact Us </Link>*/}
                {/*    <Link to="/catalog"> Catalog </Link>*/}
                {/*</div>*/}
            </div>
        </>
    )
}