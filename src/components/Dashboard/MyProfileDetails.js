import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';

const MyProfileDetails = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: profiles, isLoading, refetch } = useQuery('UserProfile', () => fetch(`http://localhost:5000/profile/`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const onSubmit = async (data, email) => {
        console.log('Add Product data', data);
        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
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




                            {/* xxxxxxxxx Update Your Profile Start xxxxxxxxxx  */}

                            <label htmlFor="update_user_profile_modal" className="btn bgClr border-0 modal-button mt-20 ">
                                Update Your Profile
                            </label>


                            {/* Update Your Profile modal start  */}
                            <input type="checkbox" id="update_user_profile_modal" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle pt-32">
                                <div className="modal-box">
                                    {/* <h3 className="font-bold text-lg">Congratulations random Interner user!</h3> */}
                                    <div className="py-5">

                                        {/* --------------------------- */}
                                        <p className=' text-xs text-center py-4'> <b>NB:</b> Some Items Not Allow to Update <b>(Like) : </b> <span className='textClr font-bold'> Image / Email / User Name</span> </p>
                                        <img src={profile.img} class="max-w-sm  shadow-2xl mx-auto rounded-full my-4" alt='profileImage' />

                                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-3/5 mx-auto'>
                                            {
                                                user?.email && <input defaultValue={user?.email} className='w-full p-3 rounded-md border textClr bg-base-300' readOnly placeholder='Your registration Email' type="email"  {...register("email")} />
                                            }
                                            {
                                                user?.displayName && <input defaultValue={user?.displayName} className='w-full p-3 rounded-md border textClr bg-base-300' readOnly placeholder='Your registration Name' type="text"  {...register("name")} />
                                            }
                                            {
                                                profile?.education &&

                                                <input defaultValue={profile?.education} className='w-full p-3 rounded-md border' placeholder='Education' {...register("education", { required: true })} />
                                            }

                                            {
                                                profile?.phone &&
                                                <input defaultValue={profile?.phone} className='w-full p-3 rounded-md border' placeholder='Phone Number' type="number" min="1" step="1" {...register("phone", { required: true })} />
                                            }

                                            {
                                                profile?.linkedinLink &&
                                                <input defaultValue={profile?.linkedinLink} className='w-full p-3 rounded-md border' placeholder='Your LinkedIn Profile link'{...register("linkedinLink", { required: true })} />
                                            }

                                            {
                                                profile?.locationCity &&
                                                <input defaultValue={profile?.locationCity} className='w-full p-3 rounded-md border' placeholder='City Location ' {...register("locationCity", { required: true })} />
                                            }
                                            {
                                                profile?.locationDistrict &&
                                                <input defaultValue={profile?.locationDistrict} className='w-full p-3 rounded-md border' placeholder='District Location ' {...register("locationDistrict", { required: true })} />
                                            }
                                            {
                                                profile?.country &&
                                                <input defaultValue={profile?.country} className='w-full p-3 rounded-md border' placeholder='Country ' {...register("country", { required: true })} />
                                            }

                                            {
                                                profile?.shortDesc &&
                                                <textarea defaultValue={profile?.shortDesc} className='w-full p-3 rounded-md border' placeholder='About Yourself' {...register("shortDesc", { required: true })} />
                                            }

                                            <input className='w-full p-3 rounded-md btnBgClr text-white mt-5 font-bold text-xl' type="submit" value='Submit' />
                                        </form>
                                        {/* --------------------------- */}

                                    </div>
                                    <div className="modal-action mb-10">
                                        <label htmlFor="update_user_profile_modal" className="btn">Close</label>
                                    </div>
                                </div>
                            </div>
                            {/* Update Your Profile modal end  */}

                            {/* -----------------  */}

                        </div>
                    }

                </div>))
            }
        </div>
    );
};

export default MyProfileDetails;