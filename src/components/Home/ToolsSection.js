import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import AllToolsComponent from './AllToolsComponent';

const ToolsSection = () => {
    const navigate = useNavigate();
    const [tools, isLoading] = useTools()
    if (isLoading) {
        return <p> Loading ....!</p>
    }

    return (
        <div>
            <h2 className='text-[#fd4475] text-center text-4xl font-bold  mb-5  pt-20 lg:pt-24'> Our Construction Tools </h2>
            <p className='mb-14 w-4/5 md:w-3/5 lg:w-2/5 mx-auto text-center'> Every product is 100% good Quality, Because When launching the product We confirm the first Quality of the Product </p>
            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 lg:px-20 mx-auto'>

                {
                    tools.map(tool => (
                        <AllToolsComponent key={tool._id} tool={tool} ></AllToolsComponent>
                        // <div key={tool._id} className="card lg:card-side bg-base-100 shadow border">
                        //     <figure className='lg:w-48  p-3 mx-auto' ><img src={tool.img} alt="Album" /></figure>
                        //     <div className="card-body">
                        //         <h2 className="card-title"> {tool.name} </h2>
                        //         <p className=' text-xs'> Minimum Order: {tool.minimumOrder} </p>
                        //         <p className=' text-xs'> Available Tools: {tool.quantity}  </p>
                        //         <p> Price: {tool.price}/per-unit </p>
                        //         <p> <b>About:</b> {tool.shortDesc.length < 50 ? tool.shortDesc.length : tool.shortDesc.slice(0, 50)}

                        //         </p>
                        //         <div className="card-actions justify-end py-3">
                        //             <button onClick={() => navigate(`/purchase/${tool._id}`)} className="btn btn-sm border-0 bg-[#FD4475]">Order</button>
                        //             {/* purchase link going to --> /components/Common/Order/ToolPurchase.js  */}
                        //         </div>
                        //     </div>
                        // </div>
                    )).reverse().slice(0, 6)
                }

            </div>
            <div className='text-center mt-20'>
                <button onClick={() => navigate(`/AllTools`)}  class="btn btn-outline bgClr border-0 text-white">See All Tools For Your Order</button>
            </div>
        </div>
    );
};

export default ToolsSection;