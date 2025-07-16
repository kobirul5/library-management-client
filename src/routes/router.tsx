import {
  createBrowserRouter,

} from "react-router";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            path: '/',
            element: <h1>home</h1>
        }
    ]
  },
]);

