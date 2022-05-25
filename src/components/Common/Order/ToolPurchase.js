import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from './../../../firebase.init';
import Order from './Order';

const ToolPurchase = () => {
    // const [user, loading, error] = useAuthState(auth);
    // const [count, setCount] = useState(0)

    //-----------------------------
    const { id } = useParams();

    const { data: purchaseTool, isLoading, refetch } =
        useQuery('purchaseTool', () =>
            fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()))
    if (isLoading) {
        return <p> Loading ....!</p>
    }

    return (
        <div className='my-40 px-20 lg:flex gap-20' >

            <div className="card w-6/6 lg:w-2/6 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className="text-xl text-[#fd4475] py-4 mb-4 flex justify-between border-y border-[#fd4475] font-semibold">
                        {purchaseTool.name}
                        <span>
                            <sub className=' text-xs'>Price</sub>{purchaseTool.price}$
                        </span>
                    </h3>
                    <p className=""> Product Name : <b> {purchaseTool.name} </b></p>
                    <p className=""> Price : <b> ${purchaseTool.price}</b></p>
                    <p className=""> Product Type : <b> {purchaseTool.category}</b></p>
                    <p className=""> Available the Product : <b> {purchaseTool.quantity}</b></p>
                    <p className="">  Need to Minimum Order Quantity: <b>{purchaseTool.minimumOrder}</b></p>
                    <p className="py-4 my-4 border-y border-[#fd4475] "> <b> Description : </b> {purchaseTool.shortDesc}</p>
                </div>
                <figure><img src={purchaseTool.img} alt="purchaseImg" /></figure>
            </div>
            <Order
                purchaseTool={purchaseTool}
            ></Order>
        </div>
    );
};

export default ToolPurchase;