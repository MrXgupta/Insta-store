import { Analytics } from '@vercel/analytics/react';
import {Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/allProducts" element={<Hero/>} />
            </Routes>
            <Footer />
            <Analytics />
        </>

    )
}

export default App;