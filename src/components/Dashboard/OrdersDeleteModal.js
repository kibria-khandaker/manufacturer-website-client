import React from 'react';
import { BASE_URL } from '../../utils/config';

const OrdersDeleteModal = ({ deleteOrders, refetch, setDeleteOrders }) => {
    const { bookTools, _id } = deleteOrders;

    const handelDelete = () => {
        fetch(`${BASE_URL}/booking/manage/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    // here will toast ---
                    setDeleteOrders(null) // VB: refetch hoyar agei dite hobe
                    refetch()
                }
            })
    }

    return (
        <div>

            {/* <!-- Put this part before </body> tag -->  */}
            <input type="checkbox" id="confirm_delete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg ">
                        Confirm to Delete the ( <span className='text-red-500'>{bookTools}</span> )
                    </h3>
                    <p className="py-4">
                        Make sure that, if you delete the items it will delete permanents for the database, So Are You sure for DELETE ..!
                    </p>
                    <div className="modal-action">
                        <button onClick={() => handelDelete()} className="btn btnBgClr btn-sm"> Yes, Delete </button>
                        <label for="confirm_delete" className="btn btn-sm"> No, Cancel </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrdersDeleteModal;