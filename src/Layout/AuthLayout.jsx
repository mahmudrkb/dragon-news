import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const AuthLayout = () => {
    return (
        <div className=' bg-[#f3f3f3]'>
           <div className='container mx-auto p-5 my-1.5 font-poppins'>
           <Navbar ></Navbar>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default AuthLayout;