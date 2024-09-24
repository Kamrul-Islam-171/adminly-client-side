import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { FaUser } from "react-icons/fa"; // Import user icon from React Icons

const Navbar = () => {
  const { logOut, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Function to handle nav item click
  const handleNavItemClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className="bg-cyan-900 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between h-16">
          {/* Logo / Website Name */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              Adminly
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-400 font-bold" : "text-white hover:text-gray-300")}>
              Home
            </NavLink>
            <NavLink to="/manage-user" className={({ isActive }) => (isActive ? "text-blue-400 font-bold" : "text-white hover:text-gray-300")}>
              User Management
            </NavLink>

            {/* Conditional Login/Logout */}
            {user ? (
              <div className="flex items-center gap-4 relative">
                <button
                  className="flex items-center text-white bg-blue-500 px-3 py-2 hover:bg-blue-700"
                  onMouseEnter={() => setIsTooltipVisible(true)}
                  onMouseLeave={() => setIsTooltipVisible(false)}
                >
                  <FaUser className="h-6 w-6" />
                </button>
                {isTooltipVisible && (
                  <div className="absolute bg-gray-800 text-white text-sm rounded px-2 py-1 -mt-10 left-0">
                    {user}
                  </div>
                )}
                <Link to="/login">
                  <button onClick={logOut} className="text-white bg-blue-500 px-3 py-2 hover:bg-blue-700">
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/login" className="text-white bg-blue-500 px-4 py-2 hover:bg-blue-700">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" onClick={handleNavItemClick} className={({ isActive }) => (isActive ? "block text-blue-400 font-bold" : "block text-white hover:text-gray-300")}>
            Home
          </NavLink>
          <NavLink to="/manage-user" onClick={handleNavItemClick} className={({ isActive }) => (isActive ? "block text-blue-400 font-bold" : "block text-white hover:text-gray-300")}>
            Manage User
          </NavLink>
          {user ? (
            <div className="flex flex-col gap-4">
              <button className="block w-full text-left text-white bg-blue-500 px-3 py-2  hover:bg-blue-700">{user}</button>
              <button onClick={logOut} className="block w-full  text-left text-white bg-blue-500 px-3 py-2  hover:bg-blue-700">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={handleNavItemClick} className="block w-full text-left text-white bg-blue-500 px-3 py-2 hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
