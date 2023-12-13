import { Outlet, NavLink } from "react-router-dom";


export default function PageTabWrapper() {
  return (
    <>
      <div id="tab-ctrls">
        <NavLink 
          to="/simple" 
          className={({isActive}) => isActive && "text-red-600"}
        >
          Simple Bookmark
        </NavLink>

        <NavLink 
          to="/speedy" 
          className={({isActive}) => isActive && "text-red-600"}
        >
          Speedy Bookmark
        </NavLink>

        <NavLink 
          to="/easy" 
          className={({isActive}) => isActive && "text-red-600"}
        >
          Easy Bookmark
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}