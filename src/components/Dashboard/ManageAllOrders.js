import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from './../Common/AuthAdmin/LoadingSpinner';
import ManageOrdersRow from './ManageOrdersRow';
import OrdersDeleteModal from './OrdersDeleteModal';


const ManageAllOrders = () => {
    const [deleteOrders , setDeleteOrders] = useState(null)
    const { data: manageOrders, isLoading, refetch } = useQuery('manageOrders', () =>
        fetch('https://obscure-atoll-49533.herokuapp.com/booking/manage', {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h2 className='font-bold pb-5 pl-1'> Here Total Orders : {manageOrders?.length} </h2>
            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th> Order's Items Name </th>
                            <th> Status </th>
                            <th> Order By </th>
                            <th> Order Owner Address </th>
                            <th className='text-center'> Quantity </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders.map((Order, index) => (
                                <ManageOrdersRow
                                    key={Order._id}
                                    Order={Order}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteOrders={setDeleteOrders}
                                ></ManageOrdersRow>
                            )).reverse()
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteOrders && <OrdersDeleteModal
                deleteOrders={deleteOrders}
                refetch={refetch}
                setDeleteOrders={setDeleteOrders}
                ></OrdersDeleteModal>

            }
        </div>
    );
};


export default ManageAllOrders;