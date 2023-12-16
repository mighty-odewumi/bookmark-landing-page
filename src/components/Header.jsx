import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/bookmark-assets/logo-bookmark.svg";
import logo2 from "../assets/bookmark-assets/logo-bookmark-2.svg";
import hamburger from "../assets/bookmark-assets/icon-hamburger.svg";
import close from "../assets/bookmark-assets/icon-close.svg";
import facebook from "../assets/bookmark-assets/icon-facebook.svg";
import twitter from "../assets/bookmark-assets/icon-twitter.svg";


export default function Header() {

  const [toggleNav, setToggleNav] = useState(false);
  
  // Called when there is a click action on the Hamburger menu 
  function alterNav(e) {
    e.preventDefault();
    setToggleNav(prevValue => !prevValue);
    console.log("toggled");
  }

  return (
    <>
      <header className="pt-6 pb-20 px-6 flex justify-between items-center md:mx-20 md:pt-0 md:pb-0 md:mt-[-30px] md:px-0 lg:mx-[140px]">
        <img src={logo} alt="Bookmark logo" className="" />

        <img
          src={hamburger}
          alt="Hamburger icon"
          className={`${
            toggleNav ? "hidden" : "block"
          } md:hidden w-6 h-6 cursor-pointer transition-1`}
          onClick={alterNav}
        />

        <nav
          className={`${
            toggleNav ? "w-full" : "hidden"
          } h-full bg-darkblue-200 z-20 text-white fixed top-0 left-0 p-6 text-center text-xl uppercase tracking-widest transition-all md:bg-transparent md:text-darkblue-100 md:static md:flex md:px-0`}
        >
          <div className="nav-header flex justify-between items-center">
            <img src={logo2} alt="Bookmark logo" className="md:hidden" />

            <img
              src={close}
              alt="Close icon"
              className={`${
                toggleNav ? "block" : "hidden"
              }  md:hidden w-4 h-4 cursor-pointer`}
              onClick={alterNav}
            />
          </div>

          <div className="flex flex-col py-10 md:flex-row md:py-10 md:gap-8 md:font-light md:text-sm">
            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:hover:border-none md:hover:text-softred-100 transition-all md:font-semibold"
              to="/features"
            >
              Features
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:hover:border-none md:hover:text-softred-100 md:font-semibold transition-all"
              to="/pricing"
            >
              Pricing
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:hover:border-none md:hover:text-softred-100 md:font-semibold transition-all"
              to="/contact"
            >
              Contact
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:font-bold md:bg-softred-100 md:text-white md:px-6 md:rounded-md md:hover:border-2 md:hover:border-softred-100 md:hover:bg-white md:hover:text-softred-100 md:transition-all "
              to="/login"
            >
              Login
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>
          </div>

          <div className="flex justify-center gap-4 mt-10 items-center">
            <img 
              src={facebook} 
              alt="facebook icon" 
              className="md:hidden"
            />
            <img 
              src={twitter} 
              alt="twitter icon" 
              className="md:hidden"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

