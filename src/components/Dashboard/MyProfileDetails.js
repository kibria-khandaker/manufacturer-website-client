import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';

const MyProfileDetails = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: profiles, isLoading, refetch } = useQuery('UserProfile', () => fetch(`http://localhost:5000/profile/`)
        .then(res => res.json())
    )
    if (isLoading || loading ) {
        return <LoadingSpinner></LoadingSpinner>
    }

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
                                        <img src={user?.photoURL} class="max-w-sm shadow-2xl rounded-full my-4" alt='profileImage' />
                                        : <img src={profile.img} class="max-w-sm  shadow-2xl rounded-full my-4" alt='profileImage' />
                                }
                            </div>

                            <p> <b>My Education:</b> {profile.education}</p>

                            <p> <b>Phone:</b> {profile.phone}</p>

                            <p> <b>My City:</b> {profile.locationCity}</p>
                            <p> <b>My District :</b> {profile.locationDistrict}</p>
                            <p> <b>MY Country:</b> {profile.country}</p>

                            <p> <b>My Linked In Profile:</b> {profile.linkedinLink}</p>

                            <p> <b>About Me:</b> {profile.shortDesc}</p>



                        </div>
                    }

                </div>))
            }
        </div>
    );
};

export default MyProfileDetails;