import React from 'react';
import tools1 from '../../img//tool1.jpg'


const ComingSoonTools = () => {
    return (
        <div className="hero py-36 px-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={tools1} className=" w-4/5 lg:w-2/5 rounded-lg shadow-2xl" alt='ComingSoon' />
                <div className=' lg:w-3/5 px-10 py-10'>
                    <h2 className='text-[#fd4475]  text-4xl font-bold'> Coming Soon..!  </h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonTools;