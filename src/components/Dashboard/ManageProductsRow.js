import React from 'react';

const ManageProductsRow = ({ tool, index, setDeleteTools, refetch }) => {
    const { _id, img, name, email, quantity } = tool;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt="productImage" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td className='text-center'>{quantity}</td>
            <td>
                <label onClick={()=>setDeleteTools(tool)} for="confirm_delete" className="btn btnBgClr btn-xs">Delete</label>
                
            </td>

        </tr>
    );
};

export default ManageProductsRow;