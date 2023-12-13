import { Link } from "react-router-dom";
import hero from "../../assets/bookmark-assets/illustration-features-tab-2.svg";


export default function SpeedyBookmark() {
  return (
    <>
      <div className="tab-text">
        <div id="hero-img" className="relative pb-4 mt-14 mb-12">
          <img src={hero} alt="hero icon" className=""/>

          <div className="background h-52 -z-10 bg-softblue-100 absolute top-28 -left-10 right-6 rounded-br-full">
          </div>
        </div>

        <h2 className="pt-4 pb-4 text-darkblue-100 font-bold text-xl">
          Intelligent Search
        </h2>
        
        <p className="leading-6 text-grayishblue-100 pb-10">
          Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
        </p>

        <Link to="/" className="bg-softblue-100 text-white py-4 px-6 rounded-lg">
          More Info
        </Link>
        
      </div>
    </>
  )
}
