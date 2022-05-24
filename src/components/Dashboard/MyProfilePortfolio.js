import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';

const MyProfilePortfolio = () => {
    const [user, loading, error] = useAuthState(auth);

    // const { data: portfolio, isLoading, refetch } = useQuery('UserProfile',
    //     () => fetch(`http://localhost:5000/portfolio/${user?.email}`)
    //         .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }
    const [portfolio, setPortfolio] = useState({})
    useEffect(() => {

        const url = `http://localhost:5000/portfolio/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolio(data))

        // (async()=>{
        //     const xx = await something 
        // })()  

    }, [user])



    if (!user) {
        console.log('user not show', user?.email, portfolio);
    } else {
        console.log('user show broo ', user?.email, portfolio);
    }

    return (
        <div className=' py-44 bg-slate-300 px-20 text-center'>

            <p> My Education: {portfolio?.myProfile.name}</p>
            <p> My Education: {portfolio?.myProfile?.phone}</p>

            {/* <p> My Education: {portfolio?.myProfile.name}</p>
            <p> My Phone: {portfolio?.myProfile.name}</p>
            <p> My Phone: {portfolio?.myProfile.phone}</p> */}










        </div>
    );
};

export default MyProfilePortfolio;