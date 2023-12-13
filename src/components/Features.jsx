import { NavLink, Outlet } from "react-router-dom";

export default function Features() {
  return (
    <>
      <section id="features" className="px-6 py-20 text-darkblue-100">
        <h2 className="text-darkblue-100 font-bold text-2xl">
          Features
        </h2>
        <p className="pt-4 pb-6 text-grayishblue-100">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>

        <div id="tab-ctrls" className="flex flex-col">
          <NavLink 
            to="/" 
            style={({isActive}) => {
              return {
                color: isActive && "black",
              }
            }}
            className="text-grayishblue-100 font-bold border-t border-b p-4"
          >
            Simple Bookmark
          </NavLink>

          <NavLink 
            to="/speedy" style={({isActive}) => {
              return {
                color: isActive && "black",
                //borderBottom: isActive && "4px solid red",
              }
            }}
            className="text-grayishblue-100 font-bold border-b p-4"
          >
            Speedy Searching
          </NavLink>

          <NavLink 
            to="/easy" style={({isActive}) => {
              return {
                color: isActive && "black",
              }
            }}
            className="text-grayishblue-100 font-bold border-b p-4"
          >
            Easy Sharing
          </NavLink>
        </div>

        <Outlet />
      </section>
    </>
  )
}
