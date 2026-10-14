import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

import Help from "../Pages/Help/Help";
import About from "../Pages/About/About";
import Service from "../Pages/Services/Service";
import Wordpress from "../Components/Wordpress/Wordpress";
import Elementor from "../Components/Elementor/Elementor";
import Products from './../Pages/Products/Products';
import Blog from "../Pages/Blog/Blog";

const Product = fetch('https://fakestoreapi.com/products')
.then(res => res.json())

const Router = createBrowserRouter([
    {path: '/',
        Component:Root,
        children:[
            {index : true,
                Component:Home
            },
            {
                path: "about",
                Component :About
            },
            {
                path: "services",
                Component :Service,
                children:[
                    {
                        index: true,
                        Component:Wordpress
                    },
                    {
                        path:"elementor",
                        Component:Elementor
                    }
                ]
            },
            {
                path: "contact",
                Component :Contact
            },
            {
                path:'products',
                loader: () => fetch('https://fakestoreapi.com/products'),
                Component:Products
            },
            {
                path: "blog",
                Component:Blog
            }
        ]
    }
])

export default Router