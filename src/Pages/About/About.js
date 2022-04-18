import React from 'react';
import './About.css';
import photo from '../../images/me.png';

const About = () => {
    return (
        <div className='container'>
            <div>
                <h2 className='section-title'>About Me</h2>
                <div className='title-underline'></div>
            </div>
            <div className='about-me'>

                <div>
                    <img src={photo} alt="" />
                </div>
                <div className="my-description">
                    <h2>Way to Be A Developer </h2>
                    <p>I want to be a web developer. I am learning now for my dream. I don't know could I success or fail. But I will try with my best. Actually I was miss-guided or self-guided. So that I waste a long time in this sector. But I think I find the appropiate place for true learning. Thank You.</p>
                </div>
            </div>
        </div>
    );
};

export default About;