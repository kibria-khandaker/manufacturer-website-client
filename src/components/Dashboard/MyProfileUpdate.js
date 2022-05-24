import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';

const MyProfileUpdate = () => {

    const [user, loading, error] = useAuthState(auth);
    
    // const { data: upProfiles, isLoading, refetch } = useQuery('upProfile', () => fetch(`http://localhost:5000/profile/${user?.email}`)
    //     .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }

    return (
        <div>
            <h2> Profile User Education : {/* {upProfiles?.education} */} </h2>
            
            {/* {upProfiles?.name} */}
        </div>
    );
};

export default MyProfileUpdate;