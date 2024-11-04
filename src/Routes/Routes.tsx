import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import React from "react";
import Home from "../Pages/Home/home";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
    
           
        ]
    }
])