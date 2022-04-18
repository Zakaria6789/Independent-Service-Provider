import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);

    if (loading || loading2 || loading3) {
        return <Loading></Loading>;
    }

    if (user || user2 || user3) {
        navigate(from, { replace: true });
    }

    return (
        <div className='other-login'>
            <button onClick={() => signInWithGoogle()}>
                <img width='21' src={google} alt="" />
                Sign in With Google
            </button>
            <button onClick={() => signInWithFacebook()}>
                <img width='23' src={facebook} alt="" />
                Sign in With Facebook
            </button>
            <button onClick={() => signInWithGithub()}>
                <img width='27' src={github} alt="" />
                Sign in With Github
            </button>
        </div>
    );
};

export default SocialLogin;