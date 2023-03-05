import { useQuery } from 'react-query';
import { BASE_URL } from './../utils/config';

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('toolsDatas', ()=>fetch(`${BASE_URL}/tools`).then(res=>res.json()))
    return [tools, isLoading, refetch];
};

export default useTools;

// const { name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = tools;