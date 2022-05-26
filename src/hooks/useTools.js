import { useQuery } from 'react-query';

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('toolsDatas', ()=>fetch('https://obscure-atoll-49533.herokuapp.com/tools').then(res=>res.json()))
    return [tools, isLoading, refetch];
};

export default useTools;

// const { name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = tools;