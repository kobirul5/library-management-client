import {
  createBrowserRouter,

} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllBooks from "../components/AllBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/books',
          element: <AllBooks/>
        }
    ]
  },
]);

