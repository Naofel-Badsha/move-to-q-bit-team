import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/opportunities", label: "Opportunities" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "contact" },
];

const NavItems = ({ handleToggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={handleToggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-[#E58411] font-bold" : "hover:text-[#E58411]"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //-------Handle----Toggle----Button-------
  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  //-------Navbar-Change-state-----And-Apply-Bg-Color-------
  useState(() => {
    const handleSchroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleSchroll);
    return () => {
      window.addEventListener("scroll", handleSchroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${
        isScrolled
          ? "bg-white shadow-2xl text-black"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen-2xl container m-auto flex gap-5 items-center justify-between py-6 px-4">
        {/*-----------Logo-----------------*/}
        <Link to="/" className="w-[100px]">
          <img src="https://i.ibb.co.com/wF9kH70F/logo-2.png"  />
        </Link>

        {/*---------------HamburgerMenu------------*/}
        <div onClick={handleToggleMenu} className="md:hidden">
          {isMenuOpen ? null : (
            <HiBars3 className="text-3xl hover:text-[#E58411] cursor-pointer hover:rotate-180" />
          )}
        </div>

        {/*-----------Desk-----Top----MenuItems-----------------*/}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/*-----------Mobile-----Top----MenuItems-----------------*/}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-4 right-4"
            onClick={handleToggleMenu}
          >
            <IoMdClose className="text-3xl hover:text-rose-600 cursor-pointer hover:rotate-180" />
          </div>
          <NavItems handleToggleMenu={handleToggleMenu} />
        </div>

        {/*-----------Cart-----------------*/}
        {/* <div className="hidden md:block cursor-pointer relative">
          <IoMdCart className="text-2xl" />
          <sub className="absolute -top-3 -right-3 bg-[#E58411] text-white w-5 h-5 rounded-full flex items-center justify-center text-sm">
            0
          </sub>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
