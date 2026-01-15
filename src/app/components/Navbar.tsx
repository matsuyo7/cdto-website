/* This file will deal with website navigation components from one page to another
<nav> is for navigation sections in HTML
<ul> is for unordered lists in HTML
<li> is for list items in HTML
<a> is for hyperlinks in HTML
hyperlinks are used to link from one page to another
*/
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // whenever we click on the menu icon, it will toggle the nav state
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-black">
      <h1 className="w-full text-2xl">Cambodian Dance Troupe of Oregon</h1>
      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <NavLinks />
      </ul>

      {/* Mobile/Small screen Menu */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {/* if nav is false, show close icon, else show menu icon */}
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={`fixed top-0 right-0 w-[60%] h-full bg-amber-100 z-999 md:hidden transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside menu */}
        <div className="flex justify-end p-4">
          <AiOutlineClose
            size={28}
            onClick={handleNav}
            className="cursor-pointer"
          />
        </div>
        <ul className="p-4 flex flex-col">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

const NavLinks = () => {
  const useActiveLocation = (path: string) => useLocation().pathname === path; // Get the current route location
  return (
    <>
      <Link
        to="/"
        className={`p-4  text-xl whitespace-nowrap hover:text-amber-400 hover:font-bold transition-all ${
          useActiveLocation("/") ? "underline font-bold text-amber-400" : ""
        }`}
      >
        About us
      </Link>
      <Link
        to="/events"
        className={`p-4 text-xl hover:text-amber-400 hover:font-bold transition-all ${
          useActiveLocation("/events")
            ? "underline font-bold text-amber-400"
            : ""
        }`}
      >
        Events
      </Link>
      <Link
        to="/gallery"
        className={`p-4 text-xl hover:text-amber-400 hover:font-bold transition-all ${
          useActiveLocation("/gallery")
            ? "underline font-bold text-amber-400"
            : ""
        }`}
      >
        Gallery
      </Link>
      <Link
        to="/contact"
        className="p-4 text-xl hover:text-amber-400 hover:font-bold transition-all"
      >
        Contact
      </Link>
    </>
  );
};
