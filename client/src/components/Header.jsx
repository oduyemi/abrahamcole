import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.scss";
import "../darkStyle.scss"
import sitelogo from "../assets/images/logo/sitelogo.jpg";
import sitelogoWhite from "../assets/images/logo/sitelogo_white.png";

// export const Header = ({ showHeader, isBlackBackground }) => {

export const Header = ({ isBlackBackground }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState("");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  // if (!showHeader) {
  //   return null;
  // }

  const renderMobileMenu = () => {
    return isMobileMenuOpen && (
      <div className="md:hidden">
          {/* <Link to="/selected-projects" className="text-l block py-2 hover:text-butte">Selected Projects</Link> */}
          <Link to="/about" className="text-l block py-2 hover:text-butter">About</Link>
          <Link to="/cv" className="text-l block py-2 hover:text-butter">Curriculum vitae</Link>
          <Link to="/body-of-works" className="text-l block py-2 hover:text-butter">Body of Works</Link>
          <Link to="/contact" className="text-l block py-2 hover:text-butter">Contact</Link>
          <Link to="/" className="text-l block py-2 hover:text-butter">
            <img src={isBlackBackground ? sitelogoWhite : sitelogo} alt="logo"></img>
          </Link>
         
        </div>
      );
  };

  return (
    <header>
      <nav
        id="header"
        className={`bg-transparent main_header ${isBlackBackground ? "white-text" : "black-text"}`}
      >
        <div className="mt-0 py-1 flex items-center nav-icon justify-between">
          <div className="mobile-menu-button md:hidden">
            <button className="text-gray-700 p-2" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {renderMobileMenu()}
          </div>
          <div className="mx-auto logo">
            <Link to="/" className="text-l block py-2 hover:text-butter">
              <img
                src={isBlackBackground ? sitelogoWhite : sitelogo}
                alt="logo"
                width="70%"
              ></img>
            </Link>
          </div>
          <ul className={`nav-menu-wrapper flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium`} id="mobile-menu">
            <li>
              <Link to="/" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">About</Link>
            </li>
            <li>
              <Link to="/cv" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Curriculum Vitae</Link>
            </li>
            <li>
              <Link to="/body-of-works" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Body of Works</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );  
};
