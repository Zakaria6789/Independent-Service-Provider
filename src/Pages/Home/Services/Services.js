import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();

    return (
        <div className='container'>
            <div>
                <h2 className='our-services-title'>Our Services</h2>
                <div className='title-underline'></div>
            </div>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;