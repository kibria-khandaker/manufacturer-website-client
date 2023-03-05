import React from 'react';
import { BASE_URL } from '../../utils/config';

const UsersRow = ({ user,index, refetch }) => {
    const { email, role } = user;
    const makeToAdmin = () => {
        fetch(`${BASE_URL}/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    // toast.error(`You Han't Power to make  Admin`)
                    alert(`You Han't Power to make  Admin`)
                }
                // toast.error(`You Han't Power to make  Admin`)
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    // toast.success(`Admin  Successfully`)
                    alert(`Admin make Successfully`)
                    // console.log(data);
                }
            })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeToAdmin} className="btn rounded btn-xs">
                Make Admin </button>}
            </td>            
        </tr>
    );
};

export default UsersRow;