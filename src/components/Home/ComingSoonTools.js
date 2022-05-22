import React from 'react';
import tools1 from '../../img//tool1.jpg'


const ComingSoonTools = () => {
    return (
        <div class="hero py-36">
            <div class="hero-content flex-col lg:flex-row">
                <img src={tools1} class="w-2/5 rounded-lg shadow-2xl" alt='ComingSoon' />
                <div className='w-3/5 px-10'>
                    <h2 className='text-[#fd4475]  text-4xl font-bold'> Coming Soon..!  </h2>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonTools;