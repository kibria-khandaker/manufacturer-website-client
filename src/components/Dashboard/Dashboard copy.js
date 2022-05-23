import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className=' bg-red-400 mt-36'>
            <DashboardSidebar>
                <h2> Welcome to Dashboard </h2>
                <Outlet />
            </DashboardSidebar>
        </div>
    );
};

export default Dashboard;