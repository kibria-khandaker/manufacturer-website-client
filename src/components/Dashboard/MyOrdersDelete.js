import React from 'react';

const MyOrdersDelete = ({ openDeleteModal, setOpenDeleteModal }) => {
    const { _id, bookTools, bookUserName } = openDeleteModal;

    const handelDelete = () => {
        fetch(`https://manufacturer-website-server-kappa.vercel.app/booking/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    setOpenDeleteModal(null) // VB: refetch hoyar agei dite hobe
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="myOrder_delete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className=" text-lg textClr">Hello, Mr: <span className='font-bold'> {bookUserName}</span> </h3>
                    <p className="py-4">
                        Remember, if delete it, will be permanently removed from Order history, Are You Sure , You want to Delete :
                        <b> { bookTools } </b>
                    </p>
                    <div className="modal-action justify-around">
                        <button onClick={() => handelDelete()} className="btn bg-red-500 border-0 btn-sm px-10"> Yes </button>
                        <label for="myOrder_delete" className="btn  bg-green-500 border-0   btn-sm px-10">  No </label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MyOrdersDelete;