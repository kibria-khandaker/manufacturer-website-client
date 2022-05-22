import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ToolPurchase = () => {
    const { id } = useParams();

    const { data: purchaseTool, isLoading, refetch } = useQuery('purchaseTool', () => fetch(`http://localhost:4000/tools/${id}`).then(res => res.json()))
    if (isLoading) {
        return <p> Loading ....!</p>
    }
    const { name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = purchaseTool;


    return (
        <div className='my-40 px-20' >

            <div class="card w-2/6 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h3 className="text-xl text-[#fd4475] py-4 mb-4 flex justify-between border-y border-[#fd4475] font-semibold">
                        {name}
                        <span>
                            <sub className=' text-xs'>Price</sub>{price}$
                        </span>
                    </h3>
                    <p className=""> Product Type : <b> {quality}</b></p>
                    <p className=""> Available the Product : <b> {quantity}</b></p>
                    <p className="">  Need to Minimum Order Quantity: <b>{minimumOrder}</b></p>
                    <p className="py-4 my-4 border-y border-[#fd4475] "> <b> Description : </b> {shortDesc}</p>
                </div>
                <figure><img src={img} alt="purchaseImg" /></figure>
            </div>
        </div>
    );
};

export default ToolPurchase;