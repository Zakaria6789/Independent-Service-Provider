import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const handleCheckout = (event) => {
        event.preventDefault();
        toast('Thank you for the Booking')
    }

    return (

        <div className='container'>
            <div className="login-container">
                <div className="login">
                    <form onSubmit={handleCheckout}>
                        <div>
                            <h2>Checkout Info</h2>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="" placeholder='Your Name' required />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Email Address' required />
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" placeholder='Your Home Address' id="" required />
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="number" name="phone" placeholder='Phone Number' id="" required />
                            <input type="submit" value="Proceed Checkout" />
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;