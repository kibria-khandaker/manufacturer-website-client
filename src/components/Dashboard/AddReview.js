import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'c8407660ebe0da4fb4e33a9b4d5607e8';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        email: data.email,
                        position: data.position,
                        institute: data.institute,
                        rating: data.rating,
                        shortDesc: data.shortDesc,
                        img: img
                    }

                    // step-3: send post body in my MDB tools
                    fetch('https://manufacturer-website-server-kappa.vercel.app/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted?.insertedId) {
                                alert(' Thanks for your Review ')
                                navigate('/Reviews')
                                //  toast.success('review Added Successfully')
                                reset();
                            } else {
                                //  toast.error('review Added Failed')
                                alert('May be You Already Did, check your Review ')
                                // toast.error(`Your Already Have booking`);
                                navigate('/Reviews')
                            }
                        })

                }
                // console.log('Image imgbb 1', result)
            })
        // console.log('Add rating data 2', data);
    }

    return (
        <div>
            <h2 className=' text-center   text-xl my-5'> Add Your Valuable Review </h2>
            {/* --------------------------- */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2  md:w-4/5 lg:w-3/5  mx-auto'>
                {
                    user?.email && <input defaultValue={user?.email} className='w-full p-3 rounded-md' readOnly placeholder='Email' type="email"  {...register("email")} />
                }
                {
                    user?.displayName && <input defaultValue={user?.displayName} className='w-full p-3 rounded-md' readOnly placeholder='Name' type="text"  {...register("name")} />
                }

                <input className='w-full p-3 rounded-md' placeholder='From Where Or Institute ' {...register("institute", { required: true })} />
                <input className='w-full p-3 rounded-md' placeholder='Current Position' {...register("position", { required: true })} />

                <select className='w-full p-3 rounded-md' defaultValue={'0.5'}  {...register("rating", { required: true })}>
                    <option value="0.5" disabled hidden> Product Type </option>
                    <option value="5"> 5 </option>
                    <option value="4.5"> 4.5 </option>
                    <option value="4"> 4 </option>
                    <option value="3.5"> 3.5 </option>
                    <option value="3"> 3 </option>
                    <option value="2.5"> 2.5 </option>
                    <option value="2"> 2 </option>
                    <option value="1.5"> 1.5 </option>
                    <option value="1"> 1 </option>
                    <option value="0.5"> 0.5 </option>
                </select>

                {/* Image filed here */}
                <input className="input py-2 w-full" type="file" {...register("image", { required: true })} />

                <textarea className='w-full p-3 rounded-md' placeholder='Your Comment' {...register("shortDesc", { required: true })} />

                <input className='cursor-pointer w-full p-3 rounded-md btnBgClr text-white mt-5 font-bold text-xl' type="submit" value='Add' />
            </form>
            {/* --------------------------- */}

        </div>
    );
};
export default AddReview;