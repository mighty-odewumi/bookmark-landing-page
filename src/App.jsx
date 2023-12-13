import Page from "./Page";
// import PageTabWrapper from "./PageTabWrapper";
import SimpleBookmark from "./components/Tabs/SimpleBookmark";
import SpeedyBookmark from "./components/Tabs/SpeedyBookmark";
import EasyBookmark from "./components/Tabs/EasyBookmark";
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
} from "react-router-dom";
import { action as formAction } from "./components/Form";

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route 
      path="/" 
      element={<Page />} 
      action={formAction}
    >
      <Route index element={<SimpleBookmark />} />
      <Route path="/speedy" element={<SpeedyBookmark />} />
      <Route path="/easy" element={<EasyBookmark />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
      {/* 
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Page />} 
            action={formAction}
          >
            <Route index element={<SimpleBookmark />} />
            <Route path="/speedy" element={<SpeedyBookmark />} />
            <Route path="/easy" element={<EasyBookmark />} />
          </Route>
        </Routes>
      </Router> */}
    </>
  )
}
