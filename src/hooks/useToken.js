import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';

const useToken = (user) => {
    const [token, setToken] = useState('');
    // console.log(token);
    useEffect(() => {
        // console.log('user from token', user);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`${BASE_URL}/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('Data inside useToken', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }

    }, [user])
    return [token];
};

export default useToken;