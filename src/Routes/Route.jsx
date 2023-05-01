import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]

    },
]);
export default router;