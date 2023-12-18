import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import error from "../assets/error-assets/error3.png";

export default function Error() {
  return (
    <>
      <Header />
    
      <div className="text-center pb-10 flex flex-col justify-center items-center gap-2">

        <h1 className="text-3xl mb-2 mx-4">
          Error 404 - Page not found
        </h1> 

        <img 
          src={error} 
          alt="Error Image" 
          className="text-center "
        />

        <p className="px-4">
          The page you&apos;re looking for can&apos;t be found. Please return <Link to="/" className="underline">Home</Link>.
        </p>
      </div>

      <Footer />
    </>
  )
}
