import React from 'react';
import useTools from '../../hooks/useTools';


const ToolsGallery = () => {
    const [tools, isLoading] = useTools()
    if (isLoading) {
        return <p> Loading ....!</p>
    }
    return (
        <div className=' mx-auto w-full py-36'>
            <h2 className='text-[#fd4475] text-center text-4xl font-bold mb-14 '>Tools Gallery </h2>
            <div className='w-8/12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-auto'>
                {
                    tools.map(tool => (
                        <img key={tool._id} className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tool?.img} alt="Album" />
                    )).slice(0,12)
                }
            </div>
        </div>
    );
};

export default ToolsGallery;