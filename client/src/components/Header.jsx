import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.scss";
import sitelogo from "../assets/images/logo/sitelogo.png";
import sitelogoWhite from "../assets/images/logo/sitelogo_white.png";


  export const Header = ({ isWhiteBackground = false }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    const renderMobileMenu = () => {
      return (
        isMobileMenuOpen && (
          <div className="mobile-menu-popup">
            <div className="mobile-menu-content">
              <button className="close-button font-semibold" onClick={closeMobileMenu}>
                X
              </button>
              <Link to="/" className="mobile-menu-link">
                Home
              </Link>
              <Link to="/about" className="mobile-menu-link">
                About
              </Link>
              <Link to="/cv" className="mobile-menu-link">
                Curriculum vitae
              </Link>
              <Link
                to="/body-of-works"
                className="mobile-menu-link"
              >
                Body of Works
              </Link>
              <Link to="/contact" className="mobile-menu-link">
                Contact
              </Link>
            </div>
          </div>
        )
      );
    };
  
  return (
    <header className={`bg-transparent main_header`}>
      <nav
        id="header"
        className={`bg-transparent }`}
      >
        <div className="mt-0 py-1 flex items-center nav-icon justify-between">
          <div className="mobile-menu-icon md:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-12 h-12"
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
          </div>
          <div className="mx-auto logo">
            <Link to="/" className="text-l block py-2 w-full">
            <img
              src={isWhiteBackground ? sitelogoWhite : sitelogo}
              alt="logo"
              width="96%"
              className={isWhiteBackground ? "white-logo" : "black-logo"}
            />
            </Link>
          </div>
          <ul
            className={`nav-menu-wrapper flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium`}
            id="mobile-menu"
          >
            <li>
              <Link
                to="/"
                className={`hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cv"
                className={`hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0`}
              >
                Curriculum Vitae
              </Link>
            </li>
            <li>
              <Link
                to="/body-of-works"
                className={`hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0`}
              >
                Body of Works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {renderMobileMenu()}
    </header>
  );  
};