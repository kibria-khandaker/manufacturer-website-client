import { useQuery } from 'react-query';
import { BASE_URL } from '../utils/config';

const useSingleTools = (id) => {
    const { data: singleTool, isLoading, refetch } = useQuery('singleToolData', () =>
        fetch(`${BASE_URL}/tools/${id}`).then(res =>
            res.json()
        )
    )
    return [singleTool, isLoading, refetch];
};

export default useSingleTools;

// const { name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = tools;