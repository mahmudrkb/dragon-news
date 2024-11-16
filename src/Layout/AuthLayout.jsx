import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='container mx-auto p-5 my-1.5 font-poppins'>
            <h1>this is Auth layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;