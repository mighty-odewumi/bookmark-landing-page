import { Link } from "react-router-dom";
import chrome from "../assets/bookmark-assets/logo-chrome.svg";
import firefox from "../assets/bookmark-assets/logo-firefox.svg";
import opera from "../assets/bookmark-assets/logo-opera.svg";
import dots from "../assets/bookmark-assets/bg-dots.svg";


export default function Download() {
  return (
    <>
      <section id="download" className="px-6">

        <h2 className="font-bold text-darkblue-100 py-4 pt-10 text-2xl">
          Download the extension
        </h2>

        <p className="text-grayishblue-100 px-4 pb-32">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>

        <div id="download-card-container" className="flex flex-col gap-16">
          <div className="download-card shadow-xl rounded-2xl flex justify-center items-center flex-col gap-2 m-auto pt-20 w-72">

            <img src={chrome} alt="Chrome browser icon" />

            <h3 className="font-bold text-darkblue-100 text-xl mt-4">
              Add to Chrome
            </h3>
            <span className="text-grayishblue-100 mb-6 block">
              Minimum Version 62
            </span>
            <img src={dots} alt="dots" className="mb-4"/>

            <Link to="/" className="bg-softblue-100 text-white rounded-md py-4 px-6 block mb-6 w-auto mx-4">
              Add & install extension
            </Link>
          </div>

          <div className="download-card shadow-xl rounded-2xl flex justify-center items-center flex-col gap-2 m-auto pt-20 w-72">
            <img src={firefox} alt="Firefox browser icon" />

            <h3 className="font-bold text-darkblue-100 text-xl mt-4">
              Add to Firefox
            </h3>

            <span className="text-grayishblue-100 mb-6 block">
              Minimum Version 55
            </span>

            <img src={dots} alt="" className="mb-4"/>

            <Link to="/" className="bg-softblue-100 text-white rounded-md py-4 px-6 block mb-6 w-auto mx-4">
              Add & install extension
            </Link>
          </div>

          <div className="download-card shadow-xl rounded-2xl flex justify-center items-center flex-col gap-2 m-auto pt-20 w-72">

            <img src={opera} alt="Opera browser icon" />

            <h3 className="font-bold text-darkblue-100 text-xl mt-4">
              Add to Opera
            </h3>
            <span className="text-grayishblue-100 mb-6 block">
              Minimum Version 46
            </span>
            <img src={dots} alt="dots" className="mb-4"/>

            <Link to="/" className="bg-softblue-100 text-white rounded-md py-4 px-6 block mb-6 w-auto mx-4">
              Add & install extension
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
