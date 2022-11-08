import React from "react";
import { Link } from "react-router-dom";

const rentor = "./rentor-logo.png";

const Header = ({ active, setActive }) => {
  return (
    <header className="py-5 shadow-lg">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <img src={rentor} alt="Rentor Logo" className="h-6" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-10">
            <li className="font-semibold text-gray-600 hover:text-cyan-500">
              <Link
                className={`${
                  active === "home" ? "text-cyan-500 underline" : ""
                }`}
                to="/"
                onClick={() => setActive("home")}
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-gray-600 hover:text-cyan-500">
              <Link
                className={`${
                  active === "offers" ? "text-cyan-500 underline" : ""
                }`}
                to="/offers"
                onClick={() => setActive("offers")}
              >
                Offers
              </Link>
            </li>
            <li className="font-semibold text-gray-600 hover:text-cyan-500">
              <Link
                className={`${
                  active === "signin" ? "text-cyan-500 underline" : ""
                }`}
                to="/signin"
                onClick={() => setActive("signin")}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
