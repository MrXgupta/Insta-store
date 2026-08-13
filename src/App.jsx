import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
            <Analytics />
        </>

    )
}

export default App;