import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {

    const location = useLocation()
    const user = false;  // false ,  true

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    };
    // return children;
    return <Outlet />;

};

export default RequireAuth;