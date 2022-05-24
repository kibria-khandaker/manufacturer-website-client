import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const MyProfileDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate =useNavigate()

    const { data: profiles, isLoading, refetch } = useQuery('UserProfile', () => fetch(`http://localhost:5000/profile/`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // const handelUpdate =()=>{
    //     navigate('/dashboard/MyProfile/:id')
    // }

    return (
        <div>
            {
                profiles.map(profile => (<div key={profile._id}>
                    {
                        user?.email === profile.email && <div>

                            <div className='py-10 w-16'>
                                {
                                    user.photoURL
                                        ?
                                        <img src={user?.photoURL} class="max-w-sm rounded-lg shadow-2xl" alt='profileImage' />
                                        : <img src={profile.img} class="max-w-sm rounded-lg shadow-2xl" alt='profileImage' />
                                }
                            </div>

                            <p> <b>My Education:</b> {profile.education}</p>

                            <p> <b>Phone:</b> {profile.phone}</p>

                            <p> <b>My City:</b> {profile.locationCity}</p>
                            <p> <b>My District :</b> {profile.locationDistrict}</p>
                            <p> <b>MY Country:</b> {profile.country}</p>

                            <p> <b>My Linked In Profile:</b> {profile.linkedinLink}</p>

                            <p> <b>About Me:</b> {profile.shortDesc}</p>


                            {/* xxxxxxxxxxxxxx Update information xxxxxxxxxxxxxx  onClick={() => navigate(`/purchase/${tool._id}`)}  */}
                            <NavLink to='/dashboard/updateProfile' > Update Profile </NavLink>
                            {/* <button  onClick={() => navigate(`/dashboard/MyProfile/${profile.email}`)}  className='bg-green-300 px-3 py-2 mt-10 inline-block rounded-lg'> Update Profile </button> */}

                        </div>
                    }

                </div>))
            }
        </div>
    );
};

export default MyProfileDetails;