import { RouterProvider } from 'react-router';
import router from './router';


/**
  * Providers should be placed here to ensure consistency
  * Unnecessary modificaton should not be made
  * Only react context providers can be placed here
  */

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
