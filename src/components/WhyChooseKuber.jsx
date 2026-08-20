import { FaLeaf } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { BiBowlHot } from "react-icons/bi";
import { FaGift } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


export default function WhyChooseKuber() {

    const data = [
        {
            Icon : <FaLeaf />,
            Label : "Premium Quality",
        },
        {
            Icon : <MdOutlineTimer />,
            Label : "Long Lasting Aroma",
        },
        {
            Icon : <BiBowlHot />,
            Label : "Pure & Safe",
        },
        {
            Icon : <FaGift />,
            Label: "Perfect for Gifting"
        },
        {
            Icon : <CiHeart />,
            Label : "Trusted by Millions of Customers",
        }
    ]

    return (
        <>
            <h1 className="text-4xl text-center font-bold mt-10 font-cinzel">Why Choose Kuber?</h1>
            <div className="flex gap-3 items-center text-wrap px-7 justify-center bg-amber-100 py-10 m-10 5 rounded-2xl">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-2xl w-1/5 justify-center gap-3">
                        <span className="text-6xl text-orange-950 p-4 rounded-[50%] bg-amber-200">{item.Icon}</span>
                        <p className="text-center">{item.Label}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}