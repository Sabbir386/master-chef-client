import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

    },
]);
export default router;