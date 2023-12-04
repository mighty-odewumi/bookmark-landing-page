// import rental from "./assets/juice-rental.png";
import laroi from "./assets/laroi-juice.png";
import bathroom from "./assets/bathroom.svg";
import furniture from "./assets/furniture.svg";
import house from "./assets/house3-edit1.jpg";
import favorite from "./assets/favorite-icon.svg";

export default function App() {
  return (
    <>
      {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="vite.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <h1 className="text-3xl underline font-bold">
        Hello world
      </h1>

      <button className="hover:bg-green-700 md:hover:bg-fuchsia-600 md:hover:text-white py-2 px-4
      bg-blue-600 rounded-full text-white
        ">
        Save changes
      </button> 
      */}


      <div 
        id="product-card" 
        className="relative w-80 mt-10 mb-10 m-auto font-sans shadow-lg shadow-blue-500/40 hover:shadow-zinc-500/70 hover:cursor-pointer"
      >
        <img
          src={house} 
          alt="image" 
          className="object-fill rounded-t-md h-full w-96 "
        />

        <img src={favorite} alt="favorite icon" className="absolute top-4 right-4"/>

        <div className="pt-4">
          <span 
            className="font-bold uppercase text-stone-600 text-sm px-4"
          >
            Detached House • 3,246 SQFT
          </span>

          <h1 className="text-3xl px-4">$1,250,000</h1>

          <span className="mt-1 block px-4 text-stone-700">
            742 Evergreen Terrace
          </span>

          <hr className="mt-4 mb-2"/>

          <div className="px-4 flex justify-between mb-2">
            <div className="flex items-center">
              <img 
                src={furniture} 
                alt="bedroom icon" 
                className="w-8 mr-2"              
              />
              <div className="font-bold mr-1">
                3
              </div> 
                <span>
                  Bedrooms
                </span>
            </div>

            <div className="flex items-center">
              <img 
                src={bathroom} 
                alt="bathroom icon" 
                className="w-6 mr-2"
              />
              <div className="font-bold mr-1">
                2
              </div>
              <span>
                Bathrooms
              </span>
            </div>
          </div>

          <div className="px-4 py-4 flex items-center bg-gray-200">
            <img 
              src={laroi} 
              alt="avatar" 
              className="rounded-full w-10 h-10 mr-2"
            />

            <div>
              <p className="font-bold">Tiffany Heffner</p>
              (555) 555-4321
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-md rounded-b-md text-center py-4 mt-0"
        >
          <a href="#" className="font-bold text-white uppercase">
            Schedule Showing &gt;
          </a>
        </div>
      </div>
    </>
  )
}
