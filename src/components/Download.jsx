import { Link } from "react-router-dom";
import chrome from "../assets/bookmark-assets/logo-chrome.svg";
import firefox from "../assets/bookmark-assets/logo-firefox.svg";
import opera from "../assets/bookmark-assets/logo-opera.svg";
import dots from "../assets/bookmark-assets/bg-dots.svg";


export default function Download() {
  return (
    <>
      <section id="download" className="px-6 xl:px-[140px]">

        <h2 className="font-bold text-darkblue-100 py-4 pt-10 text-2xl">
          Download the extension
        </h2>

        <p className="text-grayishblue-100 px-4 pb-32 md:pb-4 md:w-[500px] md:m-auto">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>

        <div id="download-card-container" className="flex flex-col gap-16 lg:gap-4 xl:grid xl:grid-flow-col xl:auto-cols-auto xl:gap-2 ">
          <div className="download-card shadow-xl rounded-2xl flex justify-center items-center flex-col gap-2 m-auto pt-20 w-72 cursor-pointer hover:shadow-2xl transition-all lg:mt-10">

            <img src={chrome} alt="Chrome browser icon" />

            <h3 className="font-bold text-darkblue-100 text-xl mt-4">
              Add to Chrome
            </h3>
            <span className="text-grayishblue-100 mb-6 block">
              Minimum Version 62
            </span>
            <img src={dots} alt="dots" className="mb-4"/>

            <Link to="/" className="bg-softblue-100 text-white rounded-md py-4 px-6 block mb-6 w-auto mx-4 hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
              Add & install extension
            </Link>
          </div>

          <div className="download-card shadow-xl rounded-2xl flex justify-center items-center flex-col gap-2 m-auto pt-20 w-72 cursor-pointer hover:shadow-2xl transition-all xl:mt-32">
            <img src={firefox} alt="Firefox browser icon" />

            <h3 className="font-bold text-darkblue-100 text-xl mt-4">
              Add to Firefox
            </h3>

            <span className="text-grayishblue-100 mb-6 block">
              Minimum Version 55
            </span>

            <img src={dots} alt="" className="mb-4"/>

            <Link to="/" className="bg-softblue-100 text-white rounded-md py-4 px-6 block mb-6 w-auto mx-4 hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
              Add & install extension
            </Link>
          </div>

          <div className="download-card shadow-xl rounded-2xl flex justify-center items-center flex-col gap-2 m-auto pt-20 w-72 cursor-pointer hover:shadow-2xl transition-all xl:mt-40">

            <img src={opera} alt="Opera browser icon" />

            <h3 className="font-bold text-darkblue-100 text-xl mt-4">
              Add to Opera
            </h3>
            <span className="text-grayishblue-100 mb-6 block">
              Minimum Version 46
            </span>
            <img src={dots} alt="dots" className="mb-4"/>

            <Link to="/" className="bg-softblue-100 text-white rounded-md py-4 px-6 block mb-6 w-auto mx-4 hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
              Add & install extension
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
