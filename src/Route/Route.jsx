import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";


import About from "../Pages/About/About";
import Service from "../Pages/Services/Service";
import Wordpress from "../Components/Wordpress/Wordpress";
import Elementor from "../Components/Elementor/Elementor";
import Products from './../Pages/Products/Products';
import Blog from "../Pages/Blog/Blog";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import axios from "axios";
import EveryPost from "../Components/EveryPost/EveryPost";




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
                path:'products/:id',
                loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`),
                Component:ProductDetails,
            },
            
            {
                path: "blog",
                loader: () => axios('https://dummyjson.com/posts'),
                Component:Blog
            },
            {
              path: 'blog/:id',
            //   loader: ({params}) => fetch(`https://dummyjson.com/posts/${params.id}`),
            loader: ({params}) => axios(`https://dummyjson.com/posts/${params.id}`),
              Component:EveryPost,
            }
        ]
    }
])

export default Router