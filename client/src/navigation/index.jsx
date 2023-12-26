import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Cv from "../pages/Cv";

// export const Navigation = ({ isLandingPage }) => {
export const Navigation = () => {
    return (
        <BrowserRouter>
            {/* <Header showHeader={!isLandingPage} /> */}
            <Header />
            <Routes>
                {/* <Route path="/" element={<Landing />} /> */}
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/body-of-works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
