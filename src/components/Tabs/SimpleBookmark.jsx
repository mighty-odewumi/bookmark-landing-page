import { Link } from "react-router-dom";
import hero from "../../assets/bookmark-assets/illustration-features-tab-1.svg";


export default function SimpleBookmark() {
  return (
    <>
      <div className="tab-text">
        <div id="hero-img" className="relative pb-4 mt-8 mb-12">
          <img src={hero} alt="hero icon" className=""/>

          <div className="background h-52 -z-10 bg-softblue-100 absolute top-10 -left-8 right-2 rounded-br-full">
          </div>
        </div>

        <h2 className="pt-8 pb-4 text-darkblue-100 font-bold text-xl">
          Bookmark in one click
        </h2>
        
        <p className="leading-6 text-grayishblue-100 pb-10">
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
        </p>

        <Link to="/" className="bg-softblue-100 text-white py-4 px-6 rounded-lg">
          More Info
        </Link>
        
      </div>
    </>
  )
}
