import React from 'react';

const ManageOrdersRow = ({ Order, index, setDeleteOrders, refetch }) => {
    const { _id,bookToolsId,bookTools,bookUserName,bookUserEmail,bookPrice,bookQuantity,bookUserAddress,bookUserPhone } = Order;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{bookTools}</td>
            <td>{bookUserEmail}</td>
            <td>{bookUserAddress}</td>
            <td className='text-center'>{bookQuantity}</td>
            <td>
                <label onClick={()=>setDeleteOrders(Order)} for="confirm_delete" className="btn btnBgClr btn-xs">Delete</label>
                
            </td>

        </tr>
    );
};


export default ManageOrdersRow;