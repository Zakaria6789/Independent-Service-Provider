import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="container">
                <div className='banner-description'>
                    <div className='introduction-container'>
                        <p className='introduction'>Our Introduction</p>
                        <div className='line'></div>
                    </div>
                    <h1 className='banner-title'>Expert Doctor's Appointment ! Book Now</h1>
                    <p className='banner-text'>For getting proper treatment , We always should to go a experenced doctor. Maximum time, when our problem is so serius ,then we take the action. But is totally wrong. Remember all time, "Health is the best wealth"</p>
                    <Link to='/login'><button className='banner-btn'>Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;