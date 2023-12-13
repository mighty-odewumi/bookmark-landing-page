import logo2 from "./assets/bookmark-assets/logo-bookmark-2.svg";
import hero from "./assets/bookmark-assets/illustration-hero.svg";
import facebook from "./assets/bookmark-assets/icon-facebook.svg";
import twitter from "./assets/bookmark-assets/icon-twitter.svg";
import { Link } from "react-router-dom";
import AccordionItem from "./components/AccordionItem";
import Form from "./components/Form";
import { accordionList } from "./components/AccordionList";
import Header from "./components/Header";
import Download from "./components/Download";
import Features from "./components/Features";


export default function Page() {

  const accordionMapped = accordionList.map((acc) => {
    return (
      <AccordionItem 
        key={acc.id}
        question={acc.question}
        response={acc.response}
      />
    );
  });

  return (
    <>
      <Header />

      <main className="text-center">
        <div id="hero" className="">
          <div id="hero-img" className="relative">
            <img src={hero} alt="hero icon" className=""/>

            <div className="background w-96 h-52 -z-10 bg-softblue-100 absolute top-10 left-10 right-10 rounded-bl-full">
            </div> 
          </div>

          <div id="hero-main-text" className="py-10">
            <h1 className="font-bold text-3xl pb-6 text-darkblue-100">
              A Simple Bookmark Manager
            </h1>

            <p className="leading-loose text-grayishblue-100 px-6 pb-12">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>

            <div className="flex justify-center items-center gap-6">
              <Link to="/" className="bg-softblue-100 text-slate-100 p-4 font-bold rounded-lg">
                Get it on Chrome
              </Link>

              <Link to="/" className="bg-rose-50 text-darkblue-100 p-4 font-bold rounded-lg shadow-lg">
                Get it on Firefox
              </Link>
            </div>

          </div>
        </div>

        <Features />

        <Download />

        <section id="faqs" className="mt-32 px-6">
          <h2 className="text-darkblue-100 font-bold text-2xl pb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-grayishblue-100 mb-16">
            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
          </p>

          {accordionMapped}

          <Link to="/" className="bg-softblue-100 px-6 py-4 text-white block rounded-md text-center w-32 m-auto mt-8 mb-20">
            More Info
          </Link>
        </section>

        <section id="banner" className="mx-0 bg-softblue-100 text-white pt-10">
          <h3 className="uppercase leading-loose ">
            35,000+ already joined
          </h3>
          <h4 className="font-semibold text-2xl mb-6">Stay up-to-date with what we’re doing</h4>

          <Form />
        </section>

        <footer className="bg-darkblue-100 text-white flex flex-col justify-center items-center pt-10 ">
          <div className="logo-link mb-12 ">
            <img 
              src={logo2}
              alt="Bookmark logo" 
            />
            <div id="foot-link" className="flex flex-col gap-4 uppercase mt-8">
              <Link to="/">Features</Link>
              <Link to="/">Pricing</Link>
              <Link to="/">Contact</Link>
            </div>
            
          </div>

          <div className="flex justify-center items-center gap-12 mb-10" id="socials">
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="twitter icon" />
          </div>
        </footer>
      </main>
    </>
  )
}
