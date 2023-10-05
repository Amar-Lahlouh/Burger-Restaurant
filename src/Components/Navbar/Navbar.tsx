import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <div className="   py-4">
      <div
        className="flex items-center flex-row 
       justify-between"
      >
        <div className="flex align-middle justify-center">
          <div onClick={() => setNav(!nav)} className="   pt-2">
            <AiOutlineMenu size={30} className="lg:hidden md:hidden" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
            Burger <span className="font-bold">Royale</span>
          </h1>
        </div>

        <ul className="hidden lg:flex md:flex px-5">
          <li className="font-semibold px-3 text-xl font-serif">
            <a href="#News">News</a>
          </li>
          <li className="font-semibold px-3 text-xl font-serif">
            <a href="#Menu">Menu</a>
          </li>
          <li className="font-semibold px-3 text-xl font-serif">
            <a href="#Gallery">Gallery</a>
          </li>
          <li className="font-semibold px-3 text-xl font-serif">
            <a href="#About">About</a>
          </li>
          <li className="font-semibold px-3 text-xl font-serif">
            <a href="#Contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu  */}
      {/* OverLayer */}
      {nav ? (
        <div className="bg-black/80 fixed w-full  top-0 left-0 h-screen z-10"></div>
      ) : (
        ""
      )}

      {/* SideBar Menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] z-10 duration-300 bg-white h-screen"
            : "fixed top-0 left-[100%] w-[300px] z-10 duration-300 bg-white h-screen"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="right-4 top-4  absolute cursor-pointer "
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="font-semibold px-3 py-3 text-xl font-serif">
              <a href="#News" onClick={() => setNav(!nav)}>
                News
              </a>
            </li>
            <li className="font-semibold p-3 text-xl font-serif">
              <a href="#Menu" onClick={() => setNav(!nav)}>
                Menu
              </a>
            </li>
            <li className="font-semibold p-3 text-xl font-serif">
              <a href="#Gallery" onClick={() => setNav(!nav)}>
                Gallery
              </a>
            </li>
            <li className="font-semibold p-3 text-xl font-serif">
              <a href="#About" onClick={() => setNav(!nav)}>
                About
              </a>
            </li>
            <li className="font-semibold p-3 text-xl font-serif">
              <a href="#Contact" onClick={() => setNav(!nav)}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
