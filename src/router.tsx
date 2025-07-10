import { createBrowserRouter } from "react-router";

// import HomeScreen from "@/screens/home-screen.tsx";
// Importation can also be done like the above commented line
// Check ../tsconfig.app.json for how the paths are configured to add custom path if needed
//
// import HomeScreen from "@screen/home-screen.tsx";
import LoginPage from "@/Components/Login-Page.tsx";
import SignupPage from "./Components/Signup";
import Landing from "./Components/Landing";
import Viewer from "./Components/Viewer";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";
import CategoryPage from "./Components/CategoryPage";
import SearchResults from "./Components/SearchResult";

/**
 * Route should be declared in this file
 * For More information check `https://reactrouter.com/start/data/routing`
 *
 */

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   Component: HomeScreen,
  // },
  {
    path: "/Netflix-Clone/",
    Component: Landing,
  },

  {
    path: "/Netflix-Clone/viewer",
    Component: Viewer,
  },

  {
    path: "/Netflix-Clone/Homepage",
    Component: Homepage,
  },

  {
    path: "/Netflix-Clone/movie/:movieId",
    Component: Details,
  },
  {
    path: "/Netflix-Clone/Signup-page",
    Component: SignupPage,
  },
  {
    path: "/Netflix-Clone/ogin-page",
    Component: LoginPage,
  },
  {
    path: "/Netflix-Clone/category/:categoryName",
    Component: CategoryPage,
  },
  {
    path: "/Netflix-Clone/search/:query",
    Component: SearchResults,
  },
  {
    path: "/Netflix-Clone/search/:query",
    Component: SearchResults,
  },
  {
    path: "/Netflix-Clone/details/:id",
    Component: Details,
  },
]);

export default router;
