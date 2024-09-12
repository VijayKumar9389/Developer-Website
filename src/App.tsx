import './styles/App.scss'
import Hero from "./pages/Hero/Hero.tsx";
import Work from "./pages/Projects/Projects.tsx";
import {useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import Design from "./pages/Design/Design.tsx";
import Experience from "./pages/Skills/Skills.tsx";
import Results from "./pages/Results/Results.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500,
        });
    }, []);

    return (
        <div className="app">
            <Navbar/>
            <Hero/>
            <div className="app-wrapper">
                <Experience/>
                <div>
                    <Design/>
                    <Results/>
                </div>
                <Work/>
                {/*<Contact />*/}
            </div>
            <Footer/>
        </div>
    );
}

export default App
