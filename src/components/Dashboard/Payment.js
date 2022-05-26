import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './../Common/AuthAdmin/LoadingSpinner';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L0jU3AqFvNpvzEjXvJSHCEO5ZVNPm48Hn4B6hWXI2xn76uf12GY4yX2y3TbwCNJDY8qaN5TdekYwQ6tTIIJ2Oiv00NeN1NxHu');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/payment/${id}`;

    const { data: orderItems, isLoading, refetch } = useQuery(['bookingPayment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // console.log(orderItems);

    return (
        <div>
            <h2> Payment Product ID: {id} </h2>
            {/* ----------------------------------------  */}

            <div className='p-10 bg-gray-50'>
                {/* payment items information start */}
                <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> Hello Mr! {orderItems.bookUserName} </h2>
                        <p className=' text-orange-600'>Your Booked Item's Details</p>
                        <div className=' text-xs'>
                            <p> <b> Order Quantity :</b> {orderItems.bookQuantity} </p>
                            <p> <b> Product Name :</b> {orderItems.bookTools} </p>
                            <p> <b> Your Email :</b> {orderItems.bookUserEmail} </p>
                            <p> <b> Your Phone :</b> {orderItems.bookUserPhone} </p>
                            <p> <b> Product ID :</b> {orderItems.bookToolsId} </p>
                            <p> <b> Booking ID :</b> {orderItems._id} </p>
                            <p> <b> Your Address :</b> {orderItems.bookUserAddress} </p>
                        </div>
                        <div class="card-actions justify-end">
                            <p className='text-orange-600'>Please pay
                                <b> ( {orderItems.bookPrice}$ ) </b> for
                                <b> ( {orderItems.bookTools} ) </b>
                            </p>
                        </div>
                    </div>
                </div>
                {/* payment box start  */}
                <div className="card my-4 flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className=' text-center px-10 '> <b>NB:</b> <b className='textClr'>Place wait</b> until see you Payment Conformation Message </p>
                        <hr />
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orderItems={orderItems} />
                        </Elements>

                    </div>
                </div>

            </div>

            {/* ----------------------------------------  */}
        </div>
    );
};

export default Payment;


// bookPrice: "75"
// bookQuantity: "3"
// bookTools: "ffffffff"
// bookToolsId: "628dbd73d773f82da47b6b20"
// bookUserAddress: "sdasdasd"
// bookUserEmail: "abcd2024@gmail.com"
// bookUserName: "abcd2024"
// bookUserPhone: "1313213"
// _id: "628e10537ee8500bd847e0d2"


//API:   http://localhost:5000/booking/payment/628e10537ee8500bd847e0d2  