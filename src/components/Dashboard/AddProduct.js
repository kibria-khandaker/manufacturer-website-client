import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { BASE_URL } from '../../utils/config';

const AddProduct = () => {
    const [user] = useAuthState(auth)

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
                    const product = {
                        name: data.name,
                        email: data.email,
                        category: data.category,
                        price: data.price,
                        quantity: data.quantity,
                        minimumOrder: data.minimumOrder,
                        shortDesc: data.shortDesc,
                        img: img
                    }

                    // step-3: send post body in my MDB tools
                    fetch(`${BASE_URL}/tools`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                // toast.success('Product Successfully add')
                                alert('Product Successfully added')
                                reset();
                            } else {
                                // toast.error('Product add to Failed')
                                alert('Product Failed to add')
                            }
                        })
                }
            })
        // console.log('Add Product data', data);
    }

    return (
        <div>
            <h2 className=' text-center   text-xl my-5'> Add Available Construction Tools </h2>
            {/* --------------------------- */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 md:w-4/5 lg:w-3/5 mx-auto'>
                {
                    user?.email && <input defaultValue={user?.email} className='w-full p-3 rounded-md' readOnly placeholder='Admin Email' type="email"  {...register("email")} />
                }
                <select className='w-full p-3 rounded-md' defaultValue={'x'}  {...register("category")}>
                    <option value="x" disabled hidden> Product Type </option>
                    <option value="metal"> metal </option>
                    <option value="plastic"> plastic </option>
                    <option value="wooden"> wooden </option>
                    <option value="mixed"> mixed </option>
                    <option value="machineries"> machineries </option>
                </select>

                <input className='w-full p-3 rounded-md' placeholder='Product Name' {...register("name", { required: true })} />

                <div className='flex gap-2 justify-between'>
                    <input className='w-2/6 p-3 rounded-md' placeholder='Product Price' type="number" min="1" step="1" {...register("price", { required: true })} />
                    <input className='w-2/6 p-3 rounded-md' placeholder='Available Product' type="number" min="1" step="1" {...register("quantity", { required: true })} />
                    <input className='w-2/6 p-3 rounded-md' placeholder='Minimum Order Required' type="number" min="1" step="1" {...register("minimumOrder", { required: true })} />
                </div>

                {/* Image filed here */}
                <input className="input py-2 w-full" type="file" {...register("image", { required: true })} />

                <textarea className='w-full p-3 rounded-md' placeholder='Product Description' {...register("shortDesc", { required: true })} />

                <input className=' cursor-pointer w-full p-3 rounded-md btnBgClr text-white mt-5 font-bold text-xl' type="submit" value='Add' />
            </form>
            {/* --------------------------- */}

        </div>
    );
};

export default AddProduct;