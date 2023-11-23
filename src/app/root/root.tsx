import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
