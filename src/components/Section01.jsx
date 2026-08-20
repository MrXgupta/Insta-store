import { IoShieldCheckmark} from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

export default function Section01() {
    return (
        <>
        <div className="flex justify-between items-center px-20 py-4 bg-[#2c1709] text-white text-xl ">
            <div className="flex gap-2 justify-center items-center"> <span className="text-[#f9c819]"> <IoShieldCheckmark /> </span> Premium Quality</div>
            <div className="flex gap-2 justify-center items-center"> <span className="text-[#f9c819]">  <TbTruckDelivery /> </span> Fast Delivery via Flipkart</div>
            <div className="flex gap-2 justify-center items-center"> <span className="text-[#f9c819]">  <IoIosTimer /> </span> No Return</div>
        </div>
        </>
    )
}