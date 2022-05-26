import React, { useState } from 'react';

const ManageOrdersRow = ({ Order, index, setDeleteOrders, refetch }) => {
    const { _id, transactionId, paid, bookToolsId, bookTools, bookUserName, bookUserEmail, bookPrice, bookQuantity, bookUserAddress, bookUserPhone } = Order;

    const [quantityCount, setQuantityCount] = useState(false)
    const statusOrd = () => {
        if (quantityCount) {
            setQuantityCount(true)
        } return
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{bookTools}</td>

            <td>
                {
                    (transactionId)
                        ?
                        <div>
                            <button onClick={() => statusOrd(setQuantityCount(!false))} class="btn btn-xs text-white border-0 rounded mt-1">
                                status:
                            </button>
                            {
                                (quantityCount === false) && <span className=' text-orange-500 font-bold'> Pending </span>
                            }
                            {
                                (quantityCount === true) && <span className=' text-green-500 font-bold'> Shipped  </span>
                            }

                            <p className='text-green-500 my-0 py-0'> Payment Completed </p>
                        </div>
                        :
                        <div>
                            <p><label onClick={() => setDeleteOrders(Order)} for="confirm_delete" className="btn  text-white border-0 rounded mt-1 btnBgClr btn-xs">Delete</label></p>
                            <p className='text-red-500 my-0 py-0'>Payment Unpaid </p>
                        </div>
                }
                {/* <p>{transactionId && <p className=' text-green-500'> Payment Completed </p>}</p> */}

            </td>


            <td>{bookUserEmail}</td>
            <td>{bookUserAddress}</td>
            <td className='text-center'>{bookQuantity}</td>
        </tr>
    );
};


export default ManageOrdersRow;