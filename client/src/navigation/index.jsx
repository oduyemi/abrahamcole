import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Landing from "../pages/Landing";
// import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

export const Navigation = ({ isLandingPage }) => {
    return (
        <BrowserRouter>
            <Header showHeader={!isLandingPage} />
            <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/selected-projects" element={<Projects />} />
                <Route path="/body-of-works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
