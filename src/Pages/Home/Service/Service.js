import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, visit } = service;
    return (
        <div className='service-item'>
            <img src={img} alt="patientaid" />
            <h3 className='name'>{name}</h3>
            <p>{description}</p>
            <p>Visit : <span>${visit}</span> </p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;