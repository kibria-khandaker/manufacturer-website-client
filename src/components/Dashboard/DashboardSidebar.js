import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div className="drawer drawer-mobile">

            <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* <!-- Page content here connection with Dashboard -->  */}
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-20 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here -->  */}
                    <li className='mb-3' ><NavLink to='/dashboard ' > My Orders </NavLink></li>
                    <li className='mb-3' ><NavLink to='/dashboard/MyProfile' > My Profile </NavLink></li>
                    <li className='mb-3' ><NavLink to='/dashboard/AddReview' > Add A Review </NavLink></li>
                    <li className='mb-3' ><NavLink to='/dashboard/users' > All Users </NavLink></li>
                </ul>
            </div>
            
        </div>
    );
};

export default DashboardSidebar;