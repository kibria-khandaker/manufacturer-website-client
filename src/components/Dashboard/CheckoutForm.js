import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ orderItems }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    // user information with price
    const {
        _id,
        bookPrice,
        bookUserName,
        bookUserEmail,
    } = orderItems;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ bookPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [bookPrice]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('');

        setProcessing(true) // start from here....
        // confirm Card Payment ---+++
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: bookUserName,
                        email: bookUserEmail,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        } else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess(' Your Payment Is Completed ')

            // send to MDB ++++++
            const payment = {
                paymentProduct:_id,
                transactionId:paymentIntent.id,
            }

            fetch(`http://localhost:5000/booking/payment/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data=>{

                setProcessing(false)
                console.log(data);
            })


        }

        //++++----


    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=' btn btn-success btn-md px-10 mt-5' type="submit" disabled={!stripe || !clientSecret || success }>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-red-500'> {cardError} </p>
            }
            {
                success && <div className=' text-green-500 border-green-400 border p-3 rounded-lg text-center'>
                    <p>{success}</p>
                    <p> Your Transaction ID is: <span className=' text-sky-500 font-bold'>{transactionId}</span> </p>
                </div>
            }

        </>
    );
};

export default CheckoutForm;

// bookUserName,
// bookQuantity,
// bookTools,
// bookUserEmail,
// bookUserPhone,
// bookToolsId,
// _id,
// bookUserAddress,
// bookPrice,
// bookTools,