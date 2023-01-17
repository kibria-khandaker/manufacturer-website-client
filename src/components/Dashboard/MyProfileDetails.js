import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';

const MyProfileDetails = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: profiles, isLoading, refetch } = useQuery('UserProfile', () => fetch(`https://manufacturer-website-server-kappa.vercel.app/profile/`)
        .then(res => res.json())
    )
    if (isLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            {
                profiles.map(profile => (<div key={profile._id}>
                    {
                        user?.email === profile.email && <div>

                            <div className='py-10 w-36'>
                                {
                                    user.photoURL
                                        ?
                                        <img src={user?.photoURL} className="  shadow-2xl rounded-full my-4" alt='profileImage' />
                                        : <img src={profile.img} className="  shadow-2xl rounded-full my-4" alt='profileImage' />
                                }
                            </div>

                            <p className='pb-3'> <b>My Education:</b> {profile.education}</p>

                            <p className='pb-3'> <b>Phone:</b> {profile.phone}</p>

                            <p className='pb-3'> <b>My City:</b> {profile.locationCity}</p>
                            <p className='pb-3'> <b>My District :</b> {profile.locationDistrict}</p>
                            <p className='pb-3'> <b>MY Country:</b> {profile.country}</p>

                            <p className='pb-3'> <b>My Linked:</b> <a className='textClr underline' href={profile.linkedinLink}> My Linked In Profile </a> </p>

                            <p> <b>About Me:</b> {profile.shortDesc}</p>



                        </div>
                    }

                </div>))
            }
        </div>
    );
};

export default MyProfileDetails;