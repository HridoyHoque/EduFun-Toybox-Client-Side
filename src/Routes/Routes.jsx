import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToys from "../Pages/MyToys/UpdateMyToys";
import SingleToys from "../Pages/AllToys/SingleToys";
import SingleToyCategoryCart from "../Pages/Home/ToyCategory/SingleToyCategoryCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/singleToyCategory/:id',
                element: <PrivateRoute><SingleToyCategoryCart></SingleToyCategoryCart></PrivateRoute>,
                loader: ({params}) => fetch(`https://edu-fun-toybox-server.vercel.app/singleToyCategory/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addToys',
                element: <AddToys></AddToys>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                // loader: () => fetch("https://edu-fun-toybox-server.vercel.app/toys")
            },
            {
                path: '/allToys/:id',
                element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
                loader: ({ params }) => fetch(`https://edu-fun-toybox-server.vercel.app/toys/${params.id}`)
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/myToys/:id',
                element: <UpdateMyToys></UpdateMyToys>,
                loader: ({ params }) => fetch(`https://edu-fun-toybox-server.vercel.app/toys/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;