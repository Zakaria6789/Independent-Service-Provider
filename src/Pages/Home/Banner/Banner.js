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
                    <h1 className='banner-title'>Book Online For Doctor's Appointment</h1>
                    <p className='banner-text'>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate</p>
                    <Link to='/login'><button className='banner-btn'>Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;