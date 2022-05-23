import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import logoImg from '../../../img/logo192.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const [dark, setDark] = useState(false);

    const [admin] = useAdmin()
    const { pathname } = useLocation();
    
    // console.log(pathname);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }


    return (
        <div className="drawer  drawer-end" data-theme={dark ? "dark" : "light"}>
            <input id="my-menu-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-100 z-50 fixed top-0 lg:px-20">
                    {pathname.includes("dashboard") &&
                        <label htmlFor="dashboard-drawer-2" tabIndex="0" className="btn btn-ghost btn-circle  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    }
                    {/* branding or Logo  */}
                    <div className="flex-1 px-2 mx-2 text-2xl"> <img className=' w-20' src={logoImg} alt="" /> </div>

                    {/* Hamburg Icon for main menu responsive */}
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-menu-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    {/* large Device menu List  */}
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-1">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to='/home' className='rounded-lg'> Home </NavLink></li>

                            {user && <li><NavLink to='/dashboard' className='rounded-lg'> Dashboard </NavLink></li>}

                            <li><NavLink to='/about' className='rounded-lg'> About </NavLink></li>
                            <li><NavLink to='/blogs' className='rounded-lg'> Blogs </NavLink></li>
                            {
                                user ?
                                    <>
                                        <li> <NavLink onClick={handleSignOut} to="/login" className='rounded-lg'>LogOut</NavLink></li>

                                    </>
                                    :
                                    <>
                                        <li><NavLink to='/login' className='rounded-lg'> Login </NavLink></li>
                                        <li><NavLink to='/signup' className='rounded-lg'> SignUp </NavLink></li>

                                    </>
                            }

                            {/* Dropdown btn  */}
                            <li className="dropdown dropdown-hover  dropdown-end">
                                <label tabIndex="0" className="btn btn-primary btn-outline rounded-lg uppercase">Book Now</label>
                                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><NavLink to='/contact' className='rounded-lg'> Contact </NavLink></li>
                                    <li><NavLink to='/login' className='rounded-lg'> Login </NavLink></li>
                                </ul>
                            </li>
                            {/* dark/light theme btn icon  */}
                            <label className="swap swap-rotate">
                                {/* <input onClick={()=>setDark(!dark)} type="checkbox" /> */}
                                <input onClick={() => setDark(!dark)} type="checkbox" />
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            {/* Responsive Menu area  */}
            <div className="drawer-side">
                <label htmlFor="my-menu-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/home' className='rounded-lg'> Home </NavLink></li>
                    <li><NavLink to='/about' className='rounded-lg'> About </NavLink></li>
                    <li><NavLink to='/contact' className='rounded-lg'> Contact </NavLink></li>
                    <li><NavLink to='/services' className='rounded-lg'> Services </NavLink></li>
                    <li><NavLink to='/login' className='rounded-lg'> Login </NavLink></li>

                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Book Now
                        </div>
                        <div className="collapse-content">
                            <li><NavLink to='/services' className='rounded-lg'> Quick book </NavLink></li>
                            <li><NavLink to='/login' className='rounded-lg'> Pre Book </NavLink></li>
                        </div>
                    </div>

                </ul>
            </div>

        </div>
    );
};

export default Header;