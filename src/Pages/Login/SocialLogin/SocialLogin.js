import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {
    return (
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
    );
};

export default SocialLogin;