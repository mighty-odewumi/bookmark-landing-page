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
      <header className="pt-6 pb-20 px-6 flex justify-between">
        <img src={logo} alt="Bookmark logo" />

        <img 
          src={hamburger} 
          alt="Hamburger icon" 
          className={`${toggleNav ? "hidden" : "block"}  md:hidden w-6 h-6 cursor-pointer`}
          onClick={alterNav}
        />

        <nav className={
          `${toggleNav ? "w-full" : "hidden"} md:block h-full bg-darkblue-200 z-20 text-white fixed top-0 left-0 p-6 text-center text-xl uppercase tracking-widest`
        }>

          <div className="nav-header flex justify-between items-center">
            <img src={logo2} alt="Bookmark logo" />

            <img 
              src={close} 
              alt="Close icon" 
              className={`${toggleNav ? "block" : "hidden"}  md:hidden w-4 h-4 cursor-pointer`}
              onClick={alterNav}
            />
          </div>

          <div className="flex flex-col py-10">

            <div className="border border-grayishblue-100"></div>

            <NavLink 
              style={({isActive}) => {
                return {
                  fontWeight: isActive && "bold",
                }
              }}
              className="hover:border hover:font-bold py-4"
              to="/"
            >
              Features
            </NavLink>

            <div className="border border-grayishblue-100"></div>

            <NavLink 
              style={({isActive}) => {
                return {
                  fontWeight: isActive && "bold",
                }
              }}
              className="hover:border hover:font-bold py-4"
              to="/pricing"
            >
              Pricing
            </NavLink>

            <div className="border border-grayishblue-100"></div>

            <NavLink 
              style={({isActive}) => {
                return {
                  fontWeight: isActive && "bold",
                }
              }}
              className="hover:border hover:font-bold py-4"
              to="/contact"
            >
              Contact
            </NavLink>

            <div className="border border-grayishblue-100"></div>

            <NavLink 
              style={({isActive}) => {
                return {
                  fontWeight: isActive && "bold",
                }
              }}
              className="hover:border hover:font-bold py-4"
              to="/login"
            >
              Login
            </NavLink>

            <div className="border border-grayishblue-100"></div>

          </div>

          <div className="flex justify-center gap-4 mt-10 items-center">
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="twitter icon" />
          </div>
        </nav>
      </header>
    </>
  )
}
