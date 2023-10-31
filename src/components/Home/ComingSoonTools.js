import React from 'react';
import tools1 from '../../img//tool1.jpg'


const ComingSoonTools = () => {
    return (
        <div className="hero py-10 md:py-36 px-3 md:px-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src='https://i.ibb.co/hYLfDYT/coming-m.jpg' className=" w-full md:w-3/5 lg:w-4/12 rounded-lg shadow-2xl" alt='ComingSoon' />
                <div className=' lg:w-7/12 md:px-10 py-10'>
                    <h2 className='text-[#fd4475]  text-4xl font-bold'> Coming Soon..!  </h2>
                    <p className="py-6 text-xl"> <b>NorthStar Jumping Jack Tamping Rammer — With 4 HP Honda Engine</b> This NorthStar® gas-powered tamping rammer is ideal for compacting cohesive soil in confined areas. Powered by a 4 HP Honda 4-cycle gasoline engine, it features a convenient oil checking system and dual filter system. Rammer is lightweight and well balanced for easy handling and operation. Suitable for trenches, pipelines and patching. </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonTools;