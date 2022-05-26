import React from 'react';
import useTools from '../../hooks/useTools';
import AllToolsComponent from './AllToolsComponent';

const AllTools = () => {
    const [tools, isLoading] = useTools()
    if (isLoading) {
        return <p> Loading ....!</p>
    }
    return (

        <div className='py-20 lg:py-36'>
            <h2 className='text-[#fd4475] text-center text-4xl font-bold  mb-5'> Our All Construction Tools </h2>
            <p className='mb-14 w-4/5 md:w-3/5 lg:w-2/5 mx-auto text-center'> Every product is 100% good Quality, Because When launching the product We confirm the first Quality of the Product </p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 md:px-10 lg:px-20 mx-auto'>
                {
                    tools.map(tool => (
                        <AllToolsComponent key={tool._id} tool={tool} ></AllToolsComponent>
                    )).reverse()
                }
            </div>
        </div>

    );
};

export default AllTools;