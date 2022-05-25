import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrdersDelete from './MyOrdersDelete';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [openDeleteModal, setOpenDeleteModal] = useState(null);
    const [bookingTools, setBookingTools] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?bookUserEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('ressss', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setBookingTools(data)
                })
        }
    }, [user, navigate, openDeleteModal])

    return (
        <div>
            <h2 className='font-bold pb-5 pl-1'> Here Total Orders : {bookingTools?.length} </h2>
            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th> Tools / Product Name</th>
                            <th> Order Quantity </th>
                            <th> Pay For Order </th>
                            <th> Payment Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingTools.map((tool, index) => (
                                <tr key={tool._id}>
                                    <th>{index + 1}</th>
                                    <td>{tool.bookTools}</td>
                                    <td>{tool.bookQuantity}</td>
                                    <td>{tool.bookPrice}</td>
                                    <td>
                                        {
                                            (tool.bookPrice && !tool.paid) && <div>
                                                <Link to={`/dashboard/payment/${tool._id}`}><button className="btn bg-orange-500 border-0 rounded btn-xs">Pay</button></Link>
                                                <label onClick={() => setOpenDeleteModal(tool)} for="myOrder_delete" className="btn btnBgClr btn-xs border-0 rounded mx-2"> Cancel </label>
                                            </div>
                                        }
                                        {(tool.bookPrice && tool.paid) && <div>
                                            <p><span className=" text-green-500">Paid</span></p>
                                            <p> Transaction ID:( <span className=" text-green-500">{tool.transactionId}</span> )</p>
                                        </div>}
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            {/* ---------------------------------------------  */}

            {
                openDeleteModal && <MyOrdersDelete
                    openDeleteModal={openDeleteModal}
                    setOpenDeleteModal={setOpenDeleteModal}
                ></MyOrdersDelete>
            }

            {/* ---------------------------------------------  */}
        </div>
    );
};

export default MyOrders;