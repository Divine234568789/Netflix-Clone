import {
  createBrowserRouter,
} from "react-router";


// import HomeScreen from "@/screens/home-screen.tsx";
// Importation can also be done like the above commented line
// Check ../tsconfig.app.json for how the paths are configured to add custom path if needed
//
import HomeScreen from "@screen/home-screen.tsx";


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
]);

export default router;
