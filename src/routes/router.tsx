import {
  createBrowserRouter,

} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllBooks from "../components/AllBooks";
import BorrowSamary from "../pages/BorrowSammary/BorrowSamary";

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
        },
        {
          path: 'borrow-summary',
          element: <BorrowSamary/>
        }
    ]
  },
]);

