import React from 'react';
import tools1 from '../../img//tool1.jpg'


const ToolsGallery = () => {
    return (
        <div className=' mx-auto w-full py-36'>
            <h2 className='text-[#fd4475] text-center text-4xl font-bold mb-14 '>Tools Gallery </h2>
            <div className='w-8/12 grid grid-cols-4 gap-4 mx-auto'>
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
                <img className=' border border-base-300 hover:border-[#fd4475] rounded-lg' src={tools1} alt="Album" />
            </div></div>
    );
};

export default ToolsGallery;