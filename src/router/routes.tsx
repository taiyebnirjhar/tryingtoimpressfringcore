import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div> I AM HERE</div>,
      },
    ],
  },
]);

export default router;
