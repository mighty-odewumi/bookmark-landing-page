import { Link } from "react-router-dom";
import hero from "../../assets/bookmark-assets/illustration-features-tab-3.svg";

export default function EasyBookmark() {
  return (
    <>
      <div className="tab-text">
        <div id="hero-img" className="relative pb-4 mt-8 mb-12">
          <img src={hero} alt="hero icon" className=""/>

          <div className="background h-52 -z-10 bg-softblue-100 absolute top-28 -left-10 right-6 rounded-br-full">
          </div>
        </div>

        <h2 className="pt-4 pb-4 text-darkblue-100 font-bold text-xl">
          Share your bookmarks
        </h2>
        <p className="leading-6 text-grayishblue-100 pb-10">
          Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
        </p>

        <Link to="/" className="bg-softblue-100 text-white py-4 px-6 rounded-lg">
          More Info
        </Link>
        
      </div>
    </>
  )
}
