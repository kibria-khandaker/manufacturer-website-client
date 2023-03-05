import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] =useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`${BASE_URL}/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false)
                })
        }
    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;