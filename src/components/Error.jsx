import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Error() {
  return (
    <>
      <Header />
    
      <div className="text-center pb-20">

        <h1 className="text-2xl mb-2">
          Error 404 - Page not found
        </h1>

        <p className="">
          The page you&apos;re looking for can&apos;t be found. Please return <Link to="/" className="underline">Home</Link>.
        </p>
      </div>

      <Footer />
    </>
  )
}
