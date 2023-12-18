import { Link } from "react-router-dom";
import logo2 from "../assets/bookmark-assets/logo-bookmark-2.svg";
import facebook from "../assets/bookmark-assets/icon-facebook.svg";
import twitter from "../assets/bookmark-assets/icon-twitter.svg";


export default function Footer() {
  return (
    <>
      <footer className="bg-darkblue-100 text-white flex flex-col justify-center items-center pt-10 md:justify-between md:flex-row md:px-20 lg:px-[140px]">
        <div className="logo-link mb-12 md:flex md:flex-row md:justify-between md:items-center md:gap-10 md:mb-10">
          <Link to="/">
            <img src={logo2} alt="Bookmark logo" className="" />
          </Link>
          
          <div id="foot-link" className="flex flex-col gap-4 uppercase items-center mt-8 md:flex-row md:items-center md:justify-center md:mt-0">
            <Link to="/pricing" className="hover:text-softred-100 transition-all">Pricing</Link>
            <Link to="/features" className="hover:text-softred-100 transition-all">Features</Link>
            <Link to="/contact" className="hover:text-softred-100 transition-all">Contact</Link>
          </div>
          
        </div>

        <div className="flex justify-center items-center gap-12 mb-10" id="socials">
          <img 
            src={facebook} 
            alt="facebook icon" 
            className="cursor-pointer"
          />
          <img 
            src={twitter} 
            alt="twitter icon" 
            className="cursor-pointer"
          />
        </div>
      </footer>
    </>
  )
}
