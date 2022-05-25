import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">

            <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* <!-- Page content here connection with Dashboard -->  */}
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-32 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here -->  */}
                    {/* <li className='mt-3' ><NavLink to='/dashboard/MyProfile' > My Profile </NavLink></li> */}
                    <li className='mt-3' ><NavLink to='/dashboard ' >  My Profile </NavLink></li>

                    {admin ? <>
                        {/* <li className='mt-3' ><NavLink to='/dashboard/users' > All Users </NavLink></li> */}
                        <li className='mt-3' ><NavLink to='/dashboard/ManageAllOrders' >  Manage All Orders </NavLink></li>
                        <li className='mt-3' ><NavLink to='/dashboard/AddProduct' > Add Product </NavLink></li>

                        <li className='mt-3' ><NavLink to='/dashboard/users' >  Make Admin </NavLink></li>
                        <li className='mt-3' ><NavLink to='/dashboard/ManageProducts' >  Manage Products </NavLink></li>
                    </> :
                        <>
                            <li className='mt-3' ><NavLink to='/dashboard/UserOrder ' > My Orders </NavLink></li>
                            <li className='mt-3' ><NavLink to='/dashboard/AddReview' > Add A Review </NavLink></li>
                        </>


                    }


                </ul>
            </div>

        </div>
    );
};

export default DashboardSidebar;