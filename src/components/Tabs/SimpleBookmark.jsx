import { Link } from "react-router-dom";
import hero from "../../assets/bookmark-assets/illustration-features-tab-1.svg";


export default function SimpleBookmark() {
  return (
    <>
      <div className="tab-text md:flex md:justify-between md:items-center md:gap-36 md:mr-20 lg:gap-48 lg:mr-[100px]">
        <div id="hero-img" className="relative pb-4 mt-8 mb-12">
          <img 
            src={hero} 
            alt="hero icon" 
            className="md:w-[140vw] md:ml-16 lg:ml-[120px] xl:w-[100vw]"
          />

          <div className="background h-[60vw] -z-10 bg-softblue-100 absolute top-10 -left-8 right-2 rounded-br-full rounded-tr-full sm:h-[55vw] sm:w-[400px] md:w-[280px] md:h-[180px] lg:w-[400px] lg:h-[280px] lg:left-[-40px] xl:h-[400px] xl:w-[600px]">
          </div>
        </div>

        <div className="md:text-left">
          <h2 className="pt-8 pb-4 text-darkblue-100 font-bold text-xl lg:text-2xl xl:text-3xl">
            Bookmark in one click
          </h2>
          
          <p className="leading-6 text-grayishblue-100 pb-10 ">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
          </p>

          <Link to="/" className="bg-softblue-100 text-white py-4 px-6 rounded-lg hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
            More Info
          </Link>
        </div>        

      </div>
    </>
  )
}
