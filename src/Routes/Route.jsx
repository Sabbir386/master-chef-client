import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavigationBar></NavigationBar>,
    },
]);
export default router;