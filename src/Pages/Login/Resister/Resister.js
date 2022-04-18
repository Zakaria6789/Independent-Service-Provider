import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { Link } from 'react-router-dom';

const Resister = () => {
    return (
        <div className='container'>
            <form className='login-container'>
                <div className='login'>
                    <div>
                        <h2>Resister Form</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" placeholder='Your Name' />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Email Address' />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Your Password' id="" />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" />
                        <input type="submit" value="Resister" />
                        <p>Already member ? <Link className='text-decoration-none' to='/login'>Login Now</Link></p>
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

export default Resister;