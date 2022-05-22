import { useQuery } from 'react-query';

const useSingleTools = (id) => {
    const { data: singleTool, isLoading, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:4000/tools/${id}`).then(res =>
            res.json()
        )
    )
    return [singleTool, isLoading, refetch];
};

export default useSingleTools;

// const { name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = tools;