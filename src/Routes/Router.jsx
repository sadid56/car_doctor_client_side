import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import CheckOut from "../Pages/checkOut/CheckOut";
import UserBookings from "../Pages/userBookings/UserBookings";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element:<Services></Services>,
                
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/userBookings',
                element: <PrivateRoute><UserBookings></UserBookings></PrivateRoute>
            }
        ]
    }
])
 
export default Router;