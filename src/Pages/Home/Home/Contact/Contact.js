import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCoffee, faEnvelope, faLocationDot, faMapMarker, faMessage, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div id='contact' className='container'>
            <div>
                <h2 className='section-title'>Contact Us</h2>
                <div className='title-underline'></div>
            </div>
            <div className='contact-container'>
                {/***************** contact-left **************/}
                <div className='contact-form'>
                    <input type="text" placeholder='Your Name' />
                    <br />
                    <input type="email" placeholder='Your Email Address' /><br />
                    <textarea placeholder='Your Problem' name="" id="" cols="30" rows="10"></textarea>
                    <br />

                    <button className='sent-massage-button'>Send Massage</button>
                </div>
                {/***************** contact-right **************/}
                <div>
                    <div className='address-box'>
                        <div className="icon">
                            <FontAwesomeIcon className='icon' icon={faEnvelope} />

                        </div>
                        <div className="contact-info">
                            <h3>Email Address</h3>
                            <p>jakaria.hossain6363@gmail.com</p>
                        </div>
                    </div>
                    <div className='address-box'>
                        <div className="icon">
                            <FontAwesomeIcon className='icon' icon={faPhone} />
                        </div>
                        <div className="contact-info">
                            <h3>Phone Number</h3>
                            <p>+8801727-180339</p>
                        </div>
                    </div>
                    <div className='address-box'>
                        <div className="icon">
                            <FontAwesomeIcon className='icon' icon={faLocationDot} />
                        </div>
                        <div className="contact-info">
                            <h3>Office Location</h3>
                            <p>Atmile Bazar, Tebunia, Pabna</p>
                        </div>
                    </div>
                    <div className='address-box'>
                        <div className="icon">
                            <FontAwesomeIcon className='icon' icon={faClock} />
                        </div>
                        <div className="contact-info">
                            <h3>Office Time</h3>
                            <p>Daily 9am-7pm Without Friday</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;