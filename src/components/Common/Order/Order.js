import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Order = ({ purchaseTool }) => {
    // const { _id, name, email, category, supplier, price, quantity, minimumOrder, quality, img, shortDesc } = purchaseTool;

    const [user, loading, error] = useAuthState(auth);
    const [quantityCount, setQuantityCount] = useState(purchaseTool.minimumOrder)
    // xxxxxxxxxxxxxxxx 
    // xxxxxxxxxxxxxxxx 
    const handleOrder = event => {
        event.preventDefault();

        // const calculation = {

        // }

        const booking = {

            bookToolsId: purchaseTool._id,
            bookTools: purchaseTool.name,

            bookUserName: user.displayName,
            bookUserEmail: user.email,

            bookPrice: event.target.price.value,
            bookQuantity: event.target.orderQuantity.value,
            bookUserAddress: event.target.address.value,
            bookUserPhone: event.target.phone.value,

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                   // toast(`Your Booking Prospering,`);
                } else {
                   // toast.error(`Your Already Have booking`);
                }
            })
    }

    // xxxxxxxxxxxxxxxx 
    // xxxxxxxxxxxxxxxx 
    const handleIncrement = () => {
        if (quantityCount < purchaseTool.quantity) {
            setQuantityCount(quantityCount + 1)
        }
    }
    const handleDecrement = () => {
        if (quantityCount > purchaseTool.minimumOrder) {
            setQuantityCount(quantityCount - 1)
        }
    }
    // xxxxxxxxxxxxxxxx 
    // xxxxxxxxxxxxxxxx 
    return (
        <div className='w-6/6 lg:w-3/5 '>
            <h2 className='text-center font-bold text-lg textClr py-10' > Complete your Booking </h2>


            {/* xxxxxxxxxxxxxxxx  */}
            <form onSubmit={handleOrder} className=' grid grid-cols-1 gap-3 justify-items-center'>
                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full" />
                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full" />


                <p className=' text-right  text-lg w-full'>
                    <p className='text-left pl-1 text-sm'>Order Quantity
                        <sub className='textClr'>
                            ( NB: unable to order minimum <b>{purchaseTool.minimumOrder}</b> maximum <b>{purchaseTool.quantity}</b> quantity of this items)
                        </sub>
                    </p>

                    <span className='flex justify-between '>
                        <p onClick={handleIncrement} className='bgClr text-white px-5 py-2  rounded-l-md cursor-pointer ' >+</p>
                        {/* defaultValue  */}
                        <input type="number" name='orderQuantity' value={quantityCount} className="input input-bordered rounded-none w-full" />
                        <p onClick={handleDecrement} className='bgClr text-white px-5 py-2 rounded-r-md cursor-pointer' >-</p>
                    </span>
                    {/* <input className='border bgClr text-white' placeholder='1' type="number" name="orderAmount" id="orderAmount" /> */}
                </p>

                <p className=' text-right text-lg w-full'>
                    <p className='text-left pl-1'><sub>Change Order Amount $</sub></p>

                    <input type="number" name='price' disabled value={purchaseTool.price * quantityCount || ''} className="input input-bordered w-full" />
                </p>

                <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full" required />
                <textarea type="text" name='address' placeholder="Your Address" className="input input-bordered w-full" required />
                <input type="submit" value="Complete Order" className="btn btnBgClr text-white w-full" />
            </form>

            <Link className=' bgClr text-white rounded-lg px-3 py-2 mt-24 inline-block mx-auto text-center' to='/'> Again Order Another Tools </Link>
            {/* xxxxxxxxxxxxxxxx  */}
        </div>
    );
};

export default Order;