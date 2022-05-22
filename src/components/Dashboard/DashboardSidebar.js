import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({children}) => {
    return (
        <div className="drawer drawer-mobile  bg-accent">
            
            <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here connection with Dashboard -->  */}
                {children}
            </div>

            <div className="drawer-side">
                <label for="dashboard-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here -->  */}
                    <li><NavLink to='/dashboard/add-admin' > Add Service </NavLink></li>
                    <li><NavLink to='/dashboard/add-product' > Add Admin </NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;