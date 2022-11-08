import React from "react";
import { Link, useLocation } from "react-router-dom";

const rentor = "./rentor-logo.png";

const Header = () => {
  const location = useLocation();

  const pathRouteMatch = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <header className="py-4 shadow-lg sticky top-0 w-screen z-50 bg-white">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <img src={rentor} alt="Rentor Logo" className="h-8" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-10">
            <li className="font-semibold text-gray-400 hover:text-cyan-500">
              <Link
                className={`border-b-[3px] py-5 border-transparent ${
                  pathRouteMatch("/") && "text-cyan-500 border-b-cyan-500"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-gray-400 hover:text-cyan-500">
              <Link
                className={`border-b-[3px] py-5 border-transparent ${
                  pathRouteMatch("/offers") && "text-cyan-500 border-b-cyan-500"
                }`}
                to="/offers"
              >
                Offers
              </Link>
            </li>
            <li className="font-semibold text-gray-400 hover:text-cyan-500">
              <Link
                className={`border-b-[3px] py-5 border-transparent ${
                  pathRouteMatch("/signin") && "text-cyan-500 border-b-cyan-500"
                }`}
                to="/signin"
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
