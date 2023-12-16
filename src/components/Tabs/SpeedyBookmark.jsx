import { Link } from "react-router-dom";
import hero from "../../assets/bookmark-assets/illustration-features-tab-2.svg";


export default function SpeedyBookmark() {
  return (
    <>
      <div className="tab-text md:flex md:justify-between md:items-center md:gap-32 md:mr-20 lg:gap-44 lg:mr-[100px]">
        <div id="hero-img" className="relative pb-4 mt-14 mb-12">
          <img 
            src={hero} 
            alt="hero icon" 
            className="md:w-[120vw] md:ml-24 lg:ml-[120px] xl:w-[90vw]"
          />

          <div className="background h-[60vw] -z-10 bg-softblue-100 absolute top-28 -left-10 right-6 rounded-br-full rounded-tr-full sm:h-[55vw] sm:w-[400px] md:w-[300px] md:h-[150px] lg:w-[490px] lg:h-[300px] lg:left-[-40px] xl:h-[450px] xl:w-[600px]">
          </div>
        </div>

        <div className="md:text-left">
          <h2 className="pt-4 pb-4 text-darkblue-100 font-bold text-xl lg:text-2xl xl:text-3xl">
            Intelligent Search
          </h2>
          
          <p className="leading-6 text-grayishblue-100 pb-10">
            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
          </p>

          <Link to="/" className="bg-softblue-100 text-white py-4 px-6 rounded-lg hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
            More Info
          </Link>
        </div>
        
      </div>
    </>
  )
}
