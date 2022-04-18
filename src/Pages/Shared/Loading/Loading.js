import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className='container loading'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;