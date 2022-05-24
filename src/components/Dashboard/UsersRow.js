import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeToAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
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
                console.log(data);
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
            <th>1</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeToAdmin} className="btn btn-xs">
                Make Admin </button>}
            </td>
            <td><button className="btn btn-xs"> Remove User </button></td>
        </tr>
    );
};

export default UsersRow;