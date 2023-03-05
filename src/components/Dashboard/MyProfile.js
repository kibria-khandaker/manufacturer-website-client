import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { BASE_URL } from '../../utils/config';
import MyProfileDetails from './MyProfileDetails';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'c8407660ebe0da4fb4e33a9b4d5607e8';

    const onSubmit = async data => {

        // step-1: upload imag in image bb and get a url
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // step-2: creat a post body with img url 
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const profile = {
                        name: data.name,
                        email: data.email,
                        education: data.education,
                        phone: data.phone,
                        quantity: data.quantity,
                        linkedinLink: data.linkedinLink,
                        locationCity: data.locationCity,
                        locationDistrict: data.locationDistrict,
                        country: data.country,
                        img: img,
                        shortDesc: data.shortDesc,
                    }

                    // step-3: send post body in my MDB tools
                    fetch(`${BASE_URL}/profile`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(profile)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                alert('Thanks For Update Your Profile ')
                                reset();
                                // window.location.reload()
                              //  toast.success('profile Update Successfully')
                            } else {
                                alert('You Already Updated ')
                              //  toast.error('Profile Update Failed')
                            }
                            reset();
                        })

                }
            })
            
    }

    return (
        <div className=' md:w-3/5 lg:w-2/5 mx-auto'>
            <h2 className='text-center font-bold'> My Profile </h2>
            {/* ---------------  */}
            <div className="hero">
                <div className="hero-content flex-col ">
                    
                    <div className='p-5'>
                        {/* ------- Profile info -------  */}
                        <div>
                            <p> {user?.email &&
                                <>  
                                    <p className='text-xl'><b> My Name: </b>{user?.displayName}  </p>
                                    <p className='text-xl mt-3  mb-5'> <b>My Email:</b> {user?.email} </p>
                                </>
                            } </p>
                        </div>

                        {/* xxxxxxxx  */}
                        <MyProfileDetails></MyProfileDetails>



                        {/* ------- Profile info Update Btn-------  */}
                        <label htmlFor="add_profile_info_modal" className="btn bgClr border-0 modal-button my-20 ">
                            Add Your Others Information
                        </label>

                    </div>
                </div>
            </div>
            {/* ---------------  */}


            {/* modal start  */}
            <input type="checkbox" id="add_profile_info_modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle pt-32">
                <div className="modal-box bg-transparent">
                    {/* <h3 className="font-bold text-lg">Congratulations random Interner user!</h3> */}
                    <div className="py-5">

                        {/* --------------------------- */}
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-3/5 mx-auto'>
                            {
                                user?.email && <input defaultValue={user?.email} className='w-full p-3 rounded-md border' readOnly placeholder='Your registration Email' type="email"  {...register("email")} />
                            }
                            {
                                user?.displayName && <input defaultValue={user?.displayName} className='w-full p-3 rounded-md border' readOnly placeholder='Your registration Name' type="text"  {...register("name")} />
                            }

                            <input className='w-full p-3 rounded-md border' placeholder='Education' {...register("education", { required: true })} />


                            <input className='w-full p-3 rounded-md border' placeholder='Phone Number' type="number" min="1" step="1" {...register("phone", { required: true })} />

                            <input className='w-full p-3 rounded-md border' placeholder='Your LinkedIn Profile link'{...register("linkedinLink", { required: true })} />


                            <input className='w-full p-3 rounded-md border' placeholder='City Location ' {...register("locationCity", { required: true })} />
                            <input className='w-full p-3 rounded-md border' placeholder='District Location ' {...register("locationDistrict", { required: true })} />
                            <input className='w-full p-3 rounded-md border' placeholder='Country ' {...register("country", { required: true })} />


                            {/* Image filed here className="w-full p-3 rounded-md border py-2 bg-white"  */}
                            <input className="input p-2 w-full" type="file" {...register("image", { required: true })} />

                            <textarea className='w-full p-3 rounded-md border' placeholder='About Yourself' {...register("shortDesc", { required: true })} />

                            <input className=' cursor-pointer w-full p-3 rounded-md btnBgClr text-white mt-5 font-bold text-xl' type="submit" value='Submit' />
                        </form>
                        {/* --------------------------- */}

                    </div>
                    <div className="modal-action mb-10">
                        <label htmlFor="add_profile_info_modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
            {/* modal end  */}


        </div >
    );
};

export default MyProfile;