import React, { useEffect, useState } from 'react';
import { ImStarFull } from "react-icons/im";
import Rating from 'react-rating';
import { BASE_URL } from '../utils/config';

const Reviews = () => {
    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/review`)
            .then(res => res.json())
            .then(data => setCustomerReviews(data))
    }, [customerReviews])

    // console.log(customerReviews);

    return (
        <div className=' pb-40 pt-32  bg-[#fd4475] bg-opacity-5 '>
            <h2 className='text-[#fd4475] text-center text-4xl font-bold mb-14 '> All Reviews </h2>
            <div className='w-8/12 grid  md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto'>
                {
                    customerReviews.map(customerReview => <div key={customerReview._id} className="rating p-3 flex-col justify-center text-center items-center">
                        <div className="avatar">
                            <div className="w-16 mask mask-hexagon">
                                <img src={customerReview.img} alt='review' />
                            </div>
                        </div>
                        <div >
                            <Rating
                                initialRating={customerReview.rating}
                                emptySymbol={<ImStarFull />}
                                fullSymbol={<ImStarFull style={{ color: 'goldenrod' }} />}
                                readonly
                            ></Rating>
                            {/* <input type="radio" name="rating-1" className="mask mask-star" /> */}
                        </div>
                        <div>
                            <p className=' font-bold'> {customerReview.name} </p>
                            <p className='text-xs'> {customerReview.email} </p>
                            <p className='text-xs'> <b>From :</b> {customerReview.institute} </p>
                            <p className='text-xs'> <b>Position </b>: {customerReview.position} </p>
                            <hr className='border-red-600' />
                            <p className='text-xs py-2'> {customerReview.shortDesc} </p>
                            <hr className='border-red-600' />
                        </div>
                    </div>)
                }

            </div>
        </div>

    );
};


export default Reviews;