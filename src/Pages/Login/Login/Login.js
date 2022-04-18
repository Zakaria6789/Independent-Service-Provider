import React, { useRef } from 'react';
import './Login.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    const handleResetPassword = async (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Password Reset Email');
        }
        else {
            toast('Enter Your Email First')
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit} className='login-container'>
                <div className='login'>
                    <div>
                        <h2>Login Form</h2>
                        <label htmlFor="email">Email</label>
                        <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required />
                        <label htmlFor="password">Password</label>
                        <input ref={passwordRef} type="password" name="password" placeholder='Your Password' id="" required />
                        <Link className='text-decoration-none' onClick={handleResetPassword} to="/login">Forgot Password ?</Link>
                        <div className='text-danger'>
                            {error?.message}
                        </div>
                        <input type="submit" value="Login" />
                        <p>Not a member ? <Link className='text-decoration-none' to='/resister'>Resister Now</Link></p>
                    </div>
                    <div className='or-container'>
                        <div className='line'></div>
                        <div className='or'>or</div>
                        <div className='line'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>
                </div>
            </form>

        </div>
    );
};

export default Login;