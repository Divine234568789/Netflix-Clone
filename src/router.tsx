import {
  createBrowserRouter,
} from "react-router";


// import HomeScreen from "@/screens/home-screen.tsx";
// Importation can also be done like the above commented line
// Check ../tsconfig.app.json for how the paths are configured to add custom path if needed
//
import HomeScreen from "@screen/home-screen.tsx";
import landing from "./Components/Landing";
import Viewer from "./Components/Viewer";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";




/**
 * Route should be declared in this file
 * For More information check `https://reactrouter.com/start/data/routing`
 *
 */

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeScreen,
  },
  {
    path:"/landing-page",
    Component:landing,
  },

  {
    path:"/viewer",
    Component:Viewer,
  },
  
  {
     path:"/Homepage",
     Component:Homepage
  },

  {
    path:"/Details",
    Component:Details
  }
]);

export default router;
