import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from './../Common/AuthAdmin/LoadingSpinner';
import ManageProductsRow from './ManageProductsRow';
import ProductsDeleteModal from './ProductsDeleteModal';

const ManageProducts = () => {
    const [deleteTools , setDeleteTools] = useState(null)
    const { data: manageTools, isLoading, refetch } = useQuery('toolsManage', () =>
        fetch('https://obscure-atoll-49533.herokuapp.com/tools/manage', {
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
            <h2 className='font-bold pb-5 pl-1'> Here Total Products : {manageTools?.length} </h2>
            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th> images </th>
                            <th> Product / Tools Name </th>
                            <th> Add By </th>
                            <th className='text-center'> Tools Quantity </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageTools.map((tool, index) => (
                                <ManageProductsRow
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteTools={setDeleteTools}
                                ></ManageProductsRow>
                            )).reverse()
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteTools && <ProductsDeleteModal
                deleteTools={deleteTools}
                refetch={refetch}
                setDeleteTools={setDeleteTools}
                ></ProductsDeleteModal>
            }
        </div>
    );
};

export default ManageProducts;