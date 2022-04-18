import React from 'react';
import './NotFound.css';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='not-found'>
                <img src={notFound} alt="" />
                <h2>This Page is Not Available !</h2>
            </div>
        </div>
    );
};

export default NotFound;