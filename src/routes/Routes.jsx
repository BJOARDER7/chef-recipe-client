import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Home/Blog";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import Chefs from "../pages/Shared/Chefs";
import Foods from "../pages/Shared/Foods";
import ErrorPage from "../pages/Home/ErrorPage";
import NotFound from "../pages/Home/NotFound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/chefs',
        element: <Chefs></Chefs>
      },
      {
        path: '/foods',
        element: <Foods></Foods>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  }
])

export default router;