import React from 'react';
import './Login.css';
import facebook from '../../../images/social/facebook.png';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <form className='login-container'>
                <div className='login'>
                    <div>
                        <h2>Login Form</h2>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Email Address' />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Your Password' id="" />
                        <a className='text-decoration-none' href="#reset">Forgot Password ?</a>
                        <input type="submit" value="Login" />
                        <p>Not a member ? <Link className='text-decoration-none' to='/resister'>Resister Now</Link></p>
                    </div>
                    <div className='or-container'>
                        <div className='line'></div>
                        <div className='or'>or</div>
                        <div className='line'></div>
                    </div>
                    <div className='other-login'>
                        <button>
                            <img width='21' src={google} alt="" />
                            Sign in With Google
                        </button>
                        <button>
                            <img width='23' src={facebook} alt="" />
                            Sign in With Facebook
                        </button>
                        <button>
                            <img width='27' src={github} alt="" />
                            Sign in With Github
                        </button>

                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;