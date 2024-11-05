import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import React from "react";
import Home from "../Pages/Home/home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import ShopDetails from "../Pages/ShopDetsils.tsx/ShopDetails";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/shop-details',
                element: <ShopDetails/>
            },
    
           
        ]
    }
])