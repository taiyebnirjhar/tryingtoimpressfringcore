import ErrorPage from "@/pages/Error/ErrorPage";
import QuizForJs from "@/pages/QuizForJs/QuizForJs";
import QuizForReact from "@/pages/QuizForReact/QuizForReact";
import QuizForTS from "@/pages/QuizForTS/QuizForTS";
import QuizForRedux from "@/pages/QuizRedux/QuizForRedux";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <ErrorPage />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <div> I AM HERE</div>,
      },
      {
        path: "/dive-into-javascript",
        element: <QuizForJs />,
      },
      {
        path: "/typescript-generics",
        element: <QuizForTS />,
      },
      {
        path: "/realm-of-react",
        element: <QuizForReact />,
      },
      {
        path: "/reform-with-redux",
        element: <QuizForRedux />,
      },
    ],
  },
]);

export default router;
//
