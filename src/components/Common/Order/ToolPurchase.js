import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../utils/config';
import Order from './Order';

const ToolPurchase = () => {
    // const [user, loading, error] = useAuthState(auth);
    // const [count, setCount] = useState(0)

    //-----------------------------
    const { id } = useParams();

    const { data: purchaseTool, isLoading, refetch } =
        useQuery('purchaseTool', () =>
            fetch(`${BASE_URL}/tools/${id}`).then(res => res.json()))
    if (isLoading) {
        return <p> Loading ....!</p>
    }

    return (
        <div className='my-40 w-full md:w-10/12 mx-auto  lg:flex ' >

            <div className="card lg:w-2/5 bg-base-100 shadow-xl py-4">
                <div className="card-body">
                    <h3 className="text-4xl text-[#fd4475] mb-4 uppercase text-center border-b border-[#fd4475] font-light">
                        {purchaseTool.name}                        
                    </h3>                    
                    <p className="text-xl font-semibold text-[#fd4475]"> Price : ${purchaseTool.price}</p>
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