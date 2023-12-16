import logo2 from "./assets/bookmark-assets/logo-bookmark-2.svg";
import facebook from "./assets/bookmark-assets/icon-facebook.svg";
import twitter from "./assets/bookmark-assets/icon-twitter.svg";
import { Link } from "react-router-dom";
import AccordionItem from "./components/AccordionItem";
import Form from "./components/Form";
import { accordionList } from "./components/AccordionList";
import Header from "./components/Header";
import Download from "./components/Download";
import Features from "./components/Features";
import Hero from "./components/Hero";

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

      <main className="text-center overflow-hidden">
        <Hero />

        <Features />

        <Download />

        <section id="faqs" className="mt-32 px-6 md:px-20 lg:px-[180px] xl:w-3/5 xl:m-auto xl:mt-40">
          <h2 className="text-darkblue-100 font-bold text-2xl pb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-grayishblue-100 mb-16 md:w-[400px] md:m-auto md:mb-10">
            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
          </p>

          {accordionMapped}

          <Link to="/" className="bg-softblue-100 px-6 py-4 text-white block rounded-md text-center w-32 m-auto mt-8 mb-20 hover:border-2 hover:border-softblue-100 hover:bg-transparent hover:text-softblue-100 transition-all">
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

        <footer className="bg-darkblue-100 text-white flex flex-col justify-center items-center pt-10 md:justify-between md:flex-row md:px-20 lg:px-[140px]">
          <div className="logo-link mb-12 md:flex md:flex-row md:justify-between md:items-center md:gap-10 md:mb-10">
            <img 
              src={logo2}
              alt="Bookmark logo" 
              className=""
            />
            <div id="foot-link" className="flex flex-col gap-4 uppercase mt-8 md:flex-row md:items-center md:justify-center md:mt-0">
              <Link to="/" className="hover:text-softred-100 transition-all">Pricing</Link>
              <Link to="/" className="hover:text-softred-100 transition-all">Features</Link>
              <Link to="/" className="hover:text-softred-100 transition-all">Contact</Link>
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
      </main>
    </>
  )
}
