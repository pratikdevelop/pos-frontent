import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <nav className="fixed top-0 z-50  w-9/12 shadow-md border-b-3 border-white px-2 sm:px-4 py-2 flex-auto rounded bg-white">
        <div className="flex flex-wrap items-center justify-between">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-dark">
             Pos app
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-4 md:text-sm md:font-medium md:border-0 dark:border-gray-700 items-center">
              {/* <li>
                <NavLink
                  to="/signup"
                  className="block font-semibold text-base text-slate-700 py-2 px-8 border-2 border-indigo-700 transition-2 ease-in-out hover:rounded-full hover:text-white bg-white  hover:bg-indigo-800  "
                >
                  create new account
                </NavLink>
              </li>
              <li>
                <NavLink to="/signin"
                  className="block  border-2  border-indigo-600 transition-2 ease-in-out hover:rounded-full font-semibold text-base  py-2 px-8   rounded hover:rounded-full hover:text-white bg-white  hover:bg-indigo-800  "
                >
                  signin now
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/signin"
                  className="block  border-2  border-indigo-600 transition-2 ease-in-out font-semibold text-base  py-2 px-8 rounded-full hover:text-white bg-white  hover:bg-indigo-800  "
                >
                  customers
                </NavLink>
              </li>
              <li>
                <NavLink to="/signin"
                  className="block  border-2  border-indigo-600 transition-2 ease-in-out font-semibold text-base  py-2 px-8   rounded-full hover:text-white bg-white  hover:bg-indigo-800  "
                >
                  orders
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
