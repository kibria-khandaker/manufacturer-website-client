import React from 'react';
import tools1 from '../../img//tool1.jpg'

const ClientsReviews = () => {
    return (
        <div className=' pb-40 pt-32  bg-[#fd4475] bg-opacity-5 '>
            <h2 className='text-[#fd4475] text-center text-4xl font-bold mb-14 '> Clients Reviews </h2>
            <div className='w-8/12 grid grid-cols-4 gap-4 mx-auto'>


                <div className="rating p-3 flex-col justify-center text-center items-center">
                    <img className="mask mask-heart" src={tools1} alt='review' />
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio!</p>
                    <div >
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star"  />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>

                <div className="rating p-3 flex-col justify-center text-center items-center">
                    <img className="mask mask-heart" src={tools1} alt='review' />
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio!</p>
                    <div >
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star"  />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>


                <div className="rating p-3 flex-col justify-center text-center items-center">
                    <img className="mask mask-heart" src={tools1} alt='review' />
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio!</p>
                    <div >
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star"  />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>

                <div className="rating p-3 flex-col justify-center text-center items-center">
                    <img className="mask mask-heart" src={tools1} alt='review' />
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio!</p>
                    <div >
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#fd4475]" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#fd4475] bg-opacity-10"  />
                        <input type="radio" name="rating-1" className="mask mask-star bg-base-300" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#fd4475] bg-opacity-30" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ClientsReviews;