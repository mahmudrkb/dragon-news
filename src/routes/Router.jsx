import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../page/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";


const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"} ></Navigate>,
            },

        
            {
                path:"/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader:({params})=>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`

                    )
                    
                
            },
        ]

    },
    {
        path:'/news',
        element:<h1>news</h1>

    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element: <h1>login</h1>

            },
            {
                path:"/auth/register",
                element: <h1>register</h1>
            },
        ]

    },
    {
        path:'*',
        element: <h1>Error</h1>

    }
])
export default router;