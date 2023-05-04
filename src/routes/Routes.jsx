import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Home/Blog";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import Chefs from "../pages/Shared/Chefs";
import Foods from "../pages/Shared/Foods";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
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
      }
    ]
  }
])

export default router;