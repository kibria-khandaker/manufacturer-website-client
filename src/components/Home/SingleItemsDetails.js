import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

const SingleItemsDetails = () => {
    // const [user, loading, error] = useAuthState(auth);
    // const [count, setCount] = useState(0)
    const navigate = useNavigate();

    //-----------------------------
    const { id } = useParams();

    const { data: purchaseTool, isLoading, refetch } =
        useQuery('purchaseTool', () =>
            fetch(`https://obscure-atoll-49533.herokuapp.com/tools/${id}`).then(res => res.json()))
    if (isLoading) {
        return <p> Loading ....!</p>
    }

    return (
        <div className='my-40 px-5 md:px-20 w-full md:w-5/6 lg:w-4/6 mx-auto gap-20' >

            <div className="card bg-base-100 shadow-xl py-5 ">
                <figure><img className='w-3/5 mx-auto' src={purchaseTool.img} alt="purchaseImg" /></figure>

                <div className="card-body">
                    <h3 className="text-4xl text-[#fd4475] py-5 mb-4 flex justify-between border-y border-[#fd4475] font-light">
                        {purchaseTool.name}
                        <span>
                            <sub className=' text-xs'>Price</sub>{purchaseTool.price}$
                        </span>
                    </h3>
                    <p className=""> Price : <b> ${purchaseTool.price}</b></p>
                    <p className=""> Product Type : <b> {purchaseTool.category}</b></p>
                    <p className=""> Available the Product : <b> {purchaseTool.quantity}</b></p>
                    <p className="">  Need to Minimum Order Quantity: <b>{purchaseTool.minimumOrder}</b></p>
                    <p className="py-4 my-4 border-y border-[#fd4475] "> <b> Description : </b> {purchaseTool.shortDesc}</p>

                    <div className="card-actions justify-end py-3">
                        <button onClick={() => navigate(`/purchase/${purchaseTool._id}`)} className="btn btn-sm border-0 bg-[#FD4475] capitalize"> Click for Purchase the Items </button>
                        {/* purchase link going to --> /components/Common/Order/ToolPurchase.js  */}
                    </div>
                </div>

            </div>

        </div>
    );
};


export default SingleItemsDetails;