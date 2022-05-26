import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllToolsComponent = ({tool}) => {
    const navigate = useNavigate();
    return (
        <div key={tool._id} className="card lg:card-side bg-base-100 shadow border">
        <figure className='lg:w-48  p-3 mx-auto' ><img src={tool.img} alt="Album" /></figure>
        <div className="card-body">
            <h2 className="card-title"> {tool.name} </h2>
            <p className=' text-xs'> Minimum Order: {tool.minimumOrder} </p>
            <p className=' text-xs'> Available Tools: {tool.quantity}  </p>
            <p> Price: {tool.price}/per-unit </p>
            <p> <b>About:</b> {tool.shortDesc.length < 50 ? tool.shortDesc.length : tool.shortDesc.slice(0, 50)}
              
            </p>
            <div className="card-actions justify-end py-3">
                <button onClick={() => navigate(`/purchase/${tool._id}`)} className="btn btn-sm border-0 bg-[#FD4475]">Order</button>
                {/* purchase link going to --> /components/Common/Order/ToolPurchase.js  */}
            </div>
        </div>
    </div>
    );
};


export default AllToolsComponent;