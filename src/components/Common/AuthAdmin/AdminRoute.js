import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from './../hooks/useAdmin';

const AdminRoute = () => {
    // const location = useLocation()

    // const admin = false;
    const [admin] = useAdmin()

    if (!admin) {
        // return <Navigate to='/' state={{ from: location }} replace />
        return <Navigate to='/'/>
    };
    // return children;
    return <Outlet />;
};

export default AdminRoute;