import { RouterProvider } from "react-router";
import router from "./router";
import { Toaster } from "react-hot-toast";

/**
 * Providers should be placed here to ensure consistency
 * Unnecessary modificaton should not be made
 * Only react context providers can be placed here
 */

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
