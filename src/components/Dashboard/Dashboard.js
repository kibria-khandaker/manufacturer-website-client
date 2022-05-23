import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className=' bg-red-400 bg-opacity-10 pt-10'>
            <DashboardSidebar>
                <h2 className='px-5 pt-20 text-2xl text-center pb-5 textClr'>
                    Welcome to Dashboard
                </h2>
                <div className='px-5'>
                    <Outlet />
                </div>
            </DashboardSidebar>
        </div>
    );
};

export default Dashboard;