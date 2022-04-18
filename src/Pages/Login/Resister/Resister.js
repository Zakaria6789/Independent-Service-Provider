import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Resister = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading></Loading>;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setErrorMessage("Error: Password and Confirm-Password didn't match");
            return;
        }
        else {
            setErrorMessage('');
        }
        createUserWithEmailAndPassword(email, password);


    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container'>
            <div className="login-container">
                <div className="login">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <h2>Resister Form</h2>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="" placeholder='Your Name' required />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Email Address' required />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder='Your Password' id="" required />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" required />
                            <div className='text-danger'>
                                {error ? error?.message : errorMessage}
                            </div>
                            <input type="submit" value="Resister" />
                            <p>Already member ? <Link className='text-decoration-none' to='/login'>Login Now</Link></p>
                        </div>
                        <div className='or-container'>
                            <div className='line'></div>
                            <div className='or'>or</div>
                            <div className='line'></div>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Resister;