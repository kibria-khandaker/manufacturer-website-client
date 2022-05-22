import React, { useState } from 'react';

const useAdmin = () => {
    const [admin, setAdmin] = useState(true); // false ,  true

    return [admin];
};

export default useAdmin;