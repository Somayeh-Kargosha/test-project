import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Products from "./features/pages/Products";

import Home from "./features/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
