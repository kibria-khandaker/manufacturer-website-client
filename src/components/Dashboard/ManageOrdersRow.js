import React from 'react';

const ManageOrdersRow = ({ Order, index, setDeleteOrders, refetch }) => {
    const { _id, transactionId,paid, bookToolsId, bookTools, bookUserName, bookUserEmail, bookPrice, bookQuantity, bookUserAddress, bookUserPhone } = Order;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{bookTools}</td>

            <td>
                {
                    (transactionId)
                        ?
                        <>
                            <button class="btn btn-xs text-green-500 bg-green-100 border-0 rounded mt-1">Payment Completed</button>
                            <br />
                            <button class="btn btn-xs text-green-500 bg-green-100 border-0 rounded mt-1">Payment Completed</button>
                        </>
                        :
                        <>
                            No
                        </>
                }
                {/* <p>{transactionId && <p className=' text-green-500'> Payment Completed </p>}</p> */}
                <p><label onClick={() => setDeleteOrders(Order)} for="confirm_delete" className="btn  border-0 rounded mt-1 btnBgClr btn-xs">Delete</label></p>
            </td>


            <td>{bookUserEmail}</td>
            <td>{bookUserAddress}</td>
            <td className='text-center'>{bookQuantity}</td>
        </tr>
    );
};


export default ManageOrdersRow;