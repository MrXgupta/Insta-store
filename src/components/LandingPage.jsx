import Section01 from './Section01'
import Banners from './Banners';
import Section02 from './Section02'
import Featured from './Featured';
import WhyChooseKuber from "./WhyChooseKuber.jsx";
import CustomerSays from "./CustomerSays";

export default function LandingPage() {
    return (
        <>
            <Section01/>
            <Banners/>
            <Section02/>
            <Featured/>
            <WhyChooseKuber/>
            <CustomerSays/>
        </>
    )

}