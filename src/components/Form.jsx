import { Form } from "react-router-dom";
import error from "../assets/bookmark-assets/icon-error.svg";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  console.log("Form submitted!");
  console.log(request);
  const formData = await request.formData();
  const email = formData.get("email");
  console.log(email);

  if (email.includes("@")) {
    console.log("Email is valid!");
    alert("Thanks for subscribing!");
  }
  else {
    console.log("Invalid email!!!");
    alert("Please check that email is of valid format!");
  }

  return null;
} 

export default function FormComponent() {
  return (
    <>
      <Form method="post" className="flex flex-col justify-center items-center md:flex-row gap-4">
        <div id="input-wrapper" className="flex relative justify-between items-center">
          <input 
            className="p-2 rounded-md outline-none text-black w-56 md:p-3"
            type="email" 
            name="email"
            placeholder="Enter your email address here"           
          />

          {/* <img src={error} alt="error icon" className="absolute top right-0 px-2"/> */}

          {/* <span>Whoops! That should be an email</span> */}
        </div>
        
        <button className="bg-softred-100 rounded-md py-2 px-6 mt-8 mb-8 w-46 md:font-bold md:bg-softred-100 md:text-white md:px-6 md:rounded-md md:hover:border-2 md:hover:border-softred-100 md:hover:bg-white md:hover:text-softred-100 md:transition-all">
          Contact us
        </button>
      </Form>
    </>
  )
}
