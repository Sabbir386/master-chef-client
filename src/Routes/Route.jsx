import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]

    },
]);
export default router;