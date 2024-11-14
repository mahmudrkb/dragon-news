import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>

    },
    {
        path:'/news',
        element:<h1>news</h1>

    },
    {
        path:'/auth',
        element:<h1>Login </h1>

    },
    {
        path:'*',
        element: <h1>Error</h1>

    }
])
export default router;