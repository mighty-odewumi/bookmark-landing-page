import { Link } from "react-router-dom";
import hero from "../assets/bookmark-assets/illustration-hero.svg";


export default function Hero() {
  return (
    <>
      <div 
        id="hero" 
        className="md:flex md:flex-row-reverse md:pl-20 md:justify-evenly md:items-center lg:pl-[140px] md:gap-10"
      >
        {/* <div id="hero-img" className="relative">
          <img 
            src={hero} 
            alt="hero icon" 
            className="md:w -96"
          />

          <div className="background w-96 h-52 -z-10 bg-softblue-100 absolute top-10 left-10 right-10 rounded-bl-full">
          </div> 
</div> */}

        <div id="hero-img" className="relative pb-4 mt-8 mb-12">
          <img 
            src={hero} 
            alt="hero icon" 
            className="md:w-screen lg:w-[110vw] xl:pr-10"
          />

          <div className="background h-56 sm:h-[60vw] -z-10 bg-softblue-100 absolute top-10 -right-8 left-20 rounded-bl-full rounded-tl-full md:h-[24vw] lg:h-[310px] xl:h-[380px]">
          </div>
        </div>

        <div id="hero-main-text" className="py-10 md:text-left">
          <h1 className="font-bold text-3xl pb-6 text-darkblue-100 md:text-4xl">
            A Simple Bookmark Manager
          </h1>

          <p className="leading-loose text-grayishblue-100 px-6 pb-12 md:px-0 ">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>

          <div className="flex justify-center items-center gap-6 md:justify-start
          ">
            <Link to="/" className="bg-softblue-100 text-slate-100 p-4 font-bold rounded-lg hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
              Get it on Chrome
            </Link>

            <Link to="/" className="bg-rose-50 text-darkblue-100 p-4 font-bold rounded-lg shadow-lg hover:border-2 hover:border-darkblue-100 hover:bg-transparent hover:text-darkblue-100 transition-all">
              Get it on Firefox
            </Link>
          </div>

        </div>
      </div>

    </>
  )
}
