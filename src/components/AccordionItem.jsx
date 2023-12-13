import { useState } from "react";
import arrowUp from "../assets/bookmark-assets/icon-arrow.svg";

// eslint-disable-next-line react/prop-types
export default function AccordionItem({question, response}) {

  const [isActive, setIsActive] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setIsActive(prevValue => !prevValue);
    console.log("Clicked!");
  }

  return (
    <>
      <div 
        id="faq" 
        className="border-t border-b py-4" 
        onClick={handleToggle}
      >
        <div id="faq-header" className="flex justify-between items-center cursor-pointer font-semibold">
          <span>{question}</span>
          <img 
            src={arrowUp}
            alt="up arrow" 
            className={`${isActive ? "rotate-180" : ""}`}
            
          />
        </div>

        <div className={`faq-response 
          ${isActive ? "block text-left py-8 text-darkblue-100" : "hidden"} `}
        >
          {response}
        </div>

      </div>
    </>
  )
}
