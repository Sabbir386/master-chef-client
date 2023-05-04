import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../components/Blog/Blog";
import ChefRecipes from "../Layouts/Chef/ChefRecipes";
import ProtectedRoute from "./ProtectedRoute";

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
            {
                path: '/recepies/:id',
                element: <ProtectedRoute><ChefRecipes></ChefRecipes></ProtectedRoute>,
                loader: ({ params }) => fetch(`https://master-chef-server-site-sabbir386.vercel.app/categories/${params.id}`)
            }
        ]

    },
]);
export default router;