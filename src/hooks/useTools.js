import { useQuery } from 'react-query';

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )
    return [tools, isLoading, refetch];
};

export default useTools;

// const { name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = tools;